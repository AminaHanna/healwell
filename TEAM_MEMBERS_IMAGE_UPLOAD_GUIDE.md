# Team Members Image Upload - Quick Guide

## 🚀 Quick Start

### Access Admin Panel
```
http://localhost:3000/admin
```

### Navigate to Team Members
Click the **👥 Team Members** tab in the admin navigation

---

## 📸 Uploading an Image

### Step 1: Click "Add Team Member"
- Click the blue "+ Add Team Member" button
- A modal form will appear

### Step 2: Upload Image
1. Click the **"Profile Image"** file input field
2. Select an image from your computer
3. The image preview will appear automatically below the input
4. The image is ready to upload

### Step 3: Fill Other Fields
- **Name** (required) - Team member's full name
- **Position** (required) - Job title or role
- **Bio** (optional) - Short description
- **Social Links** (optional) - Facebook, Twitter, Instagram, Pinterest URLs
- **Display Order** - Number for sorting (1, 2, 3, etc.)
- **Active** - Checkbox to show/hide member

### Step 4: Save
- Click the blue **"Add Member"** button
- Image will be uploaded to Supabase Storage
- Team member will be created with the image

---

## ✏️ Editing with New Image

### Step 1: Click Edit
- Find the team member in the table
- Click the ✏️ **Edit** button

### Step 2: Update Image (Optional)
- Click the file input to upload a new image
- Or leave it as is to keep the current image
- Preview will show the new image

### Step 3: Update Other Fields
- Modify any fields as needed

### Step 4: Save
- Click the blue **"Update Member"** button

---

## 🗑️ Deleting a Team Member

1. Find the member in the table
2. Click the 🗑️ **Delete** button
3. Confirm the deletion
4. Member will be removed

---

## 📊 Image Requirements

| Requirement | Details |
|-------------|---------|
| **Format** | JPG, PNG, WebP, GIF |
| **Size** | Recommended: 300x400px or similar |
| **File Size** | No strict limit (Supabase handles it) |
| **Aspect Ratio** | Portrait recommended (taller than wide) |

---

## 💡 Tips & Best Practices

1. **Image Quality**: Use high-quality images for better appearance
2. **Consistent Size**: Use similar dimensions for all team member images
3. **Professional Photos**: Use professional headshots or portraits
4. **Naming**: Images are auto-named with timestamp (no need to rename)
5. **Preview**: Always check the preview before saving
6. **Display Order**: Lower numbers appear first (1, 2, 3...)
7. **Active Status**: Only active members show on pages

---

## 🔍 Viewing Uploaded Images

### On Home Page
- Visit `http://localhost:3000/`
- Scroll to "Our Leadership" section
- Team members appear in carousel with images

### On About Page
- Visit `http://localhost:3000/about`
- Scroll to "Our Leadership" section
- Team members appear in carousel with images

---

## ⚠️ Troubleshooting

### Image Not Uploading
- Check file format (JPG, PNG, WebP, GIF)
- Check file size (shouldn't be too large)
- Check internet connection
- Try a different image

### Image Not Showing on Pages
- Verify team member is marked as "Active"
- Check display order (should be 1, 2, 3, etc.)
- Refresh the page
- Check browser cache

### Upload Takes Too Long
- Large files take longer to upload
- Try a smaller image
- Check internet connection
- Wait for upload to complete

---

## 🎯 Image Upload Flow

```
1. Select image file
   ↓
2. Preview appears
   ↓
3. Fill form fields
   ↓
4. Click "Add Member"
   ↓
5. Image uploads to Supabase Storage
   ↓
6. Public URL generated
   ↓
7. Team member created with image
   ↓
8. Image appears on pages
```

---

## 📱 Responsive Display

### Desktop
- Large carousel with 4 team members visible
- Full-size images
- Smooth transitions

### Tablet
- 2-3 team members visible
- Adjusted image sizes
- Touch-friendly controls

### Mobile
- 1 team member visible
- Optimized for small screens
- Swipe to navigate

---

## 🔐 Security

- Images stored in Supabase Storage
- Public access (images are publicly viewable)
- Automatic filename generation prevents conflicts
- File type validation on upload

---

## 📞 Support

If you encounter issues:

1. **Check the preview** - Verify image appears in preview
2. **Check the table** - Verify member appears in list
3. **Check the pages** - Verify member appears on home/about
4. **Check console** - Look for error messages
5. **Check network** - Verify internet connection

---

## ✅ Success Checklist

- [ ] Image selected and previewed
- [ ] All required fields filled (Name, Position)
- [ ] Form submitted successfully
- [ ] Team member appears in table
- [ ] Image appears in table thumbnail
- [ ] Team member appears on home page
- [ ] Team member appears on about page
- [ ] Image displays correctly

---

**Status**: ✅ Image upload fully functional and production ready


