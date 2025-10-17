# 🔧 Fix RLS Policy - Storage Upload Issue

## ⚠️ Your Current Error

```
Error: new row violates row-level security policy
```

**Cause**: Storage buckets have restrictive RLS policies

**Solution**: Update RLS policies to allow uploads

---

## ✅ Fix (3 Minutes)

### Step 1: Open Supabase SQL Editor

1. Go to: https://app.supabase.com
2. Select: "healwellservice@gmail.com's Project"
3. Click: **"SQL Editor"** (left sidebar)

### Step 2: Create New Query

1. Click: **"New query"** button
2. Or click: **"+"** icon

### Step 3: Copy SQL Script

Copy this entire script:

```sql
-- Fix Storage RLS Policies
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Public Upload" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view" ON storage.objects;

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Access"
ON storage.objects FOR SELECT
USING (bucket_id IN ('blog-images', 'service-images'));

CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id IN ('blog-images', 'service-images')
  AND auth.role() = 'authenticated'
);

CREATE POLICY "User Delete Own"
ON storage.objects FOR DELETE
USING (
  bucket_id IN ('blog-images', 'service-images')
  AND auth.uid() = owner
);

CREATE POLICY "User Update Own"
ON storage.objects FOR UPDATE
WITH CHECK (
  bucket_id IN ('blog-images', 'service-images')
  AND auth.uid() = owner
);
```

### Step 4: Paste into SQL Editor

1. Click in the SQL editor area
2. Paste the script (Ctrl+V)

### Step 5: Run the Query

1. Click: **"Run"** button (or Ctrl+Enter)
2. Wait for success message

**Expected Result**:
```
✅ Query executed successfully
```

### Step 6: Test Upload

1. Go to: http://localhost:3000/admin
2. Click: "Blog Posts"
3. Click: "Create New Blog Post"
4. Upload an image
5. Click: "Save Blog Post"

**Expected Result**: ✅ Success! No errors!

---

## 📸 Visual Guide

```
Supabase Dashboard
├── SQL Editor
│   ├── New query (button)
│   ├── SQL Editor Area
│   │   └── [Paste SQL script here]
│   └── Run (button) ← CLICK THIS
└── ...
```

---

## ✅ Checklist

- [ ] Opened Supabase Dashboard
- [ ] Clicked SQL Editor
- [ ] Created new query
- [ ] Copied SQL script
- [ ] Pasted into editor
- [ ] Clicked Run
- [ ] Query executed successfully
- [ ] Tested image upload
- [ ] No errors

---

## 🎉 After Fix

✅ Image uploads work
✅ Images display on pages
✅ No more RLS errors
✅ Ready for production

---

## 🆘 Troubleshooting

### Problem: "Query failed" error
- Make sure you copied the entire script
- Make sure there are no syntax errors
- Try running again

### Problem: Still getting RLS error
- Make sure the query executed successfully
- Refresh browser: Ctrl+F5
- Restart dev server: `npm run dev`
- Try uploading again

### Problem: Can't find SQL Editor
- Make sure you're in your project
- Look in left sidebar
- Scroll down if needed

---

## 🔗 Links

| Link | Purpose |
|------|---------|
| https://app.supabase.com | Supabase Dashboard |
| http://localhost:3000/admin | Admin Panel |

---

## 📊 What This Script Does

1. **Drops old policies** - Removes restrictive policies
2. **Enables RLS** - Ensures RLS is enabled
3. **Creates read policy** - Allows public read access
4. **Creates upload policy** - Allows authenticated uploads
5. **Creates delete policy** - Allows users to delete their files
6. **Creates update policy** - Allows users to update their files

---

**Time**: 3 minutes
**Status**: Ready to Fix ✅


