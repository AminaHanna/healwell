# 🎨 Visual Guide - Dynamic Service Background

## Admin Dashboard Flow

### Step 1: Navigate to Admin
```
Browser: http://localhost:3000/admin
         ↓
    Admin Dashboard Opens
         ↓
    Navigation Tabs Visible
```

### Step 2: Click Settings Tab
```
┌─────────────────────────────────────────┐
│ HealWell Admin                          │
├─────────────────────────────────────────┤
│ [📊] [📝] [🏥] [💼] [⚙️ Settings]      │
│                        ↑
│                   Click Here
└─────────────────────────────────────────┘
```

### Step 3: Upload Image
```
┌─────────────────────────────────────────┐
│ Page Settings                           │
├─────────────────────────────────────────┤
│ Service Listing Page                    │
│                                         │
│ Background Image                        │
│ Upload an image to customize...         │
│                                         │
│ [Choose Image] ← Click to select file   │
│                                         │
│ [Save Settings]                         │
└─────────────────────────────────────────┘
```

### Step 4: Image Preview
```
┌─────────────────────────────────────────┐
│ Page Settings                           │
├─────────────────────────────────────────┤
│ Service Listing Page                    │
│                                         │
│ Background Image                        │
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │
│ │     [Image Preview Appears]         │ │
│ │                                     │ │
│ │     (Shows uploaded image)          │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Choose Image] [Save Settings]          │
└─────────────────────────────────────────┘
```

### Step 5: Save Settings
```
Click [Save Settings]
         ↓
    Uploading...
         ↓
    ✅ Settings saved successfully
         ↓
    Message disappears after 3 seconds
```

---

## Frontend Display

### Service Listing Page
```
┌─────────────────────────────────────────┐
│ Service                                 │
├─────────────────────────────────────────┤
│ OUR BEST SERVICE                        │
│ High-Quality Services This Doctor       │
│                                         │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ Service  │ │ Service  │ │ Service  │ │
│ │ Card 1   │ │ Card 2   │ │ Card 3   │ │
│ │          │ │          │ │          │ │
│ │ [BG IMG] │ │ [BG IMG] │ │ [BG IMG] │ │
│ │          │ │          │ │          │ │
│ └──────────┘ └──────────┘ └──────────┘ │
│                                         │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ Service  │ │ Service  │ │ Service  │ │
│ │ Card 4   │ │ Card 5   │ │ Card 6   │ │
│ │          │ │          │ │          │ │
│ │ [BG IMG] │ │ [BG IMG] │ │ [BG IMG] │ │
│ │          │ │          │ │          │ │
│ └──────────┘ └──────────┘ └──────────┘ │
│                                         │
│ ↑ All cards use dynamic background ↑   │
└─────────────────────────────────────────┘
```

---

## Data Flow Diagram

### Upload Process
```
┌──────────────┐
│ Admin Selects │
│ Image File   │
└──────┬───────┘
       ↓
┌──────────────────────────┐
│ Upload to Supabase       │
│ Storage (page-settings)  │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Get Public URL           │
│ https://...              │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Save URL to Database     │
│ page_settings table      │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Show Success Message     │
│ ✅ Settings saved       │
└──────────────────────────┘
```

### Display Process
```
┌──────────────────────────┐
│ Service Page Loads       │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Fetch Page Settings      │
│ /api/page-settings       │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Get Background Image URL │
│ from Database            │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Fetch Services from API  │
│ /api/services            │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Apply Background to      │
│ Service Cards            │
└──────┬───────────────────┘
       ↓
┌──────────────────────────┐
│ Display Service Cards    │
│ with Dynamic Background  │
└──────────────────────────┘
```

---

## Component Hierarchy

```
AdminDashboard
├── Header
├── Navigation Tabs
│   ├── Dashboard
│   ├── Blog Posts
│   ├── Services
│   ├── Careers
│   └── Settings ← New Tab
│       └── PageSettingsManager
│           ├── Settings Header
│           ├── Settings Card
│           │   ├── Label
│           │   ├── Image Preview
│           │   └── File Input
│           ├── Message (Success/Error)
│           └── Save Button
└── Main Content
```

---

## State Management

### PageSettingsManager State
```javascript
{
  settings: {
    service_listing_bg: "https://..."
  },
  imagePreview: {
    service_listing_bg: "https://..."
  },
  uploading: false,
  loading: false,
  message: ""
}
```

### Service Page State
```javascript
{
  services: [
    {
      backgroundImage: "https://...",
      title: "Service 1",
      // ... other properties
    },
    // ... more services
  ],
  backgroundImage: "https://...",
  loading: false
}
```

---

## API Request/Response

### GET Request
```
GET /api/page-settings?page_name=service_listing&setting_key=background_image

Response:
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "page_name": "service_listing",
    "setting_key": "background_image",
    "setting_value": "https://rdqczsmrxuzlouiflchq.supabase.co/storage/v1/object/public/page-settings/image.jpg",
    "created_at": "2025-10-19T10:00:00Z",
    "updated_at": "2025-10-19T10:00:00Z"
  }
]
```

### POST Request
```
POST /api/page-settings

Body:
{
  "page_name": "service_listing",
  "setting_key": "background_image",
  "setting_value": "https://rdqczsmrxuzlouiflchq.supabase.co/storage/v1/object/public/page-settings/image.jpg"
}

Response:
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "page_name": "service_listing",
  "setting_key": "background_image",
  "setting_value": "https://...",
  "created_at": "2025-10-19T10:00:00Z",
  "updated_at": "2025-10-19T10:00:00Z"
}
```

---

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── AdminDashboard.jsx ← Updated
│   │   └── components/
│   │       └── PageSettingsManager.jsx ← New
│   ├── api/
│   │   └── page-settings/
│   │       └── route.js ← New
│   ├── (innerpage)/
│   │   └── service/
│   │       └── page.jsx ← Updated
│   └── sass/
│       └── admin.scss ← Updated
└── lib/
    └── imageUpload.js (existing)
```

---

## User Journey

### Admin User
```
1. Login to Admin Dashboard
   ↓
2. Click Settings Tab
   ↓
3. See Service Listing Page Section
   ↓
4. Click Choose Image
   ↓
5. Select Image File
   ↓
6. See Image Preview
   ↓
7. Click Save Settings
   ↓
8. See Success Message
   ↓
9. Go to Service Page
   ↓
10. See New Background Image
```

### Regular User
```
1. Visit Service Page
   ↓
2. Page Loads
   ↓
3. Fetches Background Image from Database
   ↓
4. Service Cards Display with Background
   ↓
5. Sees Professional, Customized Page
```

---

## Success Indicators

✅ **Admin Panel**
- Settings tab appears
- Image upload works
- Preview displays
- Save button functions
- Success message shows

✅ **Frontend**
- Service page loads
- Background image appears
- Cards display correctly
- Image persists on refresh
- Fallback works if not configured

✅ **Database**
- page_settings table exists
- Data saves correctly
- Queries are fast
- Indexes work properly

---

**Status**: ✅ Complete
**Date**: 2025-10-19


