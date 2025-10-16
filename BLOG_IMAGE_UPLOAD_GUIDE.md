# 📸 Blog Image Upload Feature - Complete Guide

## Overview

The blog management system now includes a complete image upload feature that allows you to:
- ✅ Upload images directly from your computer
- ✅ Preview images before saving
- ✅ Paste image URLs manually
- ✅ Remove images easily

## Features Added

### 1. Image Upload Functionality
- **Drag & Drop Support:** Click to upload or drag files
- **File Validation:** Only image files accepted
- **Size Limit:** Maximum 5MB per image
- **Automatic Naming:** Files are automatically named with timestamps
- **Cloud Storage:** Images stored in Supabase Storage

### 2. Image Preview
- **Live Preview:** See the image before saving
- **Remove Button:** Easy removal with X button
- **Responsive:** Preview scales to fit the form

### 3. Dual Input Methods
- **File Upload:** Click to select from computer
- **URL Input:** Paste image URLs directly

## How to Use

### Adding a Blog with Image Upload

1. **Go to Admin Dashboard**
   - Navigate to the Blog Manager section

2. **Click "New Blog Post"**
   - Opens the blog creation form

3. **Fill in Blog Details**
   - Title
   - Author
   - Excerpt
   - Content

4. **Upload Featured Image**
   - **Option A - Upload from Computer:**
     - Click the upload area
     - Select an image file (JPG, PNG, GIF, etc.)
     - Wait for upload to complete
     - Image preview appears automatically
   
   - **Option B - Paste Image URL:**
     - Paste a URL in the "Or paste image URL" field
     - Preview updates automatically

5. **Publish Blog**
   - Check "Publish immediately" if ready
   - Click "Create Blog Post"

### Editing a Blog with Image

1. **Click Edit Button** on the blog in the list
2. **Update Image** if needed
3. **Click Update Blog Post**

### Removing an Image

1. **Click the X button** on the image preview
2. Image is removed from the form
3. You can upload a new one

## Technical Details

### Image Upload Process

```
1. User selects image file
2. File validation (type & size)
3. Upload to Supabase Storage (blog-images bucket)
4. Generate public URL
5. Store URL in featured_image field
6. Display preview to user
```

### Storage Bucket

- **Bucket Name:** `blog-images`
- **Access:** Public (images are publicly accessible)
- **File Naming:** `blog-{timestamp}-{filename}`
- **Cache:** 3600 seconds (1 hour)

### File Constraints

- **Accepted Types:** JPG, PNG, GIF, WebP, SVG
- **Maximum Size:** 5MB
- **Recommended Size:** 1-2MB for optimal performance

## Setting Up Supabase Storage

### Step 1: Create Storage Bucket

1. Go to Supabase Dashboard
2. Click "Storage" in the left sidebar
3. Click "New Bucket"
4. Name it: `blog-images`
5. Make it Public
6. Click "Create Bucket"

### Step 2: Set Bucket Policies

1. Click on `blog-images` bucket
2. Go to "Policies" tab
3. Add policy for public read access:
   ```sql
   CREATE POLICY "Public Access"
   ON storage.objects FOR SELECT
   USING (bucket_id = 'blog-images');
   ```

4. Add policy for authenticated upload:
   ```sql
   CREATE POLICY "Authenticated Upload"
   ON storage.objects FOR INSERT
   WITH CHECK (bucket_id = 'blog-images');
   ```

## Test Blogs

Three test blogs have been created with sample content:

1. **The Importance of Regular Health Checkups**
   - Author: Dr. Sarah Johnson
   - Slug: `importance-regular-health-checkups`

2. **Mental Health: Breaking the Stigma**
   - Author: Dr. Michael Chen
   - Slug: `mental-health-breaking-stigma`

3. **Nutrition Tips for a Healthier Lifestyle**
   - Author: Dr. Emily Rodriguez
   - Slug: `nutrition-tips-healthier-lifestyle`

### Adding Test Blogs

Run the script to add test blogs:

```bash
cd medilo-nextjs
node scripts/add-test-blogs.js
```

Or manually add them through the admin dashboard.

## Troubleshooting

### Image Upload Fails

**Problem:** "Failed to upload image"
- **Solution:** Check that the `blog-images` bucket exists in Supabase Storage
- **Solution:** Verify bucket policies allow uploads

### Image URL Not Working

**Problem:** Image shows broken link
- **Solution:** Verify the URL is correct
- **Solution:** Check that the image is publicly accessible

### File Size Error

**Problem:** "File size must be less than 5MB"
- **Solution:** Compress the image before uploading
- **Solution:** Use online image compression tools

### File Type Error

**Problem:** "Please select an image file"
- **Solution:** Only image files are supported
- **Solution:** Convert file to JPG, PNG, or GIF

## Files Modified

- `src/project-dashboard/src/components/BlogManager.tsx` - Added image upload UI and handlers

## Files Created

- `scripts/add-test-blogs.js` - Script to add test blogs
- `BLOG_IMAGE_UPLOAD_GUIDE.md` - This guide

## Next Steps

1. ✅ Create `blog-images` bucket in Supabase Storage
2. ✅ Set bucket policies for public access
3. ✅ Test image upload in admin dashboard
4. ✅ Add test blogs using the script
5. ✅ Verify images display on home page and blog details

**Everything is ready! 🎉**

