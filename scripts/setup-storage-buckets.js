#!/usr/bin/env node

/**
 * Setup Storage Buckets Script
 * 
 * This script creates the required storage buckets in Supabase for the Medilo project.
 * 
 * Usage:
 *   node scripts/setup-storage-buckets.js
 * 
 * Requirements:
 *   - NEXT_PUBLIC_SUPABASE_URL environment variable
 *   - NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable
 *   - SUPABASE_SERVICE_ROLE_KEY environment variable (for bucket creation)
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Missing environment variables');
  console.error('   Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  console.error('   Add these to your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createBuckets() {
  console.log('🚀 Starting storage bucket setup...\n');

  const buckets = [
    { id: 'blog-images', name: 'blog-images', public: true },
    { id: 'service-images', name: 'service-images', public: true },
  ];

  for (const bucket of buckets) {
    try {
      console.log(`📦 Creating bucket: ${bucket.id}...`);
      
      const { data, error } = await supabase.storage.createBucket(bucket.id, {
        public: bucket.public,
      });

      if (error) {
        if (error.message.includes('already exists')) {
          console.log(`   ✅ Bucket '${bucket.id}' already exists`);
        } else {
          console.error(`   ❌ Error creating bucket '${bucket.id}':`, error.message);
        }
      } else {
        console.log(`   ✅ Bucket '${bucket.id}' created successfully`);
      }
    } catch (err) {
      console.error(`   ❌ Error creating bucket '${bucket.id}':`, err.message);
    }
  }

  console.log('\n✅ Storage bucket setup complete!');
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

