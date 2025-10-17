-- Fix Storage RLS Policies for blog-images and service-images buckets
-- This script allows public uploads and downloads

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Public Upload" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view" ON storage.objects;

-- Enable RLS on storage.objects table
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public read access to all objects
CREATE POLICY "Public Read Access"
ON storage.objects FOR SELECT
USING (bucket_id IN ('blog-images', 'service-images'));

-- Policy 2: Allow authenticated users to upload
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id IN ('blog-images', 'service-images')
  AND auth.role() = 'authenticated'
);

-- Policy 3: Allow users to delete their own uploads
CREATE POLICY "User Delete Own"
ON storage.objects FOR DELETE
USING (
  bucket_id IN ('blog-images', 'service-images')
  AND auth.uid() = owner
);

-- Policy 4: Allow users to update their own uploads
CREATE POLICY "User Update Own"
ON storage.objects FOR UPDATE
WITH CHECK (
  bucket_id IN ('blog-images', 'service-images')
  AND auth.uid() = owner
);

