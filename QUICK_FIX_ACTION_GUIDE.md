# ⚡ Quick Action Guide - Portfolio Image Upload Fix

## 🎯 What You Need to Do (2 Steps)

### Step 1: Create Storage Bucket in Supabase ✅

**Time**: 2 minutes

1. Open: https://app.supabase.com
2. Log in with: `healwellservice@gmail.com`
3. Select project: **"healwellservice@gmail.com's Project"**
4. Click: **"Storage"** in left sidebar
5. Click: **"New Bucket"** button
6. Enter name: `portfolio-images`
7. Toggle: **"Public"** to ON
8. Click: **"Create Bucket"**

**Done!** ✅

---

### Step 2: Test Image Upload ✅

**Time**: 2 minutes

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Go to: `http://localhost:3000/admin`

3. Click: **"🎯 Portfolio"** tab

4. Click: **"+ New Case Study"** button

5. Scroll to: **"Featured Image"** section

6. Click: File input and select an image

7. **Expected**: Image preview appears, no errors

**Done!** ✅

---

## 🔍 What Was Fixed

### The Problem
```
Error: StorageApiError: Bucket not found
```

### The Cause
PortfolioForm was trying to upload to `'images'` bucket that doesn't exist.

### The Solution
Updated PortfolioForm to:
- Use correct bucket: `'portfolio-images'`
- Use utility function: `uploadImage()`
- Match Blog/Service pattern

---

## 📋 Changes Made

**File**: `src/app/admin/components/PortfolioForm.jsx`

✅ Added import:
```javascript
import { uploadImage } from '@/lib/imageUpload';
```

✅ Updated upload handler to use:
```javascript
const { publicUrl, error } = await uploadImage(file, 'portfolio-images', 'portfolio');
```

---

## ✨ Benefits

✅ **Fixes Error**: No more "Bucket not found" error
✅ **Consistent**: Same pattern as Blog and Service forms
✅ **Better Errors**: Helpful error messages
✅ **Organized**: Files stored with `portfolio-` prefix
✅ **Secure**: Public read, authenticated write

---

## 🧪 Verification Checklist

After completing both steps:

- [ ] Bucket `portfolio-images` created in Supabase
- [ ] Bucket is set to Public
- [ ] Dev server running
- [ ] Can access admin dashboard
- [ ] Portfolio tab visible
- [ ] Can open "+ New Case Study" form
- [ ] Can select image file
- [ ] Image preview appears
- [ ] No error messages
- [ ] Image uploaded to Supabase

---

## 🆘 Troubleshooting

### Error: "Bucket not found"
**Solution**: Make sure you created the bucket with exact name: `portfolio-images`

### Error: "Permission denied"
**Solution**: Make sure bucket is set to **Public**

### Image not uploading
**Solution**: 
1. Refresh page
2. Check bucket exists in Supabase
3. Try again

### No preview showing
**Solution**: 
1. Check browser console for errors
2. Make sure file is an image
3. Try different image file

---

## 📚 Documentation

For more details, see:
- `PORTFOLIO_STORAGE_SETUP.md` - Detailed bucket setup
- `PORTFOLIO_IMAGE_UPLOAD_FIX.md` - Technical details
- `PORTFOLIO_UPDATES_IMPLEMENTATION.md` - Overall changes

---

## 🎉 Summary

**Before**: ❌ Image upload error
**After**: ✅ Image upload works perfectly

**Time to fix**: ~5 minutes
**Difficulty**: Easy
**Status**: Ready to go! 🚀

---

## 📞 Need Help?

If you encounter any issues:

1. Check the troubleshooting section above
2. Review `PORTFOLIO_STORAGE_SETUP.md` for bucket creation
3. Check browser console for error messages
4. Verify bucket exists in Supabase Storage section

---

## ✅ You're All Set!

Once you complete the 2 steps above, your portfolio image uploads will work perfectly! 🎉

