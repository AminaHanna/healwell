import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Blog types
export const blogTypes = {
  id: 'string',
  title: 'string',
  slug: 'string',
  content: 'string',
  excerpt: 'string | null',
  featured_image: 'string | null',
  author: 'string',
  published: 'boolean',
  published_at: 'string | null',
  created_at: 'string',
  updated_at: 'string',
};

// Service types
export const serviceTypes = {
  id: 'string',
  title: 'string',
  slug: 'string',
  description: 'string',
  short_description: 'string | null',
  icon: 'string | null',
  featured_image: 'string | null',
  price: 'string | null',
  active: 'boolean',
  display_order: 'number',
  created_at: 'string',
  updated_at: 'string',
};

