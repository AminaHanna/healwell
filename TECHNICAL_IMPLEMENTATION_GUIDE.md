# 🔧 Technical Implementation Guide - Dynamic Service Background

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Admin Dashboard                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  PageSettingsManager Component                       │  │
│  │  - Image upload                                      │  │
│  │  - Preview                                           │  │
│  │  - Save to database                                  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    API Layer                                │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/page-settings                                  │  │
│  │  - GET: Fetch settings                               │  │
│  │  - POST: Create/Update settings                      │  │
│  │  - PUT: Update settings                              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                  Supabase Storage                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  page-settings bucket                                │  │
│  │  - Stores uploaded images                            │  │
│  │  - Public access                                     │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                  Supabase Database                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  page_settings table                                 │  │
│  │  - Stores setting URLs                               │  │
│  │  - Indexed for fast queries                          │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                  Frontend (Service Page)                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Service Listing Page                                │  │
│  │  - Fetches settings on mount                         │  │
│  │  - Applies background to cards                       │  │
│  │  - Fallback to default if not configured             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Structure

### PageSettingsManager.jsx
```javascript
// Key Functions:
- fetchSettings()        // Load current settings
- handleImageChange()    // Handle file upload
- handleSave()          // Save to database
- uploadImage()         // Upload to Supabase Storage

// State:
- settings              // Current settings
- imagePreview          // Preview URLs
- uploading             // Upload status
- loading               // Load status
- message               // User feedback
```

### Service Page (page.jsx)
```javascript
// Key Functions:
- fetchPageSettings()   // Get background from database
- fetchServices()       // Get services from API

// State:
- services              // Service list
- backgroundImage       // Dynamic background URL
- loading               // Load status

// Effects:
- useEffect 1: Fetch page settings on mount
- useEffect 2: Fetch services when background changes
```

---

## API Endpoint Details

### GET /api/page-settings
```javascript
// Query Parameters
page_name: string       // Filter by page (optional)
setting_key: string     // Filter by key (optional)

// Response
[
  {
    id: UUID,
    page_name: string,
    setting_key: string,
    setting_value: string,
    created_at: timestamp,
    updated_at: timestamp
  }
]

// Example
GET /api/page-settings?page_name=service_listing&setting_key=background_image
```

### POST /api/page-settings
```javascript
// Request Body
{
  page_name: "service_listing",
  setting_key: "background_image",
  setting_value: "https://..."
}

// Response
{
  id: UUID,
  page_name: string,
  setting_key: string,
  setting_value: string,
  created_at: timestamp,
  updated_at: timestamp
}

// Behavior
- Creates new if doesn't exist
- Updates if already exists
```

---

## Database Schema

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

-- Indexes for performance
CREATE INDEX idx_page_settings_page_name ON page_settings(page_name);
CREATE INDEX idx_page_settings_key ON page_settings(setting_key);
```

### Current Data
```sql
INSERT INTO page_settings (page_name, setting_key, setting_value)
VALUES (
  'service_listing',
  'background_image',
  'https://rdqczsmrxuzlouiflchq.supabase.co/storage/v1/object/public/page-settings/...'
);
```

---

## File Upload Flow

### Step 1: User Selects File
```javascript
handleImageChange(e, 'service_listing_bg')
```

### Step 2: Upload to Supabase Storage
```javascript
const imageUrl = await uploadImage(file, 'page-settings');
// Uses existing uploadImage utility from src/lib/imageUpload.js
```

### Step 3: Update Local State
```javascript
setImagePreview({ service_listing_bg: imageUrl });
setSettings({ service_listing_bg: imageUrl });
```

### Step 4: Save to Database
```javascript
POST /api/page-settings
{
  page_name: 'service_listing',
  setting_key: 'background_image',
  setting_value: imageUrl
}
```

---

## Frontend Integration

### Service Page Initialization
```javascript
// 1. Fetch page settings
useEffect(() => {
  const fetchPageSettings = async () => {
    const response = await fetch(
      '/api/page-settings?page_name=service_listing&setting_key=background_image'
    );
    const data = await response.json();
    if (data && data.length > 0) {
      setBackgroundImage(data[0].setting_value);
    }
  };
  fetchPageSettings();
}, []);

// 2. Fetch services with background image
useEffect(() => {
  const fetchServices = async () => {
    const response = await fetch('/api/services?active=true');
    const data = await response.json();
    
    const transformedServices = data.map((service, index) => ({
      backgroundImage: backgroundImage,  // Use dynamic background
      // ... other properties
    }));
    
    setServices(transformedServices);
  };
  fetchServices();
}, [backgroundImage]);
```

---

## Error Handling

### Upload Errors
```javascript
try {
  const imageUrl = await uploadImage(file, 'page-settings');
  // Success
} catch (error) {
  console.error('Error uploading image:', error);
  setMessage('Error uploading image');
}
```

### API Errors
```javascript
try {
  const response = await fetch('/api/page-settings', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Failed to save settings');
  }
} catch (error) {
  setMessage('Error saving settings');
}
```

### Fallback Behavior
```javascript
// If fetch fails, use default
const [backgroundImage, setBackgroundImage] = useState(
  '/assets/img/service_bg.jpg'  // Default fallback
);
```

---

## Performance Considerations

### Caching
- Settings fetched once on page load
- Cached in component state
- No repeated API calls

### Optimization
- Image upload uses existing utility
- Supabase handles CDN/caching
- Indexed database queries

### Best Practices
- Lazy load images
- Use appropriate image sizes
- Compress images before upload
- Cache API responses

---

## Security

### RLS Policies
- Page settings table should have RLS enabled
- Only authenticated users can modify
- Public read access for frontend

### File Upload
- Validate file type (image only)
- Validate file size (< 5MB)
- Use Supabase Storage security

### API Validation
- Validate required fields
- Sanitize input
- Check authentication

---

## Testing Checklist

- [ ] Upload image through admin
- [ ] Verify image appears in preview
- [ ] Click Save Settings
- [ ] Check success message
- [ ] Go to service page
- [ ] Verify background appears on cards
- [ ] Refresh page - should persist
- [ ] Try different images
- [ ] Test error handling
- [ ] Test fallback behavior

---

## Extending the System

### Add More Settings
```javascript
// In PageSettingsManager.jsx
const [settings, setSettings] = useState({
  service_listing_bg: '',
  blog_listing_bg: '',      // New setting
  careers_listing_bg: '',   // New setting
});
```

### Add More Pages
```javascript
// In API endpoint
const pages = ['service_listing', 'blog_listing', 'careers_listing'];
// Handle each page separately
```

### Add Different Setting Types
```javascript
// Not just images, but also:
- Colors
- Text content
- Layout options
- Feature flags
```

---

## Troubleshooting

### Image Not Showing
1. Check browser console for errors
2. Verify image URL is correct
3. Check Supabase Storage bucket
4. Verify RLS policies

### Upload Fails
1. Check file size (< 5MB)
2. Check file type (image only)
3. Check Supabase credentials
4. Check storage bucket permissions

### Settings Not Saving
1. Check API endpoint
2. Check database connection
3. Check request body format
4. Check error messages

---

**Status**: ✅ Complete
**Date**: 2025-10-19


