# 🎨 Dynamic Service Page Background Image - Implementation Complete

## Overview

The service listing page background image is now fully dynamic and configurable through the admin dashboard. Administrators can upload and manage the background image without modifying code.

---

## ✅ What Was Implemented

### 1. Database Changes
- ✅ Created `page_settings` table in Supabase
- ✅ Stores page-level configuration settings
- ✅ Supports multiple pages and settings

### 2. API Endpoint
- ✅ Created `/api/page-settings` route
- ✅ GET: Fetch page settings
- ✅ POST: Create/update settings
- ✅ PUT: Update existing settings

### 3. Admin Dashboard
- ✅ Added "Settings" tab to admin dashboard
- ✅ Created PageSettingsManager component
- ✅ Image upload functionality
- ✅ Image preview
- ✅ Save/update settings

### 4. Frontend Integration
- ✅ Updated service listing page to fetch dynamic background
- ✅ Fallback to default image if not configured
- ✅ Responsive and performant

---

## 📁 Files Created/Modified

### New Files
| File | Purpose |
|------|---------|
| `src/app/api/page-settings/route.js` | API endpoint for page settings |
| `src/app/admin/components/PageSettingsManager.jsx` | Admin component for managing settings |

### Modified Files
| File | Changes |
|------|---------|
| `src/app/admin/AdminDashboard.jsx` | Added Settings tab and PageSettingsManager |
| `src/app/(innerpage)/service/page.jsx` | Fetch dynamic background image from database |
| `src/app/sass/admin.scss` | Added styling for PageSettingsManager |

---

## 🗄️ Database Schema

### page_settings Table
```sql
CREATE TABLE page_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name TEXT NOT NULL UNIQUE,
  setting_key TEXT NOT NULL,
  setting_value TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_page_settings_page_name ON page_settings(page_name);
CREATE INDEX idx_page_settings_key ON page_settings(setting_key);
```

### Current Settings
- **page_name**: `service_listing`
- **setting_key**: `background_image`
- **setting_value**: Image URL from Supabase Storage

---

## 🔌 API Endpoints

### GET /api/page-settings
Fetch page settings

**Query Parameters:**
- `page_name` - Filter by page name (optional)
- `setting_key` - Filter by setting key (optional)

**Example:**
```javascript
// Fetch all service listing settings
GET /api/page-settings?page_name=service_listing

// Fetch specific setting
GET /api/page-settings?page_name=service_listing&setting_key=background_image
```

**Response:**
```json
[
  {
    "id": "uuid",
    "page_name": "service_listing",
    "setting_key": "background_image",
    "setting_value": "https://rdqczsmrxuzlouiflchq.supabase.co/storage/v1/object/public/page-settings/...",
    "created_at": "2025-10-19T...",
    "updated_at": "2025-10-19T..."
  }
]
```

### POST /api/page-settings
Create or update a setting

**Request Body:**
```json
{
  "page_name": "service_listing",
  "setting_key": "background_image",
  "setting_value": "https://..."
}
```

### PUT /api/page-settings
Update an existing setting

**Request Body:**
```json
{
  "page_name": "service_listing",
  "setting_key": "background_image",
  "setting_value": "https://..."
}
```

---

## 🎯 How It Works

### Admin Panel Flow
1. Admin navigates to `/admin`
2. Clicks "Settings" tab
3. Sees "Service Listing Page" section
4. Uploads new background image
5. Clicks "Save Settings"
6. Image is uploaded to Supabase Storage (`page-settings` bucket)
7. URL is saved to `page_settings` table

### Frontend Flow
1. Service listing page loads
2. Fetches page settings from `/api/page-settings`
3. Gets background image URL from database
4. Uses dynamic URL for service card backgrounds
5. Falls back to default if not configured

---

## 🖼️ Image Upload

### Storage Bucket
- **Bucket Name**: `page-settings`
- **Visibility**: Public
- **Path**: `page-settings/[filename]`

### Upload Process
1. Admin selects image file
2. Image is uploaded to Supabase Storage
3. Public URL is returned
4. URL is saved to database
5. Frontend fetches and displays image

---

## 🎨 Admin Dashboard UI

### Settings Tab
- Clean, organized interface
- Image preview
- Upload button
- Save button
- Success/error messages
- Loading states

### Features
- ✅ Drag-and-drop support (via file input)
- ✅ Image preview before save
- ✅ Error handling
- ✅ Success notifications
- ✅ Responsive design

---

## 🔄 Data Flow

```
Admin Panel
    ↓
Upload Image
    ↓
Supabase Storage (page-settings bucket)
    ↓
Get Public URL
    ↓
Save to page_settings table
    ↓
Frontend fetches from /api/page-settings
    ↓
Apply to service card backgrounds
```

---

## 🧪 Testing

### Step 1: Access Admin Dashboard
```
http://localhost:3000/admin
```

### Step 2: Navigate to Settings
- Click "Settings" tab (⚙️ icon)

### Step 3: Upload Background Image
- Click "Choose Image" button
- Select an image file
- Preview appears

### Step 4: Save Settings
- Click "Save Settings" button
- Wait for success message

### Step 5: Verify on Frontend
- Go to `/service` page
- Service cards should display new background image
- Refresh page to confirm persistence

---

## 🔧 Configuration

### Default Background Image
If no background image is configured:
- Falls back to: `/assets/img/service_bg.jpg`
- Ensures page always displays correctly

### Supported Image Formats
- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)

### Image Size Recommendations
- Width: 1200px or more
- Height: 600px or more
- File size: < 5MB
- Format: JPEG or PNG for best performance

---

## 📊 Database Queries

### Get Service Listing Background
```sql
SELECT setting_value FROM page_settings
WHERE page_name = 'service_listing'
AND setting_key = 'background_image';
```

### Update Background
```sql
UPDATE page_settings
SET setting_value = 'https://...',
    updated_at = NOW()
WHERE page_name = 'service_listing'
AND setting_key = 'background_image';
```

---

## 🚀 Future Enhancements

Possible extensions:
- [ ] Add more page settings (blog page, careers page, etc.)
- [ ] Add color settings for pages
- [ ] Add text/content settings
- [ ] Add image cropping tool
- [ ] Add image optimization
- [ ] Add settings versioning/history
- [ ] Add settings export/import

---

## ✨ Benefits

✅ **No Code Changes Required** - Update images without touching code
✅ **Easy to Use** - Simple admin interface
✅ **Scalable** - Can add more settings easily
✅ **Performant** - Cached in database
✅ **Reliable** - Fallback to defaults
✅ **Professional** - Polished UI/UX

---

## 📝 Summary

The service page background image is now fully dynamic and managed through the admin dashboard. Administrators can upload and configure the background image without any technical knowledge or code changes.

**Status**: ✅ **COMPLETE AND READY TO USE**

---

**Implementation Date**: 2025-10-19
**Status**: Production Ready


