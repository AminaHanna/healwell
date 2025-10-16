# Admin Dashboard - Quick Reference

## 🚀 Quick Start

```bash
# Start the development server
npm run dev

# Open admin dashboard
http://localhost:3000/admin
```

## 📁 File Structure

```
src/app/admin/
├── page.jsx                    # Entry point
├── AdminDashboard.jsx          # Main component
└── components/
    ├── BlogManager.jsx         # Blog CRUD
    └── ServiceManager.jsx      # Service CRUD
```

## 🎯 Features

### Dashboard Tab
- Overview with quick links
- Blog Management card
- Service Management card

### Blogs Tab
- Create new blog
- Edit blog (pencil icon)
- Delete blog (trash icon)
- View status (Published/Draft)
- Modal form

### Services Tab
- Create new service
- Edit service (pencil icon)
- Delete service (trash icon)
- Toggle active/inactive
- Modal form

## 🎨 Design

- **Layout**: Tab-based navigation
- **Colors**: Blue primary (#3B82F6)
- **Background**: Gray (bg-gray-50)
- **Cards**: White with shadows
- **Responsive**: Mobile, tablet, desktop

## 💾 Database

### Blogs Table
- id (UUID)
- title (text)
- slug (text)
- content (text)
- excerpt (text)
- featured_image (text)
- author (text)
- published (boolean)
- created_at (timestamp)
- updated_at (timestamp)

### Services Table
- id (UUID)
- title (text)
- slug (text)
- description (text)
- short_description (text)
- icon (text)
- featured_image (text)
- price (text)
- active (boolean)
- display_order (integer)
- created_at (timestamp)
- updated_at (timestamp)

## 🔧 API Routes

### Blogs
- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/[id]` - Update blog
- `DELETE /api/blogs/[id]` - Delete blog

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service
- `PUT /api/services/[id]` - Update service
- `DELETE /api/services/[id]` - Delete service

## 📝 Form Fields

### Blog Form
- Title (required)
- Slug (auto-generated)
- Author (required)
- Excerpt (optional)
- Content (required)
- Featured Image URL (optional)
- Publish immediately (checkbox)

### Service Form
- Title (required)
- Slug (auto-generated)
- Short Description (optional)
- Description (required)
- Icon (optional)
- Featured Image URL (optional)
- Price (optional)
- Display Order (optional)
- Active (checkbox)

## 🎯 Common Tasks

### Create a Blog Post
1. Click "Blogs" tab
2. Click "New Blog Post" button
3. Fill in the form
4. Click "Create Blog Post"

### Edit a Blog Post
1. Click "Blogs" tab
2. Find the blog in the table
3. Click pencil icon
4. Modify the form
5. Click "Update Blog Post"

### Delete a Blog Post
1. Click "Blogs" tab
2. Find the blog in the table
3. Click trash icon
4. Confirm deletion

### Create a Service
1. Click "Services" tab
2. Click "New Service" button
3. Fill in the form
4. Click "Create Service"

### Toggle Service Status
1. Click "Services" tab
2. Find the service in the table
3. Click the Active/Inactive button
4. Status updates immediately

## 🔐 Security

- Uses Supabase authentication
- Row-level security (RLS) policies
- API key in environment variables
- No sensitive data in client code

## 📊 Performance

- Minimal components
- Simple state management
- Efficient database queries
- Fast rendering

## 🐛 Troubleshooting

### Dashboard not loading
- Check if Supabase is connected
- Check environment variables
- Check browser console for errors

### Can't create content
- Check form validation
- Check Supabase permissions
- Check database tables exist

### Can't delete content
- Check Supabase permissions
- Check if item exists
- Check browser console for errors

## 📚 Documentation

- `ADMIN_DASHBOARD_REDESIGN_COMPLETE.md` - Full documentation
- `ADMIN_DASHBOARD_UPDATED.md` - Update summary
- `ADMIN_DASHBOARD_REDESIGN_SUMMARY.md` - Design details

## 🎉 Status

✅ Admin dashboard is ready to use
✅ All features working
✅ Responsive design
✅ Supabase integrated
✅ Production ready

---

**Last Updated**: October 2025
**Version**: 1.0
**Status**: Production Ready ✅

