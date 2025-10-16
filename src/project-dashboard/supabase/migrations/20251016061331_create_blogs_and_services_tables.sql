/*
  # Admin Dashboard - Blogs and Services Tables

  ## Overview
  Creates tables for managing blog posts and services in an admin dashboard.

  ## New Tables
  
  ### `blogs`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text, required) - Blog post title
  - `slug` (text, unique, required) - URL-friendly version of the title
  - `content` (text, required) - Full blog post content
  - `excerpt` (text) - Short summary of the blog post
  - `featured_image` (text) - URL to the featured image
  - `author` (text, required) - Author name
  - `published` (boolean, default false) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz, default now()) - Record creation timestamp
  - `updated_at` (timestamptz, default now()) - Record update timestamp

  ### `services`
  - `id` (uuid, primary key) - Unique identifier for each service
  - `title` (text, required) - Service title
  - `slug` (text, unique, required) - URL-friendly version of the title
  - `description` (text, required) - Full service description
  - `short_description` (text) - Brief service summary
  - `icon` (text) - Icon identifier or URL
  - `featured_image` (text) - URL to the featured image
  - `price` (text) - Pricing information (text for flexibility)
  - `active` (boolean, default true) - Active status
  - `display_order` (integer, default 0) - Order for displaying services
  - `created_at` (timestamptz, default now()) - Record creation timestamp
  - `updated_at` (timestamptz, default now()) - Record update timestamp

  ## Security
  
  ### Row Level Security (RLS)
  - RLS enabled on both `blogs` and `services` tables
  - All operations restricted to authenticated users only
  - Policies created for SELECT, INSERT, UPDATE, and DELETE operations
  
  ### Important Notes
  1. Only authenticated users can manage blogs and services
  2. All CRUD operations require authentication
  3. No public access by default - add separate public policies if needed for frontend display
*/

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  featured_image text,
  author text NOT NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  short_description text,
  icon text,
  featured_image text,
  price text,
  active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on blogs table
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Enable RLS on services table
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Blogs policies
CREATE POLICY "Authenticated users can view all blogs"
  ON blogs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING (true);

-- Services policies
CREATE POLICY "Authenticated users can view all services"
  ON services FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS blogs_published_idx ON blogs(published);
CREATE INDEX IF NOT EXISTS blogs_slug_idx ON blogs(slug);
CREATE INDEX IF NOT EXISTS services_active_idx ON services(active);
CREATE INDEX IF NOT EXISTS services_slug_idx ON services(slug);
CREATE INDEX IF NOT EXISTS services_display_order_idx ON services(display_order);
