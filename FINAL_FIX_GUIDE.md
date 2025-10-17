# 🎯 FINAL FIX GUIDE - Storage Buckets

## ⚠️ Your Problem

```
Error: Storage bucket 'blog-images' not found
Error: Storage bucket 'service-images' not found
```

---

## ✅ Solution (10 Minutes)

### 🎯 Step 1: Get Service Role Key (3 min)

**URL**: https://app.supabase.com

**Actions**:
1. Login: `healwellservice@gmail.com`
2. Select: `healwellservice@gmail.com's Project`
3. Click: **⚙️ Settings** (gear icon, bottom left)
4. Click: **API** (left sidebar)
5. Find: **Service Role Key**
6. Click: **Copy icon**
7. Paste somewhere safe (you'll need it next)

---

### 📝 Step 2: Add to .env.local (2 min)

**File**: `.env.local` (in your project root)

**Add this line**:
```
SUPABASE_SERVICE_ROLE_KEY=paste_your_key_here
```

**Replace** `paste_your_key_here` with the key from Step 1

**Save** (Ctrl+S)

---

### 🚀 Step 3: Run Setup Script (5 min)

**Open Terminal** in your project directory

**Run**:
```bash
node scripts/setup-storage-buckets.js
```

**Wait for output**:
```
✅ Bucket 'blog-images' created successfully
✅ Bucket 'service-images' created successfully
✅ Storage bucket setup complete!
```

---

### 🧪 Step 4: Test Upload (2 min)

1. Go to: http://localhost:3000/admin
2. Click: **Blog Posts**
3. Click: **Create New Blog Post**
4. Upload an image
5. Click: **Save Blog Post**

**Result**: ✅ Success! No errors!

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| **FIX_BUCKETS_NOW.md** | Detailed fix instructions |
| **GET_SERVICE_ROLE_KEY.md** | How to get service role key |
| **FIXES_AND_VERIFICATION.md** | Troubleshooting |

---

## 🆘 Quick Troubleshooting

### Error: "Service Role Key not found"
- Make sure you added it to `.env.local`
- Make sure you saved the file
- Restart terminal

### Error: "Can't find Service Role Key in Supabase"
- Go to Settings (gear icon)
- Click API
- Look for "Service Role Key" (not "Anon Key")
- It's below the Anon Key

### Error: "Bucket already exists"
- This is OK! Buckets were already created
- Go to Supabase Storage to verify
- Try uploading an image

### Still getting "Bucket not found" error
- Verify buckets exist in Supabase Storage
- Verify both are marked as "Public"
- Restart dev server: `npm run dev`
- Refresh browser: Ctrl+F5
- Try uploading again

---

## ✅ Verification Checklist

- [ ] Got Service Role Key
- [ ] Added to .env.local
- [ ] Saved .env.local
- [ ] Ran setup script
- [ ] Script completed successfully
- [ ] Verified buckets in Supabase
- [ ] Both buckets are public
- [ ] Tested image upload
- [ ] No errors
- [ ] Image displays

---

## 🎉 Success Indicators

✅ No "Bucket not found" errors
✅ Image preview displays
✅ Image uploads successfully
✅ Image appears in Storage
✅ Image displays on /blog page
✅ Admin dashboard works

---

## 🔗 Links

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

## 🚀 After Fix

✅ Image uploads work
✅ Images display on pages
✅ No more errors
✅ Ready for production

---

**Total Time**: 10 minutes
**Status**: Ready to Fix ✅


