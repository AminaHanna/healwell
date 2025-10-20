# 📸 Portfolio Storage Bucket Setup Guide

## 🎯 What You Need to Do

Create a new storage bucket in Supabase called `portfolio-images` for storing portfolio case study featured images.

**Project**: healwellservice@gmail.com's Project
**Project ID**: rdqczsmrxuzlouiflchq
**Region**: us-east-1

---

## 🚀 Step-by-Step Instructions

### Step 1: Go to Supabase Dashboard

1. Open: https://app.supabase.com
2. Log in with: `healwellservice@gmail.com`
3. Select your project: **"healwellservice@gmail.com's Project"**

---

### Step 2: Navigate to Storage

1. In the left sidebar, click **"Storage"**
2. You should see existing buckets:
   - `blog-images`
   - `service-images`

---

### Step 3: Create New Bucket

1. Click the **"New Bucket"** button (top right)
2. A dialog will appear

---

### Step 4: Configure Bucket

**Bucket Name**: `portfolio-images`

**Public Bucket**: Toggle to **ON** (make it public)

**Click**: "Create Bucket"

---

### Step 5: Verify Creation

After creation, you should see:

```
Storage
├── blog-images (Public)
├── service-images (Public)
└── portfolio-images (Public) ← NEW
```

---

## ✅ Verification

### Check if Bucket Exists

1. Go to Storage section
2. Look for `portfolio-images` in the list
3. It should show as "Public"

### Test Upload

1. Go to Admin Dashboard
2. Click "🎯 Portfolio" tab
3. Click "+ New Case Study"
4. Try uploading an image
5. You should see the image preview
6. No error messages should appear

---

## 🔐 Security Settings

The bucket is created as **Public**, which means:

✅ **Anyone can view** images (read access)
✅ **Only authenticated users can upload** (write access)
✅ **Files are stored securely** in Supabase
✅ **Public URLs are generated** automatically

---

## 📋 Bucket Details

| Property | Value |
|----------|-------|
| Name | `portfolio-images` |
| Public | Yes ✓ |
| Purpose | Store portfolio case study featured images |
| Access | Public read, authenticated write |
| Region | us-east-1 |

---

## 🐛 Troubleshooting

### Error: "Bucket not found"

**Solution**: Make sure you created the bucket with the exact name: `portfolio-images`

### Error: "Permission denied"

**Solution**: Make sure the bucket is set to **Public**

### Images not uploading

**Solution**: 
1. Check that the bucket exists
2. Check that it's public
3. Refresh the page
4. Try uploading again

---

## 📝 What Changed in Code

The PortfolioForm component was updated to:

1. Import the `uploadImage` utility function
2. Use the `portfolio-images` bucket
3. Use the `portfolio` prefix for filenames
4. Handle errors gracefully

**File**: `src/app/admin/components/PortfolioForm.jsx`

```javascript
// Import the utility
import { uploadImage } from '@/lib/imageUpload';

// Use it in the upload handler
const { publicUrl, error } = await uploadImage(file, 'portfolio-images', 'portfolio');
```

---

## 🎉 After Setup

Once the bucket is created:

1. ✅ Portfolio form image uploads will work
2. ✅ Images will be stored in Supabase
3. ✅ Public URLs will be generated
4. ✅ Images will display in the portfolio page
5. ✅ No more "Bucket not found" errors

---

## 📚 Related Buckets

Your Supabase project now has these storage buckets:

| Bucket | Purpose | Status |
|--------|---------|--------|
| `blog-images` | Blog featured images | ✅ Exists |
| `service-images` | Service featured images | ✅ Exists |
| `portfolio-images` | Portfolio case study images | ⏳ Create now |

---

## 🔗 Quick Links

- **Supabase Dashboard**: https://app.supabase.com
- **Your Project**: https://app.supabase.com/project/rdqczsmrxuzlouiflchq
- **Storage Section**: https://app.supabase.com/project/rdqczsmrxuzlouiflchq/storage/buckets

---

## ✨ Summary

1. Go to Supabase Dashboard
2. Navigate to Storage
3. Click "New Bucket"
4. Name it: `portfolio-images`
5. Make it Public
6. Click "Create Bucket"
7. Done! ✅

Your portfolio image uploads will now work perfectly! 🎉

