# Supabase Storage Setup Guide

## Overview
This guide explains how to set up the required storage buckets in Supabase for the Medilo application to handle image uploads for blogs and services.

## Required Storage Buckets

The application requires two storage buckets:
1. **blog-images** - For storing blog featured images
2. **service-images** - For storing service featured images

## Setup Instructions

### Method 1: Using Supabase Dashboard (Recommended)

1. **Log in to Supabase Dashboard**
   - Go to https://app.supabase.com
   - Select your project

2. **Navigate to Storage**
   - Click on "Storage" in the left sidebar
   - You should see the Storage section

3. **Create blog-images Bucket**
   - Click "New bucket" button
   - Enter bucket name: `blog-images`
   - Make sure "Public bucket" is **CHECKED** (important!)
   - Click "Create bucket"

4. **Create service-images Bucket**
   - Click "New bucket" button
   - Enter bucket name: `service-images`
   - Make sure "Public bucket" is **CHECKED** (important!)
   - Click "Create bucket"

5. **Verify Buckets**
   - You should now see both `blog-images` and `service-images` in your storage list
   - Both should have a "public" indicator

### Method 2: Using SQL (Alternative)

If you prefer to use SQL, you can run these commands in the Supabase SQL Editor:

```sql
-- Create blog-images bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- Create service-images bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('service-images', 'service-images', true);
```

## Bucket Policies

By default, public buckets allow anyone to view files but restrict uploads. To allow authenticated users to upload files, you may need to set up Row Level Security (RLS) policies.

### Recommended Policy for blog-images

```sql
-- Allow authenticated users to upload
CREATE POLICY "Allow authenticated users to upload"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- Allow public read access
CREATE POLICY "Allow public read"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-images');
```

### Recommended Policy for service-images

```sql
-- Allow authenticated users to upload
CREATE POLICY "Allow authenticated users to upload"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'service-images' 
  AND auth.role() = 'authenticated'
);

-- Allow public read access
CREATE POLICY "Allow public read"
ON storage.objects
FOR SELECT
USING (bucket_id = 'service-images');
```

## Troubleshooting

### Error: "Bucket not found"
- **Cause**: The storage bucket doesn't exist in your Supabase project
- **Solution**: Follow the setup instructions above to create the bucket
- **Verify**: Check the Storage section in Supabase dashboard to confirm the bucket exists

### Error: "Permission denied"
- **Cause**: The bucket is not public or RLS policies are too restrictive
- **Solution**: 
  1. Make sure the bucket is marked as "Public" in the dashboard
  2. Check and update the RLS policies as shown above

### Images not displaying
- **Cause**: The bucket might be private or the public URL is incorrect
- **Solution**:
  1. Verify the bucket is public
  2. Check that the image file exists in the bucket
  3. Try accessing the public URL directly in your browser

## Testing Image Upload

1. **Navigate to Admin Dashboard**
   - Go to `/admin` in your application

2. **Create a New Blog Post**
   - Click "Create New Blog Post"
   - Fill in the form
   - Click "Choose File" under "Featured Image"
   - Select an image from your computer
   - You should see a preview of the image
   - Click "Save Blog Post"

3. **Verify Upload**
   - Check the Supabase Storage dashboard
   - Navigate to the `blog-images` bucket
   - You should see your uploaded image file

4. **Verify Display**
   - Go to the blog listing page
   - You should see the uploaded image displayed
   - Click on the blog to view details
   - The featured image should display at the top

## File Naming Convention

Uploaded files are automatically named with the following pattern:
```
{prefix}-{timestamp}-{randomString}-{originalFileName}
```

Examples:
- `blog-1697234567890-a1b2c3-my-image.jpg`
- `service-1697234567890-d4e5f6-service-photo.png`

This naming convention ensures:
- Unique file names (prevents overwrites)
- Easy identification of file type (blog vs service)
- Readable original file names

## Storage Limits

Check your Supabase plan for storage limits:
- **Free Plan**: 1 GB storage
- **Pro Plan**: 100 GB storage
- **Enterprise**: Custom limits

## Best Practices

1. **Image Optimization**
   - Compress images before uploading to save storage space
   - Use appropriate image formats (JPG for photos, PNG for graphics)
   - Recommended max file size: 5 MB

2. **File Organization**
   - Use the automatic naming convention (don't manually rename files)
   - Keep bucket structure simple (flat structure recommended)

3. **Security**
   - Always keep buckets public for read access only
   - Restrict write access to authenticated users
   - Regularly review uploaded files for inappropriate content

4. **Backup**
   - Regularly backup your storage files
   - Consider using Supabase's backup features

## Additional Resources

- [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)
- [Supabase Storage API Reference](https://supabase.com/docs/reference/javascript/storage-createbucket)
- [Row Level Security (RLS) Guide](https://supabase.com/docs/guides/auth/row-level-security)


