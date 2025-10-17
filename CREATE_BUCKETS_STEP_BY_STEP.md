# 📸 Create Storage Buckets - Step by Step

## 🎯 Goal

Create two public storage buckets:
1. `blog-images`
2. `service-images`

---

## 🚀 Step 1: Open Supabase Dashboard

**URL**: https://app.supabase.com

**What you'll see**:
```
Supabase Dashboard
├── Projects
│   ├── healwellservice@gmail.com's Project ← CLICK THIS
│   └── ...
└── ...
```

---

## 🚀 Step 2: Select Your Project

**Click**: "healwellservice@gmail.com's Project"

**What you'll see**:
```
Project Dashboard
├── Home
├── Editor
├── SQL Editor
├── Database
├── Authentication
├── Storage ← CLICK THIS
├── Vectors
├── Functions
├── Realtime
└── ...
```

---

## 🚀 Step 3: Click Storage

**Click**: "Storage" in left sidebar

**What you'll see**:
```
Storage
├── New bucket (button)
├── Buckets
│   └── (empty - no buckets yet)
└── ...
```

---

## 🚀 Step 4: Create First Bucket (blog-images)

### Click "New bucket"

**What you'll see**:
```
Create a new bucket
├── Bucket name: [_____________]
├── Public bucket: [ ] (checkbox)
└── Create bucket (button)
```

### Enter Bucket Name

**Type**: `blog-images`

```
Bucket name: [blog-images]
```

### Check "Public bucket"

**Click**: The checkbox next to "Public bucket"

```
Public bucket: [✓] (checked)
```

### Click "Create bucket"

**Click**: "Create bucket" button

**Wait**: For confirmation message

**You should see**:
```
✅ Bucket 'blog-images' created successfully
```

---

## 🚀 Step 5: Create Second Bucket (service-images)

### Click "New bucket" Again

**What you'll see**:
```
Create a new bucket
├── Bucket name: [_____________]
├── Public bucket: [ ] (checkbox)
└── Create bucket (button)
```

### Enter Bucket Name

**Type**: `service-images`

```
Bucket name: [service-images]
```

### Check "Public bucket"

**Click**: The checkbox next to "Public bucket"

```
Public bucket: [✓] (checked)
```

### Click "Create bucket"

**Click**: "Create bucket" button

**Wait**: For confirmation message

**You should see**:
```
✅ Bucket 'service-images' created successfully
```

---

## ✅ Step 6: Verify Both Buckets

**What you should see**:
```
Storage
├── New bucket (button)
├── Buckets
│   ├── blog-images (Public)
│   └── service-images (Public)
└── ...
```

---

## 🧪 Step 7: Test Image Upload

### Go to Admin Panel

**URL**: http://localhost:3000/admin

### Create Blog Post

1. Click: "Blog Posts"
2. Click: "Create New Blog Post"
3. Upload an image
4. Click: "Save Blog Post"

**Expected Result**: ✅ Success! No errors!

---

## 📋 Checklist

- [ ] Opened https://app.supabase.com
- [ ] Selected your project
- [ ] Clicked Storage
- [ ] Created blog-images bucket
- [ ] Marked as public
- [ ] Created service-images bucket
- [ ] Marked as public
- [ ] Both buckets visible
- [ ] Tested image upload
- [ ] No errors

---

## 🎉 Success!

✅ Image uploads work
✅ Images display on pages
✅ No more errors
✅ Ready for production

---

## 🆘 Troubleshooting

### Problem: Can't find Storage
- Make sure you're in your project
- Look in left sidebar
- Scroll down if needed

### Problem: Can't create bucket
- Make sure you entered the name correctly
- Make sure you checked "Public bucket"
- Try again

### Problem: Still getting "Bucket not found" error
- Verify both buckets exist
- Verify both are marked as "Public"
- Restart dev server: `npm run dev`
- Refresh browser: Ctrl+F5

---

## 🔗 Links

| Link | Purpose |
|------|---------|
| https://app.supabase.com | Supabase Dashboard |
| http://localhost:3000/admin | Admin Panel |

---

**Time**: 5 minutes
**Status**: Ready to Create ✅


