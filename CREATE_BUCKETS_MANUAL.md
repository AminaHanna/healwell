# 🚀 Create Storage Buckets - Manual Steps

## ⚠️ Your Current Issue

The storage buckets `blog-images` and `service-images` don't exist in your Supabase project.

**Project ID**: `rdqczsmrxuzlouiflchq`
**Region**: `us-east-1`

---

## ✅ Solution: Create Buckets via Supabase Dashboard

### Step 1: Open Supabase Dashboard

1. Go to: **https://app.supabase.com**
2. Log in with your account
3. You should see your project: **"healwellservice@gmail.com's Project"**
4. Click on it to open

---

### Step 2: Navigate to Storage

1. In the left sidebar, click **"Storage"**
2. You should see the Storage section
3. You might see a message like "No buckets yet" or see existing buckets

---

### Step 3: Create First Bucket - blog-images

1. Click the **"New bucket"** button (top right)
2. A dialog will appear asking for bucket name
3. Enter: **`blog-images`**
4. **IMPORTANT**: Check the box for **"Public bucket"** ✓
5. Click **"Create bucket"**
6. Wait for confirmation (should say "Bucket created successfully")

---

### Step 4: Create Second Bucket - service-images

1. Click the **"New bucket"** button again
2. Enter: **`service-images`**
3. **IMPORTANT**: Check the box for **"Public bucket"** ✓
4. Click **"Create bucket"**
5. Wait for confirmation

---

### Step 5: Verify Both Buckets

You should now see in your Storage section:
- ✅ `blog-images` (Public)
- ✅ `service-images` (Public)

Both should have a "Public" label next to them.

---

## 🧪 Test Image Upload

### Step 1: Go to Admin Dashboard

1. Open your browser
2. Go to: **http://localhost:3000/admin**
3. You should see the admin dashboard

### Step 2: Create Test Blog Post

1. Click **"Blog Posts"** tab
2. Click **"Create New Blog Post"** button
3. Fill in the form:
   - **Title**: "Test Blog"
   - **Author**: "Your Name"
   - **Content**: "This is a test"
4. Click **"Choose File"** under "Featured Image"
5. Select an image from your computer
6. You should see a preview of the image
7. Click **"Save Blog Post"**

### Step 3: Verify Upload

You should see: **"Blog post created successfully"** ✅

If you see this, the upload worked!

---

## ✅ Verify in Supabase Storage

1. Go back to Supabase dashboard
2. Click **"Storage"**
3. Click on **"blog-images"** bucket
4. You should see your uploaded image file there ✅

---

## 🎯 Next Steps

### If Upload Worked ✅
1. Go to http://localhost:3000/blog
2. You should see your blog post with the image
3. Click on it to view details
4. Everything should work!

### If Upload Failed ❌
1. Check that both buckets are marked as "Public"
2. Refresh your browser (Ctrl+F5)
3. Try uploading again
4. Check browser console (F12) for error messages

---

## 🆘 Troubleshooting

### Issue: "Bucket not found" Error Still Appears

**Solution**:
1. Verify buckets were created in Supabase
2. Verify both buckets are marked as "Public"
3. Refresh browser (Ctrl+F5 or Cmd+Shift+R)
4. Wait 30 seconds for Supabase to sync
5. Try uploading again

### Issue: Can't Find Storage Section

**Solution**:
1. Make sure you're logged into Supabase
2. Make sure you selected the correct project
3. Look for "Storage" in the left sidebar
4. If you don't see it, scroll down in the sidebar

### Issue: "Public bucket" Checkbox Not Visible

**Solution**:
1. Make sure you're creating a NEW bucket
2. The checkbox should appear in the dialog
3. If not, try refreshing the page
4. Try creating the bucket again

---

## 📋 Checklist

- [ ] Logged into Supabase dashboard
- [ ] Navigated to Storage section
- [ ] Created `blog-images` bucket
- [ ] Marked `blog-images` as public
- [ ] Created `service-images` bucket
- [ ] Marked `service-images` as public
- [ ] Both buckets visible in Storage section
- [ ] Tested image upload in admin panel
- [ ] Image uploaded successfully
- [ ] Image appears in Supabase Storage
- [ ] Image displays on /blog page

---

## 🎉 Success!

Once you've completed these steps:

✅ Image uploads will work
✅ Images will display on blog pages
✅ Images will display on service pages
✅ No more "Bucket not found" errors

---

## 📸 Screenshots (What to Look For)

### Storage Section
```
Storage
├── blog-images (Public)
└── service-images (Public)
```

### After Upload
```
blog-images
├── blog-1760644131097-g8jjcc-contact-2.png
└── (other uploaded images)
```

---

## 🔐 Security Notes

- ✅ Buckets are public for **read-only** access
- ✅ Only authenticated users can **upload** files
- ✅ Files are stored securely in Supabase
- ✅ Public URLs are generated automatically

---

## 📞 Need More Help?

If you're still having issues:

1. Check the troubleshooting section above
2. Verify both buckets are created and public
3. Refresh your browser
4. Check browser console (F12) for error messages
5. Try uploading a different image file

---

**Last Updated**: 2025-10-16
**Status**: Ready to Create Buckets ✅


