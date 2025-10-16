/**
 * Script to add 3 test blogs to Supabase
 * Run with: node scripts/add-test-blogs.js
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const testBlogs = [
  {
    title: 'The Importance of Regular Health Checkups',
    slug: 'importance-regular-health-checkups',
    author: 'Dr. Sarah Johnson',
    excerpt: 'Regular health checkups are essential for maintaining good health and preventing serious diseases. Learn why preventive care matters.',
    content: `<h2>Why Regular Health Checkups Matter</h2>
<p>Regular health checkups are one of the most important aspects of maintaining good health. They help detect potential health issues before they become serious problems.</p>

<h3>Benefits of Regular Checkups</h3>
<ul>
  <li><strong>Early Detection:</strong> Many diseases can be detected early when they are easier to treat.</li>
  <li><strong>Prevention:</strong> Regular checkups help identify risk factors and prevent diseases.</li>
  <li><strong>Monitoring:</strong> If you have chronic conditions, regular checkups help monitor your health status.</li>
  <li><strong>Peace of Mind:</strong> Knowing your health status gives you peace of mind.</li>
</ul>

<h3>What to Expect During a Checkup</h3>
<p>A typical health checkup includes:</p>
<ul>
  <li>Blood pressure measurement</li>
  <li>Weight and height measurement</li>
  <li>Blood tests</li>
  <li>Physical examination</li>
  <li>Discussion of health concerns</li>
</ul>

<h3>How Often Should You Get Checkups?</h3>
<p>The frequency of health checkups depends on your age, health status, and risk factors. Generally, adults should have at least one checkup per year.</p>

<p>Don't wait for symptoms to appear. Schedule your regular health checkup today!</p>`,
    featured_image: '/assets/img/post_1.jpeg',
    published: true,
  },
  {
    title: 'Mental Health: Breaking the Stigma',
    slug: 'mental-health-breaking-stigma',
    author: 'Dr. Michael Chen',
    excerpt: 'Mental health is just as important as physical health. Let\'s discuss how to break the stigma and seek help when needed.',
    content: `<h2>Understanding Mental Health</h2>
<p>Mental health is a crucial part of our overall well-being. It affects how we think, feel, and act in our daily lives.</p>

<h3>Common Mental Health Conditions</h3>
<ul>
  <li><strong>Depression:</strong> A persistent feeling of sadness and loss of interest.</li>
  <li><strong>Anxiety:</strong> Excessive worry and fear that interferes with daily life.</li>
  <li><strong>Stress:</strong> A response to pressure or demands.</li>
  <li><strong>PTSD:</strong> Post-traumatic stress disorder following traumatic events.</li>
</ul>

<h3>Breaking the Stigma</h3>
<p>Many people suffer in silence due to the stigma surrounding mental health. It's important to understand that:</p>
<ul>
  <li>Mental health conditions are medical conditions, not personal weaknesses.</li>
  <li>Seeking help is a sign of strength, not weakness.</li>
  <li>Treatment is effective and can significantly improve quality of life.</li>
  <li>Recovery is possible with proper support and treatment.</li>
</ul>

<h3>How to Support Someone with Mental Health Issues</h3>
<p>If someone you know is struggling with mental health:</p>
<ul>
  <li>Listen without judgment</li>
  <li>Encourage them to seek professional help</li>
  <li>Be patient and supportive</li>
  <li>Help them find resources and support groups</li>
</ul>

<p>Remember, mental health matters. If you're struggling, reach out for help today.</p>`,
    featured_image: '/assets/img/post_2.jpeg',
    published: true,
  },
  {
    title: 'Nutrition Tips for a Healthier Lifestyle',
    slug: 'nutrition-tips-healthier-lifestyle',
    author: 'Dr. Emily Rodriguez',
    excerpt: 'Proper nutrition is the foundation of good health. Discover practical nutrition tips to improve your lifestyle.',
    content: `<h2>The Power of Proper Nutrition</h2>
<p>What we eat directly impacts our health, energy levels, and overall well-being. Good nutrition is essential for maintaining a healthy lifestyle.</p>

<h3>Key Nutrients Your Body Needs</h3>
<ul>
  <li><strong>Proteins:</strong> Build and repair tissues, make enzymes and hormones.</li>
  <li><strong>Carbohydrates:</strong> Provide energy for daily activities.</li>
  <li><strong>Fats:</strong> Support cell growth and hormone production.</li>
  <li><strong>Vitamins:</strong> Support immune function and overall health.</li>
  <li><strong>Minerals:</strong> Essential for bone health and body functions.</li>
</ul>

<h3>Practical Nutrition Tips</h3>
<ol>
  <li><strong>Eat a Balanced Diet:</strong> Include fruits, vegetables, whole grains, and lean proteins.</li>
  <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day.</li>
  <li><strong>Limit Processed Foods:</strong> Choose whole foods over processed options.</li>
  <li><strong>Control Portion Sizes:</strong> Eat appropriate portions to maintain healthy weight.</li>
  <li><strong>Plan Your Meals:</strong> Prepare meals in advance to make healthier choices.</li>
  <li><strong>Read Food Labels:</strong> Understand what you're eating.</li>
</ol>

<h3>Foods to Include in Your Diet</h3>
<ul>
  <li>Leafy greens and colorful vegetables</li>
  <li>Fresh fruits</li>
  <li>Whole grains</li>
  <li>Lean proteins (fish, chicken, legumes)</li>
  <li>Healthy fats (nuts, seeds, olive oil)</li>
</ul>

<p>Start making small changes today. Your body will thank you!</p>`,
    featured_image: '/assets/img/post_3.jpeg',
    published: true,
  },
];

async function addTestBlogs() {
  try {
    console.log('Adding test blogs to Supabase...');

    for (const blog of testBlogs) {
      const { data, error } = await supabase
        .from('blogs')
        .insert([
          {
            ...blog,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            published_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        console.error(`Error adding blog "${blog.title}":`, error);
      } else {
        console.log(`✅ Added blog: "${blog.title}"`);
      }
    }

    console.log('\n✅ All test blogs added successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

addTestBlogs();

