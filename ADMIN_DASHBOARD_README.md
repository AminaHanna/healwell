# 🏥 Medilo Admin Dashboard

A professional, fully-featured admin dashboard for managing blog posts and medical services. Built with Next.js, React, and Supabase, with a design that matches the Medilo medical template.

## ✨ Features

### 📊 Dashboard Overview
- Real-time statistics cards showing:
  - Total blog posts
  - Published blog posts
  - Total services
  - Active services
- Quick action cards for creating content
- Professional gradient design with medical theme colors

### 📝 Blog Management
- **Create**: Add new blog posts with rich content
- **Read**: View all blogs in a sortable table
- **Update**: Edit existing blog posts
- **Delete**: Remove blogs with confirmation
- **Auto-slug**: Automatically generates URL-friendly slugs
- **Publish Status**: Toggle between draft and published
- **Featured Images**: Support for blog cover images
- **Author Tracking**: Track who wrote each post

### 🏥 Service Management
- **Create**: Add new medical services
- **Read**: View all services in a sortable table
- **Update**: Edit existing services
- **Delete**: Remove services with confirmation
- **Auto-slug**: Automatically generates URL-friendly slugs
- **Active Status**: Toggle service visibility
- **Display Order**: Control service display order
- **Pricing**: Add service pricing information
- **Icons**: Support for emoji or icon URLs

## 🎨 Design System

### Color Palette (Medilo Medical Theme)
```
Primary Blue:    #002261 (Dark blue for headers)
Accent Blue:     #2ea6f7 (Light blue for highlights)
White:           #ffffff (Backgrounds)
Body Text:       #636363 (Secondary text)
Heading:         #222222 (Primary text)
Gray:            #e8edf0 (Light backgrounds)
Border:          #dddddd (Borders)
Success:         #10b981 (Active/Published)
Danger:          #ef4444 (Inactive/Draft)
```

### Typography
- **Headings**: Poppins font (700 weight)
- **Body**: Rubik font (400-600 weight)

## 📁 Project Structure

```
src/app/admin/
├── page.jsx                    # Entry point
├── layout.jsx                  # Layout wrapper
├── AdminDashboard.jsx          # Main component
└── components/
    ├── DashboardOverview.jsx   # Statistics & overview
    ├── BlogManager.jsx         # Blog CRUD logic
    ├── BlogForm.jsx            # Blog form modal
    ├── BlogList.jsx            # Blog table
    ├── ServiceManager.jsx      # Service CRUD logic
    ├── ServiceForm.jsx         # Service form modal
    └── ServiceList.jsx         # Service table

src/app/sass/
└── admin.scss                  # All admin styling

src/lib/
└── supabase.js                 # Supabase client
```

## 🚀 Getting Started

### 1. Access the Dashboard
```
http://localhost:3000/admin
```

### 2. Create a Blog Post
1. Click "New Blog Post" button
2. Fill in the form:
   - **Title** (required) - Blog post title
   - **Author** (required) - Author name
   - **Content** (required) - Full blog content
   - **Excerpt** (optional) - Short summary
   - **Featured Image** (optional) - Image URL
3. Toggle "Publish this blog post" to publish
4. Click "Create Blog"

### 3. Create a Service
1. Click "New Service" button
2. Fill in the form:
   - **Service Title** (required) - Service name
   - **Full Description** (required) - Detailed description
   - **Short Description** (optional) - Brief summary
   - **Icon** (optional) - Emoji or icon URL
   - **Price** (optional) - Service pricing
   - **Featured Image** (optional) - Image URL
   - **Display Order** (optional) - Sort order
3. Toggle "Active" to activate
4. Click "Create Service"

### 4. Edit Content
- Click the ✏️ button on any item to edit
- Modify the fields
- Click "Update Blog" or "Update Service"

### 5. Delete Content
- Click the 🗑️ button on any item
- Confirm the deletion

## 🗄️ Database Schema

### Blogs Table
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
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Services Table
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
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔐 Security

- Uses Supabase Row Level Security (RLS)
- Environment variables for sensitive data
- Secure client-side authentication
- CSRF protection built-in

## 📱 Responsive Design

- **Desktop**: Full-featured layout
- **Tablet**: Optimized grid and spacing
- **Mobile**: Single-column layout with touch-friendly buttons

## 🛠️ Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 📚 Component Documentation

### AdminDashboard.jsx
Main component that manages tab navigation and renders appropriate sub-components.

### DashboardOverview.jsx
Displays statistics and quick actions. Fetches data from Supabase on mount.

### BlogManager.jsx
Handles blog CRUD operations. Manages state for blogs, loading, and form visibility.

### BlogForm.jsx
Modal form for creating/editing blogs. Includes auto-slug generation.

### BlogList.jsx
Table component displaying all blogs with edit/delete actions.

### ServiceManager.jsx
Handles service CRUD operations. Manages state for services, loading, and form visibility.

### ServiceForm.jsx
Modal form for creating/editing services. Includes auto-slug generation.

### ServiceList.jsx
Table component displaying all services with edit/delete actions.

## 🎯 Key Features

✅ **Auto-slug Generation**: Titles automatically convert to URL-friendly slugs
✅ **Real-time Updates**: Changes reflect immediately in the UI
✅ **Confirmation Dialogs**: Prevent accidental deletions
✅ **Form Validation**: Required fields are enforced
✅ **Responsive Tables**: Works on all screen sizes
✅ **Professional UI**: Matches Medilo medical template design
✅ **Smooth Animations**: Hover effects and transitions
✅ **Error Handling**: User-friendly error messages
✅ **Loading States**: Visual feedback during data fetching

## 🐛 Troubleshooting

### Dashboard not loading
- Check Supabase environment variables
- Verify Supabase connection
- Check browser console for errors

### Tables not showing data
- Ensure Supabase tables are created
- Verify table names match (blogs, services)
- Check Supabase RLS policies

### Styling not applied
- Clear browser cache
- Restart development server
- Verify admin.scss is imported

## 📞 Support

For issues or questions:
1. Check browser console for error messages
2. Verify Supabase connection
3. Ensure all environment variables are set
4. Review the documentation files

## 🎉 Ready to Use!

Your admin dashboard is now ready to manage content. Navigate to `/admin` and start creating!

