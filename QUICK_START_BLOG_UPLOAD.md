# 🚀 Quick Start - Blog Image Upload

## 5-Minute Setup

### Step 1: Create Storage Bucket (2 minutes)

1. Open Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Click **Storage** in left sidebar
4. Click **New Bucket**
5. Enter name: `blog-images`
6. Toggle **Public** ON
7. Click **Create Bucket**

### Step 2: Set Bucket Policies (2 minutes)

1. Click on `blog-images` bucket
2. Go to **Policies** tab
3. Click **New Policy**
4. Select **For SELECT** (public read)
5. Click **Review** → **Save policy**
6. Click **New Policy** again
7. Select **For INSERT** (authenticated upload)
8. Click **Review** → **Save policy**

### Step 3: Add Test Blogs (1 minute)

Open terminal in `medilo-nextjs` folder:

```bash
node scripts/add-test-blogs.js
```

**Done! ✅**

---

## Using the Image Upload

### In Admin Dashboard

1. Go to Admin Dashboard
2. Click **Blog Posts**
3. Click **New Blog Post**
4. Fill in details:
   - Title
   - Author
   - Excerpt
   - Content

5. **Upload Image:**
   - Click the upload area
   - Select image from computer
   - OR paste image URL
   - Preview appears automatically

6. Check **Publish immediately**
7. Click **Create Blog Post**

### Image Upload Tips

✅ **Supported Formats:** JPG, PNG, GIF, WebP, SVG
✅ **Max Size:** 5MB
✅ **Recommended:** 1-2MB for best performance
✅ **Remove Image:** Click X button on preview

---

## Verify It Works

### Check Home Page

1. Go to home page
2. Scroll to "OUR LARGEST BLOG" section
3. Should see 3-4 blog cards with images
4. Click on a blog
5. Should navigate to blog details page
6. Image should display

### Check Blog Details

1. Click on any blog from home page
2. Verify:
   - Blog title displays
   - Featured image displays
   - Blog content displays
   - Author name displays
   - Date displays

---

## Troubleshooting

### Image Upload Fails
- ✅ Check bucket exists in Storage
- ✅ Check bucket is Public
- ✅ Check policies are set

### Image Not Showing
- ✅ Verify image URL is correct
- ✅ Check image file exists
- ✅ Try uploading again

### Test Blogs Not Appearing
- ✅ Run script again: `node scripts/add-test-blogs.js`
- ✅ Check admin dashboard for blogs
- ✅ Verify blogs are published

---

## What's New

### Blog Manager Features
- 📤 Click-to-upload image interface
- 👁️ Live image preview
- 🔗 URL input option
- ✨ Automatic file naming
- 🛡️ File validation
- 💾 Cloud storage

### Test Blogs Included
1. **Health Checkups** - Dr. Sarah Johnson
2. **Mental Health** - Dr. Michael Chen
3. **Nutrition Tips** - Dr. Emily Rodriguez

---

## Files Modified/Created

**Modified:**
- `src/project-dashboard/src/components/BlogManager.tsx`

**Created:**
- `scripts/add-test-blogs.js`
- `BLOG_IMAGE_UPLOAD_GUIDE.md`
- `BLOG_UPLOAD_IMPLEMENTATION_SUMMARY.md`
- `QUICK_START_BLOG_UPLOAD.md`

---

## Next Steps

1. ✅ Create `blog-images` bucket
2. ✅ Set bucket policies
3. ✅ Run test blogs script
4. ✅ Test image upload in admin
5. ✅ Verify on home page
6. ✅ Start adding your own blogs!

**Everything is ready! 🎉**

