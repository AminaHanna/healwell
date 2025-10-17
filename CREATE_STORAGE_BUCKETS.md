# Create Storage Buckets - Step by Step Guide

## ⚠️ Current Issue

You're getting this error:
```
Storage bucket 'blog-images' not found. Please create it in your Supabase project.
Storage bucket 'service-images' not found. Please create it in your Supabase project.
```

This means the storage buckets don't exist in your Supabase project yet.

---

## ✅ Solution: Create the Buckets

### Method 1: Using Supabase Dashboard (Recommended - 2 minutes)

#### Step 1: Go to Supabase Dashboard
1. Open https://app.supabase.com
2. Log in with your account
3. Select your project: **"healwellservice@gmail.com's Project"**

#### Step 2: Navigate to Storage
1. Click on **"Storage"** in the left sidebar
2. You should see the Storage section

#### Step 3: Create blog-images Bucket
1. Click the **"New bucket"** button (top right)
2. Enter bucket name: **`blog-images`**
3. **IMPORTANT**: Check the box for **"Public bucket"** ✓
4. Click **"Create bucket"**
5. Wait for confirmation

#### Step 4: Create service-images Bucket
1. Click the **"New bucket"** button again
2. Enter bucket name: **`service-images`**
3. **IMPORTANT**: Check the box for **"Public bucket"** ✓
4. Click **"Create bucket"**
5. Wait for confirmation

#### Step 5: Verify Buckets
1. You should now see both buckets in your Storage section:
   - `blog-images` (public)
   - `service-images` (public)

---

### Method 2: Using Setup Script (Alternative)

If you have Node.js installed, you can use the setup script:

#### Step 1: Add Service Role Key to .env.local
```bash
# Add this to your .env.local file:
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

To get your service role key:
1. Go to Supabase dashboard
2. Click "Settings" (bottom left)
3. Click "API"
4. Copy the "Service Role" key (keep it secret!)
5. Paste it in .env.local

#### Step 2: Run the Setup Script
```bash
node scripts/setup-storage-buckets.js
```

#### Step 3: Verify
Check your Supabase dashboard to confirm both buckets were created.

---

## 🧪 Test the Setup

### Step 1: Go to Admin Dashboard
1. Open your app in browser
2. Navigate to `/admin`
3. Click "Create New Blog Post"

### Step 2: Upload an Image
1. Fill in the blog form:
   - Title: "Test Blog"
   - Content: "This is a test"
   - Author: "Your Name"
2. Click "Choose File" under "Featured Image"
3. Select an image from your computer
4. You should see a preview

### Step 3: Save and Verify
1. Click "Save Blog Post"
2. You should see: **"Blog post created successfully"** ✅
3. Check your Supabase Storage:
   - Go to Storage section
   - Click on `blog-images` bucket
   - You should see your uploaded image file

---

## ✅ Success Indicators

After creating the buckets, you should see:

✅ No more "Bucket not found" errors
✅ Image preview displays in the form
✅ Image uploads successfully
✅ Image appears in Supabase Storage
✅ Image displays on blog listing page
✅ Image displays on blog details page

---

## 🆘 Troubleshooting

### Issue: "Bucket already exists" error
**Solution**: This is fine! It means the bucket was already created. You can proceed to testing.

### Issue: "Permission denied" error
**Solution**: Make sure the bucket is marked as "Public" in Supabase dashboard

### Issue: Still getting "Bucket not found" error
**Solution**: 
1. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Wait 30 seconds for Supabase to sync
3. Try uploading again

### Issue: Image uploads but doesn't display
**Solution**:
1. Verify the bucket is public
2. Check that the image file exists in Supabase Storage
3. Try a different image file

---

## 📋 Checklist

- [ ] Logged into Supabase dashboard
- [ ] Navigated to Storage section
- [ ] Created `blog-images` bucket (public)
- [ ] Created `service-images` bucket (public)
- [ ] Both buckets visible in Storage section
- [ ] Tested image upload in admin panel
- [ ] Image uploaded successfully
- [ ] Image appears in Supabase Storage
- [ ] Image displays on blog page

---

## 🎯 Next Steps

Once the buckets are created:

1. **Test Blog Image Upload**
   - Create a blog post with an image
   - Verify image displays on blog pages

2. **Test Service Image Upload**
   - Create a service with an image
   - Verify image displays on service details page

3. **Test HTML Content**
   - Create blog with formatted content
   - Verify HTML renders without showing tags

4. **Deploy to Production**
   - Create buckets in production Supabase project
   - Test all functionality
   - Monitor for errors

---

## 📞 Need Help?

If you're still having issues:

1. Check the troubleshooting section above
2. Verify both buckets are created and public
3. Refresh your browser
4. Check browser console (F12) for error messages
5. Try uploading a different image file

---

## 🔐 Security Notes

- ✅ Buckets are public for **read-only** access
- ✅ Only authenticated users can **upload** files
- ✅ Files are stored securely in Supabase
- ✅ Public URLs are generated automatically

---

**Status**: Ready to create buckets ✅


