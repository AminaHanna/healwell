# 🚀 Fix Storage Buckets NOW - Complete Instructions

## ⚠️ Your Issue

```
Error: Storage bucket 'blog-images' not found
Error: Storage bucket 'service-images' not found
```

**Status**: ✅ Can be fixed in 10 minutes

---

## 🎯 Solution (3 Steps)

### Step 1: Get Service Role Key (3 min)

**Go to**: https://app.supabase.com

**Steps**:
1. Login with: `healwellservice@gmail.com`
2. Select project: `healwellservice@gmail.com's Project`
3. Click **gear icon** (⚙️) at bottom left → **Settings**
4. Click **"API"** in left sidebar
5. Find **"Service Role Key"** (long secret string)
6. Click **copy icon** next to it
7. Copy the entire key

**Example** (your key will be much longer):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcWN6c21yeHV6bG91aWZsY2hxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDU4MzA2MiwiZXhwIjoyMDc2MTU5MDYyfQ...
```

---

### Step 2: Add to .env.local (2 min)

**Open**: `.env.local` file in your project

**Add this line** at the end:
```
SUPABASE_SERVICE_ROLE_KEY=paste_your_key_here
```

**Replace** `paste_your_key_here` with the key you copied

**Example**:
```
NEXT_PUBLIC_SUPABASE_URL=https://rdqczsmrxuzlouiflchq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Save** the file (Ctrl+S)

---

### Step 3: Run Setup Script (5 min)

**Open Terminal** in your project directory

**Run**:
```bash
node scripts/setup-storage-buckets.js
```

**Expected Output**:
```
🚀 Starting storage bucket setup...

📦 Creating bucket: blog-images...
   ✅ Bucket 'blog-images' created successfully

📦 Creating bucket: service-images...
   ✅ Bucket 'service-images' created successfully

✅ Storage bucket setup complete!
```

---

## ✅ Verify Buckets Were Created

1. Go to: https://app.supabase.com
2. Select your project
3. Click **"Storage"**
4. You should see:
   - ✅ blog-images (Public)
   - ✅ service-images (Public)

---

## 🧪 Test Image Upload

1. Go to: http://localhost:3000/admin
2. Click: **"Blog Posts"**
3. Click: **"Create New Blog Post"**
4. Upload an image
5. Click: **"Save Blog Post"**

**Expected Result**: ✅ Success! No errors!

---

## 🆘 Troubleshooting

### Problem: "Service Role Key not found" Error

**Solution**:
1. Make sure you added the key to `.env.local`
2. Make sure the line is: `SUPABASE_SERVICE_ROLE_KEY=your_key`
3. Make sure you saved the file
4. Restart your terminal
5. Try again

### Problem: Can't Find Service Role Key in Supabase

**Solution**:
1. Make sure you're in **Settings** (gear icon)
2. Make sure you're in **API** section
3. Look for "Service Role Key" (not "Anon Key")
4. It should be below the Anon Key
5. If you don't see it, scroll down

### Problem: Script Says "Already Exists"

**Solution**:
- This is OK! It means the buckets were already created
- Go to Supabase Storage to verify
- Try uploading an image

### Problem: Still Getting "Bucket not found" Error

**Solution**:
1. Verify buckets exist in Supabase Storage
2. Verify both are marked as "Public"
3. Restart your dev server: `npm run dev`
4. Refresh browser (Ctrl+F5)
5. Try uploading again

---

## 📋 Checklist

- [ ] Got Service Role Key from Supabase
- [ ] Added to .env.local
- [ ] Saved .env.local
- [ ] Ran: `node scripts/setup-storage-buckets.js`
- [ ] Script completed successfully
- [ ] Verified buckets in Supabase Storage
- [ ] Both buckets are public
- [ ] Tested image upload
- [ ] No errors in console
- [ ] Image displays on page

---

## 🎯 Quick Reference

| Item | Value |
|------|-------|
| Supabase URL | https://app.supabase.com |
| Project | healwellservice@gmail.com's Project |
| Admin URL | http://localhost:3000/admin |
| Script | node scripts/setup-storage-buckets.js |
| Bucket 1 | blog-images (public) |
| Bucket 2 | service-images (public) |

---

## 🎉 After Buckets Are Created

✅ Image uploads will work
✅ Images will display on pages
✅ No more "Bucket not found" errors
✅ Ready for production

---

## 📞 Need More Help?

### Can't find Service Role Key?
→ Read: **GET_SERVICE_ROLE_KEY.md**

### Script not working?
→ Check error message and read troubleshooting above

### Still having issues?
→ Read: **FIXES_AND_VERIFICATION.md**

---

**Last Updated**: 2025-10-16
**Status**: Ready to Fix ✅
**Estimated Time**: 10 minutes


