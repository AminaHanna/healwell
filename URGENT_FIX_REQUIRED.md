# 🚨 URGENT - Storage Buckets Must Be Created Manually

## ⚠️ Your Issue

```
Error: Storage bucket 'blog-images' not found
Error: Storage bucket 'service-images' not found
```

---

## 🔴 Why Automated Creation Failed

I attempted to create buckets programmatically, but:

1. **Anon Key** - Cannot create buckets (permission denied)
2. **Service Role Key** - Not in your `.env.local`
3. **Management API** - Endpoint not available

**Solution**: You must create buckets manually via Supabase Dashboard

---

## ✅ Manual Fix (5 Minutes)

### Step 1: Open Supabase Dashboard

```
URL: https://app.supabase.com
Email: healwellservice@gmail.com
```

### Step 2: Select Your Project

```
Click: "healwellservice@gmail.com's Project"
```

### Step 3: Go to Storage

```
Left Sidebar → Storage
```

### Step 4: Create blog-images Bucket

```
1. Click: "New bucket"
2. Name: blog-images
3. Check: "Public bucket" ✓
4. Click: "Create"
5. Wait for confirmation
```

### Step 5: Create service-images Bucket

```
1. Click: "New bucket"
2. Name: service-images
3. Check: "Public bucket" ✓
4. Click: "Create"
5. Wait for confirmation
```

### Step 6: Verify Both Buckets

```
Storage
├── blog-images (Public) ✓
└── service-images (Public) ✓
```

---

## 🧪 Test Image Upload

1. Go to: http://localhost:3000/admin
2. Click: "Blog Posts"
3. Click: "Create New Blog Post"
4. Upload an image
5. Click: "Save Blog Post"

**Expected Result**: ✅ Success!

---

## 📸 Visual Guide

```
┌─────────────────────────────────────────┐
│  Supabase Dashboard                     │
├─────────────────────────────────────────┤
│                                         │
│  Storage                                │
│  ├── New bucket                         │
│  │   ├── Name: blog-images              │
│  │   ├── Public: ✓                      │
│  │   └── Create                         │
│  │                                      │
│  ├── New bucket                         │
│  │   ├── Name: service-images           │
│  │   ├── Public: ✓                      │
│  │   └── Create                         │
│  │                                      │
│  ├── blog-images (Public)               │
│  └── service-images (Public)            │
│                                         │
└─────────────────────────────────────────┘
```

---

## ✅ Checklist

- [ ] Opened Supabase Dashboard
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

## 🎉 After Creation

✅ Image uploads will work
✅ Images will display on pages
✅ No more errors
✅ Ready for production

---

## 🔗 Links

| Link | Purpose |
|------|---------|
| https://app.supabase.com | Supabase Dashboard |
| http://localhost:3000/admin | Admin Panel |

---

## 📊 Project Info

- **Project ID**: rdqczsmrxuzlouiflchq
- **Region**: us-east-1
- **Email**: healwellservice@gmail.com
- **Bucket 1**: blog-images (public)
- **Bucket 2**: service-images (public)

---

**Status**: Manual Creation Required ⏳
**Time**: 5 minutes


