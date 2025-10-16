# 🚀 Admin Dashboard Quick Start

## Step 1: Start the Development Server
```bash
npm run dev
```

## Step 2: Access the Admin Dashboard
Open your browser and navigate to:
```
http://localhost:3000/admin
```

## Step 3: Create Your First Blog Post

### Click "New Blog Post"
- **Title**: "Welcome to Our Blog"
- **Author**: "Your Name"
- **Content**: "This is my first blog post..."
- **Excerpt**: "A brief introduction to our blog"
- **Featured Image**: (optional) https://example.com/image.jpg
- **Publish**: Check the box to publish immediately

### Click "Create Blog"

## Step 4: Create Your First Service

### Click "New Service"
- **Service Title**: "Dental Checkup"
- **Full Description**: "Professional dental examination and cleaning..."
- **Short Description**: "Regular dental checkup"
- **Icon**: "🦷" (or any emoji)
- **Price**: "$99"
- **Display Order**: "1"
- **Active**: Check the box

### Click "Create Service"

## Step 5: View Your Content

### Dashboard Tab
- See statistics about your blogs and services
- View quick action cards

### Blog Posts Tab
- See all your blog posts in a table
- Edit or delete posts using the action buttons
- Create new posts

### Services Tab
- See all your services in a table
- Edit or delete services using the action buttons
- Create new services

## 📋 Form Fields Explained

### Blog Post Form
| Field | Required | Description |
|-------|----------|-------------|
| Title | ✅ | Blog post title (auto-generates slug) |
| Author | ✅ | Author name |
| Content | ✅ | Full blog post content |
| Excerpt | ❌ | Short summary (appears in listings) |
| Featured Image | ❌ | Cover image URL |
| Publish | ❌ | Toggle to publish immediately |

### Service Form
| Field | Required | Description |
|-------|----------|-------------|
| Service Title | ✅ | Service name (auto-generates slug) |
| Full Description | ✅ | Detailed service description |
| Short Description | ❌ | Brief summary |
| Icon | ❌ | Emoji or icon URL |
| Price | ❌ | Service pricing |
| Featured Image | ❌ | Service image URL |
| Display Order | ❌ | Sort order (lower numbers first) |
| Active | ❌ | Toggle to show/hide service |

## 🎨 Dashboard Sections

### Header
- Shows "Medilo Admin" branding
- Displays "Administrator" status

### Navigation Tabs
- **📊 Dashboard**: Overview and statistics
- **📝 Blog Posts**: Blog management
- **🏥 Services**: Service management

### Dashboard Overview
- **Statistics Cards**: Show counts of blogs, services, etc.
- **Quick Actions**: Fast links to create content

### Blog Management
- **Table**: Lists all blog posts
- **Columns**: Title, Author, Status, Created Date, Actions
- **Actions**: Edit (✏️) or Delete (🗑️)

### Service Management
- **Table**: Lists all services
- **Columns**: Service Name, Price, Status, Order, Created Date, Actions
- **Actions**: Edit (✏️) or Delete (🗑️)

## 💡 Tips & Tricks

### Auto-slug Generation
- Type a title like "My Awesome Blog Post"
- The slug automatically becomes "my-awesome-blog-post"
- Slugs are used in URLs

### Publishing Blogs
- Uncheck "Publish" to save as draft
- Check "Publish" to make it live
- Only published blogs appear on the frontend

### Service Display Order
- Lower numbers appear first
- Use 1, 2, 3, etc. for ordering
- Leave blank for default order

### Featured Images
- Use full URLs (https://...)
- Images must be publicly accessible
- Recommended size: 1200x600px

## ⚠️ Important Notes

### Before Deleting
- Deletion is permanent
- You'll be asked to confirm
- No undo available

### Required Fields
- Blog: Title, Author, Content
- Service: Service Title, Full Description
- All other fields are optional

### Slug Uniqueness
- Slugs must be unique
- Auto-generated from title
- Can't have duplicate slugs

## 🔍 Viewing Your Content

### On the Frontend
- **Blogs**: Navigate to `/blog` to see published posts
- **Services**: Navigate to `/service` to see active services
- **Details**: Click on any item to see full details

### In the Admin
- **Dashboard**: See statistics and overview
- **Tables**: See all content with edit/delete options
- **Forms**: Create or edit content

## 🆘 Troubleshooting

### "Error loading blogs/services"
- Check your internet connection
- Verify Supabase is running
- Check browser console for errors

### "Error saving blog/service"
- Ensure all required fields are filled
- Check that the title is unique
- Verify your internet connection

### "Slug already exists"
- Change the title to generate a new slug
- Or manually edit the slug field

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the development server
- Try a different browser

## 📞 Need Help?

1. Check the browser console (F12) for error messages
2. Review the ADMIN_DASHBOARD_README.md file
3. Check ADMIN_DASHBOARD_SETUP.md for configuration
4. Verify Supabase connection and tables

## 🎉 You're All Set!

Your admin dashboard is ready to use. Start creating content and managing your medical services!

Happy managing! 🚀

