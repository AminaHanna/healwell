# Admin Dashboard - Quick Reference Guide

## 🎯 Getting Started

### Access the Dashboard
```
http://localhost:3000/admin
```

### Main Navigation
- **Dashboard** - Overview and statistics
- **Blog Posts** - Manage blog content
- **Services** - Manage services

## 📊 Dashboard Overview

### Statistics Cards
Shows real-time counts:
- **Total Blog Posts** - All blogs in system
- **Published Posts** - Only published blogs
- **Total Services** - All services in system
- **Active Services** - Only active services

Click any card to navigate to that section.

### Recent Activity
- **Recent Blog Posts** - Last 5 blogs created
- **Recent Services** - Last 5 services created

Shows status and creation date for each item.

## 📝 Blog Management

### Creating a Blog Post
1. Click **"New Blog Post"** button
2. Fill in the form:
   - **Title** - Blog post title (required)
   - **Slug** - Auto-generated from title (editable)
   - **Author** - Author name (required)
   - **Excerpt** - Short summary (optional)
   - **Content** - Full blog content (required)
   - **Featured Image** - Image URL (optional)
   - **Publish** - Check to publish immediately
3. Click **"Create Blog Post"**
4. See success notification

### Editing a Blog Post
1. Find the blog in the list
2. Click the **edit icon** (pencil)
3. Modify the fields
4. Click **"Update Blog Post"**
5. See success notification

### Deleting a Blog Post
1. Find the blog in the list
2. Click the **delete icon** (trash)
3. Confirm deletion in dialog
4. Blog is removed
5. See success notification

### Searching Blogs
1. Use the **search box** at the top
2. Type title or author name
3. Results filter in real-time
4. Clear search to reset

### Filtering Blogs
1. Use the **filter dropdown**
2. Select:
   - **All Posts** - Show all blogs
   - **Published** - Show only published
   - **Drafts** - Show only drafts
3. Results update immediately

## 🔧 Service Management

### Creating a Service
1. Click **"New Service"** button
2. Fill in the form:
   - **Title** - Service name (required)
   - **Slug** - Auto-generated from title (editable)
   - **Short Description** - Brief summary (optional)
   - **Description** - Full description (required)
   - **Icon** - Icon name (optional)
   - **Featured Image** - Image URL (optional)
   - **Price** - Service price (optional)
   - **Display Order** - Sort order (0-999)
   - **Active** - Check to make active
3. Click **"Create Service"**
4. See success notification

### Editing a Service
1. Find the service in the list
2. Click the **edit icon** (pencil)
3. Modify the fields
4. Click **"Update Service"**
5. See success notification

### Deleting a Service
1. Find the service in the list
2. Click the **delete icon** (trash)
3. Confirm deletion in dialog
4. Service is removed
5. See success notification

### Toggling Service Status
1. Find the service in the list
2. Click the **status badge** (Active/Inactive)
3. Status toggles immediately
4. See success notification

### Searching Services
1. Use the **search box** at the top
2. Type title or description
3. Results filter in real-time
4. Clear search to reset

### Filtering Services
1. Use the **filter dropdown**
2. Select:
   - **All Services** - Show all services
   - **Active** - Show only active
   - **Inactive** - Show only inactive
3. Results update immediately

## 🎨 UI Elements

### Buttons
- **Blue buttons** - Primary actions (Create, Update)
- **Gray buttons** - Secondary actions (Cancel)
- **Red buttons** - Dangerous actions (Delete)

### Status Badges
- **Green** - Published/Active
- **Gray** - Draft/Inactive

### Icons
- **Pencil** - Edit item
- **Trash** - Delete item
- **Toggle** - Change status
- **Search** - Search input
- **Filter** - Filter dropdown

## 🔔 Notifications

### Success Messages
- "Blog post created successfully"
- "Blog post updated successfully"
- "Blog post deleted successfully"
- "Service created successfully"
- "Service updated successfully"
- "Service deleted successfully"

### Error Messages
- "Title and content are required"
- "Failed to save blog post"
- "Failed to delete blog post"
- "Failed to load blogs"

### Toast Position
Notifications appear in the **top-right corner** and auto-dismiss after 3 seconds.

## ⚠️ Confirmation Dialogs

### When Deleting
A dialog appears asking to confirm deletion:
- Shows item title
- Explains action is permanent
- Requires explicit confirmation
- Can cancel to keep item

## 📱 Mobile Usage

### Sidebar on Mobile
- Click **hamburger menu** (☰) to open
- Click **X** to close
- Tap menu item to navigate
- Sidebar auto-closes after selection

### Responsive Tables
- Scroll horizontally on small screens
- All columns remain accessible
- Touch-friendly buttons

## ⌨️ Keyboard Shortcuts

### Form Navigation
- **Tab** - Move to next field
- **Shift+Tab** - Move to previous field
- **Enter** - Submit form (when focused on button)
- **Escape** - Close modal

## 🔍 Tips & Tricks

### Auto-Slug Generation
- Title automatically generates slug
- Slug updates as you type title
- You can manually edit slug if needed
- Slug must be unique

### Search Tips
- Search is case-insensitive
- Searches title and author/description
- Results update as you type
- Clear search to see all items

### Filter Tips
- Combine search + filter for precise results
- Filter persists when searching
- Reset filter to see all items

### Display Order
- Lower numbers appear first
- Use 0, 10, 20, etc. for easy reordering
- Services sorted by display_order

## 🆘 Common Issues

### "No blog posts match your filters"
- Clear search term
- Change filter to "All Posts"
- Create a new blog post

### "No services match your filters"
- Clear search term
- Change filter to "All Services"
- Create a new service

### Toast not showing
- Check browser console for errors
- Refresh page
- Try action again

### Sidebar not visible
- On mobile, click hamburger menu
- On desktop, should always be visible
- Clear browser cache if needed

## 📞 Support

For issues or questions:
1. Check browser console (F12)
2. Review error messages
3. Try refreshing the page
4. Check documentation files

---

**Last Updated**: October 2025
**Version**: 2.0 (Enhanced)

