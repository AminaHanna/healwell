# 🚀 START HERE - Fix Storage Buckets (10 Minutes)

## ⚠️ Your Problem

```
Error: Storage bucket 'blog-images' not found
Error: Storage bucket 'service-images' not found
```

---

## ✅ Solution (4 Simple Steps)

### Step 1️⃣: Get Service Role Key (3 min)

**Go to**: https://app.supabase.com

**Do this**:
1. Login with: `healwellservice@gmail.com`
2. Select: `healwellservice@gmail.com's Project`
3. Click: **⚙️ Settings** (gear icon, bottom left)
4. Click: **API** (left sidebar)
5. Find: **Service Role Key**
6. Click: **Copy** button
7. Save it somewhere (you'll need it next)

**Need help?** → Read: **WHERE_IS_SERVICE_ROLE_KEY.md**

---

### Step 2️⃣: Add to .env.local (2 min)

**Open**: `.env.local` file in your project

**Add this line**:
```
SUPABASE_SERVICE_ROLE_KEY=paste_your_key_here
```

**Replace** `paste_your_key_here` with the key from Step 1

**Save** (Ctrl+S)

---

### Step 3️⃣: Run Setup Script (3 min)

**Open Terminal** in your project

**Run**:
```bash
node scripts/setup-storage-buckets.js
```

**You should see**:
```
✅ Bucket 'blog-images' created successfully
✅ Bucket 'service-images' created successfully
✅ Storage bucket setup complete!
```

---

### Step 4️⃣: Test Upload (2 min)

1. Go to: http://localhost:3000/admin
2. Click: **Blog Posts**
3. Click: **Create New Blog Post**
4. Upload an image
5. Click: **Save Blog Post**

**Result**: ✅ Success! No errors!

---

## 📚 Documentation Files

### Quick Reference
- **FINAL_FIX_GUIDE.md** - Complete fix guide
- **FIX_BUCKETS_NOW.md** - Detailed instructions
- **WHERE_IS_SERVICE_ROLE_KEY.md** - Find the key

### Troubleshooting
- **FIXES_AND_VERIFICATION.md** - Troubleshooting guide
- **GET_SERVICE_ROLE_KEY.md** - Getting the key
- **QUICK_REFERENCE.md** - Quick answers

---

## 🆘 Quick Troubleshooting

### "Service Role Key not found" Error
→ Make sure you added it to `.env.local` and saved

### "Can't find Service Role Key in Supabase"
→ Read: **WHERE_IS_SERVICE_ROLE_KEY.md**

### "Bucket already exists" Message
→ This is OK! Buckets were already created

### Still getting "Bucket not found" error
→ Restart dev server: `npm run dev`
→ Refresh browser: Ctrl+F5

---

## ✅ Checklist

- [ ] Got Service Role Key from Supabase
- [ ] Added to .env.local
- [ ] Saved .env.local
- [ ] Ran setup script
- [ ] Script completed successfully
- [ ] Tested image upload
- [ ] No errors
- [ ] Image displays

---

## 🎉 After Fix

✅ Image uploads work
✅ Images display on pages
✅ No more errors
✅ Ready for production

---

## 🔗 Important Links

| Link | Purpose |
|------|---------|
| https://app.supabase.com | Supabase Dashboard |
| http://localhost:3000/admin | Admin Panel |
| http://localhost:3000/blog | Blog Page |

---

## 📊 Project Info

- **Project ID**: rdqczsmrxuzlouiflchq
- **Region**: us-east-1
- **Email**: healwellservice@gmail.com
- **Bucket 1**: blog-images (public)
- **Bucket 2**: service-images (public)

---

## 🚀 Ready?

1. Read this file (you're reading it!)
2. Follow the 4 steps above
3. Done! ✅

**Total Time**: 10 minutes

---

**Last Updated**: 2025-10-16
**Status**: Ready to Fix ✅


