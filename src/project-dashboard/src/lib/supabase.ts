import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string | null;
  icon: string | null;
  featured_image: string | null;
  price: string | null;
  active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};
