# 🚀 Dynamic Home Page Implementation Guide

## What Changed

The home page (`/app/(home1)/page.jsx`) now dynamically fetches services and blogs from Supabase instead of using hardcoded data.

## Key Features

### ✅ Services Section
- **Source:** Supabase `services` table
- **Filter:** Only active services (`active = true`)
- **Limit:** 6 services maximum
- **Auto-mapping:** Supabase fields → Component format
- **Fallback:** Shows default services if fetch fails

### ✅ Blogs Section
- **Source:** Supabase `blogs` table
- **Filter:** Only published blogs (`published = true`)
- **Limit:** 4 recent blogs (ordered by created_at DESC)
- **Auto-mapping:** Supabase fields → Component format
- **Fallback:** Shows default blogs if fetch fails

## How It Works

### 1. Client Component Setup
```javascript
'use client';
import React, { useState, useEffect } from 'react';
```

### 2. State Management
```javascript
const [services, setServices] = useState([]);
const [blogs, setBlogs] = useState([]);
const [loadingServices, setLoadingServices] = useState(true);
const [loadingBlogs, setLoadingBlogs] = useState(true);
```

### 3. Fetch Services on Mount
```javascript
useEffect(() => {
  const fetchServices = async () => {
    const response = await fetch('/api/services?active=true');
    const data = await response.json();
    // Map and set services
  };
  fetchServices();
}, []);
```

### 4. Fetch Blogs on Mount
```javascript
useEffect(() => {
  const fetchBlogs = async () => {
    const response = await fetch('/api/blogs?published=true');
    const data = await response.json();
    // Map and set blogs
  };
  fetchBlogs();
}, []);
```

### 5. Data Mapping

**Services Mapping:**
```javascript
{
  backgroundImage: '/assets/img/service_bg.jpg',
  iconUrl: service.icon || '/assets/img/icons/service_icon_1.png',
  index: String(index + 1).padStart(2, '0'),
  title: service.title,
  subtitle: service.short_description || service.description,
  link: `/service/${service.slug}`,
}
```

**Blogs Mapping:**
```javascript
{
  title: blog.title,
  subtitle: blog.excerpt || blog.content?.substring(0, 100),
  date: new Date(blog.created_at).toLocaleDateString(...),
  category: 'Medical',
  author: blog.author || 'Admin',
  thumbnail: blog.featured_image || '/assets/img/post_1.jpeg',
  btnText: 'Read More',
  postLink: `/blog/${blog.slug}`,
  authorIcon: '/assets/img/icons/post_user_icon.png',
  commentIcon: '/assets/img/icons/post_comment_icon.png',
}
```

## API Endpoints

### GET /api/services?active=true
Returns active services from Supabase

### GET /api/blogs?published=true
Returns published blogs from Supabase (newest first)

## Testing Steps

1. **Publish Services in Admin Dashboard**
   - Go to admin dashboard
   - Add/publish at least 1 service
   - Mark as active

2. **Publish Blogs in Admin Dashboard**
   - Go to admin dashboard
   - Add/publish at least 1 blog

3. **Test Home Page**
   - Navigate to home page
   - Verify services display
   - Verify blogs display
   - Click on service → should go to `/service/[slug]`
   - Click on blog → should go to `/blog/[slug]`

4. **Check Browser Console**
   - Open DevTools (F12)
   - Check Console tab for errors
   - Should see no errors

## Fallback Behavior

If API fails or no data:
- Services section shows default hardcoded services
- Blogs section shows default hardcoded blogs
- No broken UI or errors

## Performance

- Data fetches on component mount (once)
- Limited to 6 services and 4 blogs
- Efficient API calls with filtering

## File Modified

- `src/app/(home1)/page.jsx`

## Next Steps

1. ✅ Ensure services are published in admin
2. ✅ Ensure blogs are published in admin
3. ✅ Test home page loads correctly
4. ✅ Verify links work
5. ✅ Check console for errors

**Everything is ready! 🎉**

