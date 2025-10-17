#!/usr/bin/env node

/**
 * Create Storage Buckets using Supabase REST API
 * This script creates storage buckets using the anon key
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const supabaseUrl = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)?.[1]?.trim();
const anonKey = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/)?.[1]?.trim();

if (!supabaseUrl || !anonKey) {
  console.error('❌ Error: Missing environment variables');
  console.error('   Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

// Extract project ID from URL
const projectId = supabaseUrl.split('//')[1].split('.')[0];

async function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${supabaseUrl}${path}`);
    
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${anonKey}`,
        'apikey': anonKey,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }

    req.end();
  });
}

async function createBuckets() {
  console.log('🚀 Starting bucket creation with anon key...\n');

  const buckets = [
    { id: 'blog-images', name: 'blog-images', public: true },
    { id: 'service-images', name: 'service-images', public: true },
  ];

  for (const bucket of buckets) {
    try {
      console.log(`📦 Creating bucket: ${bucket.id}...`);
      
      const response = await makeRequest(
        'POST',
        '/storage/v1/bucket',
        {
          id: bucket.id,
          name: bucket.name,
          public: bucket.public,
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log(`   ✅ Bucket '${bucket.id}' created successfully`);
      } else if (response.status === 400 && response.data.message && response.data.message.includes('already exists')) {
        console.log(`   ✅ Bucket '${bucket.id}' already exists`);
      } else {
        console.error(`   ❌ Error (${response.status}):`, response.data);
      }
    } catch (err) {
      console.error(`   ❌ Error creating bucket '${bucket.id}':`, err.message);
    }
  }

  console.log('\n✅ Bucket creation process complete!');
  console.log('\nNext steps:');
  console.log('1. Go to your Supabase dashboard');
  console.log('2. Navigate to Storage section');
  console.log('3. Verify both buckets exist and are public');
  console.log('4. Try uploading an image in the admin panel');
}

createBuckets().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});

