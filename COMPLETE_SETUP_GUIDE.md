# Complete Setup Guide - Medilo Project

## 🎯 Overview

This guide will help you set up the Medilo healthcare website with the admin dashboard, image uploads, and content management system.

**Total Setup Time**: 15 minutes

---

## ✅ Prerequisites

- Node.js 18+ installed
- Supabase account (free tier available)
- Git (optional)
- Code editor (VS Code recommended)

---

## 🚀 Step 1: Project Setup (2 minutes)

### 1.1 Install Dependencies
```bash
cd medilo
npm install
```

### 1.2 Verify Installation
```bash
npm run dev
```

You should see:
```
> ready - started server on 0.0.0.0:3000
```

---

## 🔑 Step 2: Environment Configuration (3 minutes)

### 2.1 Get Supabase Credentials

1. Go to https://app.supabase.com
2. Select your project: **"healwellservice@gmail.com's Project"**
3. Click **"Settings"** (bottom left)
4. Click **"API"**
5. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

### 2.2 Create .env.local File

Create file: `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://rdqczsmrxuzlouiflchq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 2.3 Verify Configuration

Restart your dev server:
```bash
npm run dev
```

No errors should appear in the console.

---

## 📦 Step 3: Create Storage Buckets (3 minutes)

### 3.1 Using Supabase Dashboard (Recommended)

1. Go to https://app.supabase.com
2. Select your project
3. Click **"Storage"** in left sidebar
4. Click **"New bucket"**

**Create First Bucket:**
- Name: `blog-images`
- Check: **"Public bucket"** ✓
- Click **"Create bucket"**

**Create Second Bucket:**
- Name: `service-images`
- Check: **"Public bucket"** ✓
- Click **"Create bucket"**

### 3.2 Verify Buckets

You should see both buckets in Storage section:
- ✅ `blog-images` (public)
- ✅ `service-images` (public)

---

## 🧪 Step 4: Test Admin Dashboard (3 minutes)

### 4.1 Access Admin Dashboard

1. Open browser: http://localhost:3000/admin
2. You should see the admin dashboard with tabs:
   - Dashboard
   - Blog Posts
   - Services

### 4.2 Create Test Blog Post

1. Click **"Blog Posts"** tab
2. Click **"Create New Blog Post"**
3. Fill in the form:
   - **Title**: "Welcome to Medilo"
   - **Author**: "Your Name"
   - **Content**: "This is a test blog post"
   - **Featured Image**: Click "Choose File" and select an image
4. You should see image preview
5. Click **"Save Blog Post"**
6. You should see: **"Blog post created successfully"** ✅

### 4.3 Verify Image Upload

1. Go to Supabase dashboard
2. Click **"Storage"**
3. Click **"blog-images"** bucket
4. You should see your uploaded image file ✅

### 4.4 View Blog on Frontend

1. Go to http://localhost:3000/blog
2. You should see your blog post with the image ✅
3. Click on the blog to view details
4. You should see the full blog content ✅

---

## 🎨 Step 5: Test Service Creation (2 minutes)

### 5.1 Create Test Service

1. Go to http://localhost:3000/admin
2. Click **"Services"** tab
3. Click **"Create New Service"**
4. Fill in the form:
   - **Title**: "Consultation"
   - **Description**: "Professional medical consultation"
   - **Featured Image**: Select an image
5. Click **"Save Service"**
6. You should see: **"Service created successfully"** ✅

### 5.2 Verify Service Display

1. Go to http://localhost:3000/service
2. You should see your service (image NOT shown in listing)
3. Click on the service
4. You should see the service details with image ✅

---

## 📝 Step 6: Test HTML Content Rendering (2 minutes)

### 6.1 Create Blog with Formatted Content

1. Go to http://localhost:3000/admin
2. Click **"Blog Posts"** tab
3. Click **"Create New Blog Post"**
4. In the content editor, add formatted text:
   - **Heading**: Use the heading button
   - **Bold**: Select text and click bold
   - **Italic**: Select text and click italic
   - **List**: Use the list button
5. Click **"Save Blog Post"**

### 6.2 Verify HTML Rendering

1. Go to http://localhost:3000/blog
2. Click on your blog post
3. Verify:
   - ✅ Headings display as headings (not as `<h1>` tags)
   - ✅ Bold text displays as bold (not as `<strong>` tags)
   - ✅ Italic text displays as italic (not as `<em>` tags)
   - ✅ Lists display as lists (not as `<ul>` tags)
   - ✅ No HTML tags visible to user

---

## ✅ Verification Checklist

- [ ] Node.js installed and dependencies installed
- [ ] .env.local file created with Supabase credentials
- [ ] Dev server running without errors
- [ ] Storage buckets created (blog-images, service-images)
- [ ] Both buckets are public
- [ ] Admin dashboard accessible at /admin
- [ ] Blog post created successfully
- [ ] Image uploaded to Supabase Storage
- [ ] Blog displays on /blog page with image
- [ ] Blog details page shows full content
- [ ] Service created successfully
- [ ] Service image NOT shown in listing
- [ ] Service image shown in details page
- [ ] HTML content renders without showing tags
- [ ] Formatted text displays correctly

---

## 🚀 Next Steps

### For Development
1. Create more blog posts and services
2. Test all features
3. Customize styling as needed
4. Add more content types if needed

### For Production
1. Create storage buckets in production Supabase project
2. Set up environment variables for production
3. Run `npm run build`
4. Deploy to hosting (Vercel, Netlify, etc.)

---

## 🆘 Troubleshooting

### Issue: "Bucket not found" Error

**Solution**:
1. Go to Supabase dashboard
2. Click "Storage"
3. Verify both buckets exist
4. Verify both buckets are marked as "Public"
5. Refresh browser (Ctrl+F5)
6. Try uploading again

### Issue: Image Not Displaying

**Solution**:
1. Verify bucket is public
2. Check Supabase Storage for the image file
3. Verify image URL is correct
4. Try a different image file

### Issue: HTML Tags Showing

**Solution**:
1. Verify content was created with React Quill editor
2. Check that `isHtmlContent: true` flag is set
3. Verify content is stored as HTML in database
4. Check browser console for errors

### Issue: Admin Dashboard Not Loading

**Solution**:
1. Verify dev server is running
2. Check .env.local file exists
3. Verify Supabase credentials are correct
4. Check browser console (F12) for errors
5. Restart dev server: `npm run dev`

---

## 📚 Documentation

For more detailed information, see:

- **[CODEBASE_INDEX.md](CODEBASE_INDEX.md)** - Complete codebase structure
- **[CREATE_STORAGE_BUCKETS.md](CREATE_STORAGE_BUCKETS.md)** - Storage bucket setup
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick answers
- **[FIXES_AND_VERIFICATION.md](FIXES_AND_VERIFICATION.md)** - Troubleshooting
- **[HTML_CONTENT_RENDERING_GUIDE.md](HTML_CONTENT_RENDERING_GUIDE.md)** - HTML rendering details

---

## 🎉 Success!

If you've completed all steps and verified everything works, you're ready to:

✅ Create and manage blog posts
✅ Create and manage services
✅ Upload images to Supabase Storage
✅ Display formatted content without HTML tags
✅ Deploy to production

---

## 📞 Support Resources

| Issue | Document |
|-------|----------|
| Quick setup | This file |
| Codebase structure | CODEBASE_INDEX.md |
| Storage buckets | CREATE_STORAGE_BUCKETS.md |
| Quick answers | QUICK_REFERENCE.md |
| Troubleshooting | FIXES_AND_VERIFICATION.md |
| HTML rendering | HTML_CONTENT_RENDERING_GUIDE.md |

---

**Last Updated**: 2025-10-16
**Status**: Ready for Production ✅


