# SEO Content Management - Technical Architecture

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Inner Pages (about, service, portfolio, blog, etc.)        │
│  ├── PageHeading (Breadcrumb)                               │
│  ├── PageSEOContent (NEW - Dynamic Content)                 │
│  └── Page-specific Content                                  │
│                                                               │
│  Admin Panel (/admin)                                        │
│  └── PageSettingsManager (NEW - Content Editor)             │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    API Layer                                 │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  /api/page-settings                                          │
│  ├── GET - Fetch page settings                              │
│  ├── POST - Create/Update settings                          │
│  └── PUT - Update existing settings                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  Database (Supabase)                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  page_settings Table                                         │
│  ├── id (UUID)                                              │
│  ├── page_name (TEXT) - about, service, portfolio, etc.    │
│  ├── setting_key (TEXT) - page_heading, page_description   │
│  ├── setting_value (TEXT) - Actual content                 │
│  ├── created_at (TIMESTAMPTZ)                              │
│  └── updated_at (TIMESTAMPTZ)                              │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Component Structure

### PageSEOContent Component
```
src/app/Components/PageSEOContent/index.jsx
├── Props: pageName (string)
├── State:
│   ├── content (object with heading and description)
│   └── loading (boolean)
├── Effects:
│   └── Fetch content on mount and when pageName changes
└── Render:
    ├── Returns null if no content
    └── Renders semantic HTML (h1, p)
```

### PageSettingsManager Component
```
src/app/admin/components/PageSettingsManager.jsx
├── State:
│   ├── selectedPage (current page being edited)
│   ├── settings (form data)
│   ├── imagePreview (for service listing bg)
│   ├── uploading (loading state)
│   ├── loading (initial load state)
│   └── message (success/error messages)
├── Functions:
│   ├── fetchSettings() - Load page settings from API
│   ├── handleImageChange() - Upload image to storage
│   └── handleSave() - Save all settings to database
└── Render:
    ├── Page selector buttons
    ├── SEO content form fields
    └── Service listing background (conditional)
```

---

## 🔄 Data Flow

### Reading SEO Content (Frontend)

```
1. User visits /about page
   ↓
2. PageSEOContent component mounts
   ↓
3. useEffect triggers fetchSEOContent()
   ↓
4. Fetch GET /api/page-settings?page_name=about
   ↓
5. API queries Supabase for page_name='about'
   ↓
6. Returns array of settings (page_heading, page_description)
   ↓
7. Component renders heading and description
   ↓
8. User sees SEO content below breadcrumb
```

### Writing SEO Content (Admin)

```
1. Admin clicks Settings tab
   ↓
2. Selects a page (e.g., "About Page")
   ↓
3. Enters heading and description
   ↓
4. Clicks "Save Settings"
   ↓
5. Component calls handleSave()
   ↓
6. POST /api/page-settings with page_name, setting_key, setting_value
   ↓
7. API creates or updates record in Supabase
   ↓
8. Success message displayed
   ↓
9. Admin can verify by visiting the page
```

---

## 🗄️ Database Schema

### page_settings Table

```sql
CREATE TABLE page_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name TEXT NOT NULL,
  setting_key TEXT NOT NULL,
  setting_value TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_page_settings_page_name ON page_settings(page_name);
CREATE INDEX idx_page_settings_key ON page_settings(setting_key);
```

### Sample Data

```sql
INSERT INTO page_settings (page_name, setting_key, setting_value) VALUES
('about', 'page_heading', 'About Healwell Healthcare'),
('about', 'page_description', 'Founded on the principle...'),
('service', 'page_heading', 'Our Services'),
('service', 'page_description', 'Comprehensive healthcare staffing...'),
('portfolio', 'page_heading', 'Our Portfolio'),
('portfolio', 'page_description', 'Discover how we''ve helped...'),
('blog', 'page_heading', 'Healthcare Insights & News'),
('blog', 'page_description', 'Stay informed with the latest...'),
('careers', 'page_heading', 'Join Our Healthcare Team'),
('careers', 'page_description', 'Take your healthcare career...'),
('contact', 'page_heading', 'Contact Us'),
('contact', 'page_description', 'Ready to solve your staffing...');
```

---

## 🔌 API Endpoint Details

### GET /api/page-settings

**Query Parameters**:
- `page_name` (optional) - Filter by page name
- `setting_key` (optional) - Filter by setting key

**Response**:
```json
[
  {
    "id": "uuid",
    "page_name": "about",
    "setting_key": "page_heading",
    "setting_value": "About Healwell Healthcare",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
]
```

### POST /api/page-settings

**Request Body**:
```json
{
  "page_name": "about",
  "setting_key": "page_heading",
  "setting_value": "About Healwell Healthcare"
}
```

**Response**: Created/Updated record object

---

## 🎨 Styling Architecture

### CSS Variables Used
```scss
--heading-color: #222
--body-color: #636363
--heading-font: 'Poppins', sans-serif
--body-font: 'Rubik', sans-serif
```

### Responsive Breakpoints
```scss
Desktop: 32px heading, 16px description
Tablet (1199px): 28px heading, 15px description
Mobile (767px): 22px heading, 14px description
Small Mobile (575px): 20px heading, 13px description
```

---

## 🚀 Performance Considerations

1. **Client-Side Rendering**: Content fetched on component mount
2. **Conditional Rendering**: Returns null if no content (no DOM bloat)
3. **Efficient Queries**: Indexed database queries by page_name
4. **Caching**: Browser caches API responses
5. **Lazy Loading**: Content loads after breadcrumb

---

## 🔒 Security

- ✅ API endpoint validates page_name and setting_key
- ✅ Content stored as plain text (no XSS risk with proper escaping)
- ✅ Admin panel requires authentication (existing auth system)
- ✅ No sensitive data stored in page_settings
- ✅ Database queries use parameterized statements

---

## 📊 Monitoring & Debugging

### Check if Content is Saved
```javascript
// In browser console
fetch('/api/page-settings?page_name=about')
  .then(r => r.json())
  .then(console.log)
```

### Check Component Rendering
```javascript
// In browser console
document.querySelector('.cs_page_seo_content')
```

### Database Query
```sql
SELECT * FROM page_settings WHERE page_name = 'about';
```


