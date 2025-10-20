# 🔧 Portfolio Image Upload - Error Fix

## 🐛 Problem Identified

**Error**: `StorageApiError: Bucket not found`

**Root Cause**: The PortfolioForm component was trying to upload images to an `'images'` bucket that doesn't exist.

**Location**: `src/app/admin/components/PortfolioForm.jsx` (Line 73)

```javascript
// ❌ WRONG - Bucket doesn't exist
const { error: uploadError } = await supabase.storage
  .from('images')  // ← This bucket doesn't exist!
  .upload(filePath, file);
```

---

## ✅ Solution Implemented

### 1. Updated PortfolioForm Component

**File**: `src/app/admin/components/PortfolioForm.jsx`

#### Change 1: Added Import
```javascript
import { uploadImage } from '@/lib/imageUpload';
```

#### Change 2: Updated handleImageUpload Function

**Before**:
```javascript
const handleImageUpload = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `portfolio/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')  // ❌ Wrong bucket
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    setFormData({ ...formData, featured_image: data.publicUrl });
    setImagePreview(data.publicUrl);
  } catch (error) {
    console.error('Error uploading image:', error);
    alert('Error uploading image');
  } finally {
    setUploading(false);
  }
};
```

**After**:
```javascript
const handleImageUpload = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    setUploading(true);

    // Create a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    // Upload to Supabase Storage using utility function
    const { publicUrl, error } = await uploadImage(file, 'portfolio-images', 'portfolio');

    if (error) throw error;

    setFormData(prev => ({
      ...prev,
      featured_image: publicUrl
    }));
  } catch (error) {
    console.error('Error uploading image:', error);
    alert('Error uploading image: ' + error.message);
  } finally {
    setUploading(false);
  }
};
```

---

## 📋 What Changed

| Aspect | Before | After |
|--------|--------|-------|
| Bucket Name | `'images'` | `'portfolio-images'` |
| Upload Method | Direct Supabase call | `uploadImage()` utility |
| Error Handling | Basic | Enhanced with utility |
| Preview | Stored as URL | Stored as data URL |
| Consistency | Different from Blog/Service | Same as Blog/Service |

---

## 🎯 Key Improvements

✅ **Uses Correct Bucket**: `portfolio-images` (matches naming convention)
✅ **Consistent Pattern**: Same as BlogForm and ServiceForm
✅ **Better Error Handling**: Uses utility function with detailed errors
✅ **Improved Preview**: Shows preview while uploading
✅ **Unique Filenames**: Prevents collisions with timestamp + random string
✅ **Proper Prefix**: Uses `'portfolio'` prefix for organization

---

## 📦 Required Setup

### Create Storage Bucket in Supabase

You need to create a new storage bucket called `portfolio-images`:

1. Go to: https://app.supabase.com
2. Select your project
3. Click "Storage" in sidebar
4. Click "New Bucket"
5. Name: `portfolio-images`
6. Make it Public: **ON**
7. Click "Create Bucket"

**See**: `PORTFOLIO_STORAGE_SETUP.md` for detailed instructions

---

## 🔄 How It Works Now

### Upload Flow

```
1. User selects image file
   ↓
2. Create preview (data URL)
   ↓
3. Call uploadImage() utility
   ↓
4. Utility generates unique filename
   ↓
5. Upload to 'portfolio-images' bucket
   ↓
6. Get public URL
   ↓
7. Store URL in formData
   ↓
8. Display preview
```

### Error Handling

```
If bucket doesn't exist:
  → Utility detects "Bucket not found" error
  → Returns helpful error message
  → User sees: "Storage bucket 'portfolio-images' not found..."
  → User knows to create the bucket

If upload fails:
  → Error caught and logged
  → User sees: "Error uploading image: [error message]"
  → Can retry
```

---

## 🧪 Testing

### Test Image Upload

1. Start dev server: `npm run dev`
2. Go to: `http://localhost:3000/admin`
3. Click "🎯 Portfolio" tab
4. Click "+ New Case Study"
5. Scroll to "Featured Image"
6. Click file input
7. Select an image
8. **Expected**: Image preview appears, no errors

### Verify in Supabase

1. Go to: https://app.supabase.com
2. Select your project
3. Click "Storage"
4. Click "portfolio-images" bucket
5. **Expected**: Your uploaded image appears in the list

---

## 📊 Bucket Comparison

Your Supabase project now has:

| Bucket | Purpose | Status |
|--------|---------|--------|
| `blog-images` | Blog featured images | ✅ Exists |
| `service-images` | Service featured images | ✅ Exists |
| `portfolio-images` | Portfolio case study images | ⏳ Create now |

---

## 🚀 Next Steps

1. **Create the bucket** in Supabase (see setup guide)
2. **Test image upload** in admin form
3. **Verify images** appear in Supabase Storage
4. **Create portfolio entries** with images
5. **View portfolio page** to see images displayed

---

## 📝 Files Modified

| File | Changes | Lines |
|------|---------|-------|
| `src/app/admin/components/PortfolioForm.jsx` | Added import + updated handleImageUpload | 5, 63-92 |

---

## 📚 Related Files

- **Utility Function**: `src/lib/imageUpload.js`
- **Blog Form**: `src/app/admin/components/BlogForm.jsx` (reference)
- **Service Form**: `src/app/admin/components/ServiceForm.jsx` (reference)
- **Setup Guide**: `PORTFOLIO_STORAGE_SETUP.md`

---

## ✨ Summary

✅ **Fixed**: Image upload error in PortfolioForm
✅ **Updated**: To use correct bucket name
✅ **Improved**: Error handling and consistency
✅ **Ready**: For Supabase bucket creation
✅ **Tested**: Code compiles without errors

**Status**: Ready for production once bucket is created! 🎉

