# Admin Dashboard Integration Guide

## Overview
This document outlines the complete admin dashboard system that has been integrated into your Medilo Next.js application. The system allows you to manage blogs and services dynamically through an admin interface, with content automatically displayed on the public-facing website.

## Architecture

### Components
1. **Admin Dashboard** (`/admin`) - Main admin interface for managing content
2. **Blog Management** - Create, edit, delete, and publish blog posts
3. **Service Management** - Create, edit, delete, and manage services
4. **Dynamic Frontend Pages** - Automatically display content from Supabase

### Database (Supabase)
- **Project URL**: https://rdqczsmrxuzlouiflchq.supabase.co
- **Tables**: `blogs` and `services`

## Setup Instructions

### 1. Environment Variables
The `.env.local` file has been created with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://rdqczsmrxuzlouiflchq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Database Tables
You need to create two tables in your Supabase database:

#### Blogs Table
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

#### Services Table
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

### 3. Installed Dependencies
The following packages have been installed:
- `@supabase/supabase-js` - Supabase client library
- `lucide-react` - Icon library for the admin dashboard

## Usage

### Accessing the Admin Dashboard
Navigate to: `http://localhost:3000/admin`

The admin dashboard provides three main sections:
1. **Dashboard** - Overview of blog and service management
2. **Blogs** - Create, edit, delete blog posts
3. **Services** - Create, edit, delete services

### Creating a Blog Post
1. Go to `/admin` → Blogs tab
2. Click "New Blog Post"
3. Fill in the form:
   - **Title**: Blog post title (slug auto-generates)
   - **Author**: Author name
   - **Excerpt**: Short summary
   - **Content**: Full blog content
   - **Featured Image**: URL to the image
   - **Publish**: Check to publish immediately
4. Click "Create Blog Post"

### Creating a Service
1. Go to `/admin` → Services tab
2. Click "New Service"
3. Fill in the form:
   - **Title**: Service name
   - **Short Description**: Brief description
   - **Description**: Full description
   - **Icon**: Lucide icon name (optional)
   - **Price**: Service price (optional)
   - **Featured Image**: URL to the image
   - **Display Order**: Order on the frontend
   - **Active**: Toggle to show/hide
4. Click "Create Service"

## Frontend Integration

### Blog Page (`/blog`)
- Automatically fetches published blogs from Supabase
- Displays blogs in a grid/slider format
- Each blog links to its detail page

### Blog Details Page (`/blog/[slug]`)
- Dynamically loads blog content by slug
- Displays full blog post with author and date
- Accessible via query parameter: `/blog/blog-details?slug=your-blog-slug`

### Service Page (`/service`)
- Automatically fetches active services from Supabase
- Displays services in the configured layout
- Each service links to its detail page

### Service Details Page (`/service/[slug]`)
- Dynamically loads service content by slug
- Displays full service description
- Accessible via query parameter: `/service/service-details?slug=your-service-slug`

## API Routes

### GET /api/blogs
Fetch blogs from Supabase
- Query Parameters:
  - `slug` - Get specific blog by slug
  - `published` - Filter by published status (default: true)

Example:
```
GET /api/blogs?published=true
GET /api/blogs?slug=my-blog-post
```

### GET /api/services
Fetch services from Supabase
- Query Parameters:
  - `slug` - Get specific service by slug
  - `active` - Filter by active status (default: true)

Example:
```
GET /api/services?active=true
GET /api/services?slug=my-service
```

## File Structure

```
medilo-nextjs/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── page.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── components/
│   │   │       ├── BlogManager.jsx
│   │   │       └── ServiceManager.jsx
│   │   ├── api/
│   │   │   ├── blogs/
│   │   │   │   └── route.js
│   │   │   └── services/
│   │   │       └── route.js
│   │   ├── (innerpage)/
│   │   │   ├── blog/
│   │   │   │   ├── page.jsx (updated)
│   │   │   │   ├── blog-details/
│   │   │   │   │   └── page.jsx (original)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.jsx (new dynamic)
│   │   │   └── service/
│   │   │       ├── page.jsx (updated)
│   │   │       ├── service-details/
│   │   │       │   └── page.jsx (original)
│   │   │       └── [slug]/
│   │   │           └── page.jsx (new dynamic)
│   └── lib/
│       └── supabase.js
├── .env.local
└── ADMIN_DASHBOARD_SETUP.md
```

## Troubleshooting

### Blogs/Services not showing on frontend
1. Ensure the Supabase tables are created
2. Check that blogs are marked as "published" and services as "active"
3. Verify the API routes are working: `/api/blogs` and `/api/services`

### Admin dashboard not loading
1. Check that all dependencies are installed: `npm install`
2. Verify environment variables in `.env.local`
3. Check browser console for errors

### Images not displaying
1. Ensure image URLs are publicly accessible
2. Use full URLs (https://...) not relative paths

## Next Steps

1. **Create Supabase Tables**: Run the SQL scripts above in your Supabase dashboard
2. **Test Admin Dashboard**: Navigate to `/admin` and create test content
3. **Verify Frontend**: Check that content appears on `/blog` and `/service` pages
4. **Customize Styling**: Modify components as needed for your branding

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify Supabase connection and table structure
3. Ensure all environment variables are set correctly

