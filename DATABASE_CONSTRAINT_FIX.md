# Database Constraint Fix - SEO Content Management

## 🐛 Issue Found

When trying to save SEO content (heading and description) for a page, the API returned a 500 error:

```
Error: duplicate key value violates unique constraint "page_settings_page_name_key"
```

## 🔍 Root Cause

The `page_settings` table had an incorrect unique constraint:
- **Old Constraint**: `page_settings_page_name_key` - UNIQUE on `page_name` only
- **Problem**: This prevented multiple settings (heading + description) from being saved for the same page

## ✅ Solution Applied

### Step 1: Dropped Incorrect Constraint
```sql
ALTER TABLE page_settings DROP CONSTRAINT page_settings_page_name_key;
```

### Step 2: Added Correct Constraint
```sql
ALTER TABLE page_settings ADD CONSTRAINT page_settings_page_name_setting_key_unique UNIQUE (page_name, setting_key);
```

## 📊 Result

**Before Fix**:
- ❌ Could only save ONE setting per page
- ❌ Trying to save heading + description failed
- ❌ Admin panel couldn't save content

**After Fix**:
- ✅ Can save multiple settings per page (heading, description, etc.)
- ✅ Each page can have multiple setting_key values
- ✅ Admin panel works correctly
- ✅ Unique constraint prevents duplicate (page_name, setting_key) pairs

## 🗄️ Database Schema

### Current Constraints
```
✅ page_settings_page_name_setting_key_unique - UNIQUE (page_name, setting_key)
✅ page_settings_pkey - PRIMARY KEY (id)
```

### Example Data Structure
```
page_name: 'about'
├── setting_key: 'page_heading'
│   └── setting_value: 'About Healwell Healthcare'
└── setting_key: 'page_description'
    └── setting_value: 'Founded on the principle...'

page_name: 'service'
├── setting_key: 'page_heading'
│   └── setting_value: 'Our Services'
└── setting_key: 'page_description'
    └── setting_value: 'Comprehensive healthcare staffing...'
```

## 🧪 Testing

The fix has been verified:
1. ✅ Constraint was successfully dropped
2. ✅ New constraint was successfully added
3. ✅ Existing data is preserved
4. ✅ Admin panel can now save multiple settings per page

## 📝 How It Works Now

### Saving Content
```javascript
// Save heading for about page
POST /api/page-settings
{
  "page_name": "about",
  "setting_key": "page_heading",
  "setting_value": "About Healwell Healthcare"
}

// Save description for about page (same page, different key)
POST /api/page-settings
{
  "page_name": "about",
  "setting_key": "page_description",
  "setting_value": "Founded on the principle..."
}
```

### Fetching Content
```javascript
// Get all settings for about page
GET /api/page-settings?page_name=about

// Returns:
[
  {
    "page_name": "about",
    "setting_key": "page_heading",
    "setting_value": "About Healwell Healthcare"
  },
  {
    "page_name": "about",
    "setting_key": "page_description",
    "setting_value": "Founded on the principle..."
  }
]
```

## 🎯 Impact

- ✅ Admin panel now works correctly
- ✅ Can save heading and description for each page
- ✅ No data loss
- ✅ Backward compatible with existing API
- ✅ Production ready

## 📋 Status

✅ **FIXED AND VERIFIED**

The database constraint issue has been resolved. The admin panel can now successfully save SEO content for all pages.


