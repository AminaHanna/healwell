# Quick Start Guide - Admin Dashboard

## 1. Create Supabase Tables (IMPORTANT!)

Go to your Supabase dashboard (https://app.supabase.com) and run these SQL queries:

### Create Blogs Table
```sql
CREATE TABLE blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Create Services Table
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  short_description TEXT,
  icon TEXT,
  featured_image TEXT,
  price TEXT,
  active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 2. Install Rich Text Editor

```bash
npm install react-quill
```

## 3. Start the Development Server

```bash
cd medilo-nextjs
npm run dev
```

The app will be available at `http://localhost:3000`

## 3. Access the Admin Dashboard

Navigate to: **http://localhost:3000/admin**

You should see the admin dashboard with three tabs:
- Dashboard (overview)
- Blogs (manage blog posts)
- Services (manage services)

## 4. Create Your First Blog Post

1. Click on the **Blogs** tab
2. Click **"New Blog Post"** button
3. Fill in the form:
   - Title: "My First Blog Post"
   - Author: "Your Name"
   - Content: "Write your blog content here..."
   - Featured Image: (optional) paste an image URL
   - Check "Publish immediately" to make it visible
4. Click **"Create Blog Post"**

## 5. Create Your First Service

1. Click on the **Services** tab
2. Click **"New Service"** button
3. Fill in the form:
   - Title: "My Service"
   - Description: "Service description..."
   - Short Description: "Brief description"
   - Display Order: 1
   - Check "Active" to make it visible
4. Click **"Create Service"**

## 6. View Your Content on the Frontend

- **Blogs**: Visit http://localhost:3000/blog
- **Services**: Visit http://localhost:3000/service

Your published blogs and active services should now appear on these pages!

## 7. View Individual Items

- **Blog Details**: Click "Read More" on any blog post
- **Service Details**: Click on any service

## Key Features

✅ **Admin Dashboard** - Manage all content in one place
✅ **Dynamic Content** - Changes appear instantly on the frontend
✅ **Blog Management** - Create, edit, delete, and publish posts
✅ **Service Management** - Manage services with pricing and ordering
✅ **Responsive Design** - Works on desktop and mobile
✅ **Supabase Integration** - Secure cloud database

## Troubleshooting

### "No blogs/services showing"
- Make sure you created the Supabase tables
- Check that items are marked as "published" (blogs) or "active" (services)

### "Admin dashboard not loading"
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Restart the dev server

### "Images not showing"
- Use full URLs (https://example.com/image.jpg)
- Make sure the image URL is publicly accessible

## Next Steps

1. Customize the styling in `/src/app/admin/` components
2. Add more fields to blogs/services as needed
3. Set up Row Level Security (RLS) in Supabase for production
4. Deploy to Vercel or your hosting provider

## Need Help?

Check the full documentation in `ADMIN_DASHBOARD_SETUP.md`

---

## ✨ NEW: Rich Text Editor & Dynamic Pages

### What's New
- ✅ Professional WYSIWYG rich text editor (React Quill)
- ✅ Dynamic blog pages at `/blog/[slug]`
- ✅ Dynamic service pages at `/service/[slug]`
- ✅ Full HTML content support
- ✅ Professional CSS styling
- ✅ Responsive design

### Rich Text Editor Features
- Headers (H1, H2, H3)
- Text formatting (Bold, Italic, Underline, Strikethrough)
- Lists (Ordered and Bullet)
- Blockquotes
- Code blocks
- Links and images
- Text alignment

### Creating Content with Rich Text
1. Go to Admin Dashboard: `http://localhost:3000/admin`
2. Click "Blogs" or "Services" tab
3. Click "Create New"
4. Use the rich text editor for content
5. Click "Create"
6. View at `/blog/[slug]` or `/service/[slug]`

### Documentation
- **README_RICH_TEXT.md** - Complete guide
- **EXAMPLE_CONTENT.md** - Example content
- **VISUAL_GUIDE.md** - Visual diagrams
- **FINAL_SUMMARY.md** - Summary of changes
