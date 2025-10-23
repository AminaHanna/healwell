# SEO Content Management - Code Reference

## 🔧 Component Code

### PageSEOContent Component
```jsx
'use client';

import { useEffect, useState } from 'react';

const PageSEOContent = ({ pageName }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSEOContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/page-settings?page_name=${pageName}`);
        const data = await response.json();

        if (data && Array.isArray(data)) {
          const contentMap = {};
          data.forEach((setting) => {
            if (setting.setting_key === 'page_heading') {
              contentMap.heading = setting.setting_value;
            } else if (setting.setting_key === 'page_description') {
              contentMap.description = setting.setting_value;
            }
          });
          setContent(contentMap);
        }
      } catch (error) {
        console.error('Error fetching SEO content:', error);
      } finally {
        setLoading(false);
      }
    };

    if (pageName) {
      fetchSEOContent();
    }
  }, [pageName]);

  if (loading || !content || (!content.heading && !content.description)) {
    return null;
  }

  return (
    <section className="cs_page_seo_content">
      <div className="container">
        {content.heading && (
          <h1 className="cs_seo_heading">{content.heading}</h1>
        )}
        {content.description && (
          <p className="cs_seo_description">{content.description}</p>
        )}
      </div>
    </section>
  );
};

export default PageSEOContent;
```

---

## 🎨 SCSS Styling

### Page SEO Content Styles
```scss
.cs_page_seo_content {
  width: 100%;
  padding: 40px 0;
  background-color: #ffffff;

  @media (max-width: 1199px) {
    padding: 35px 0;
  }

  @media (max-width: 767px) {
    padding: 25px 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .cs_seo_heading {
    font-size: 32px;
    font-weight: 700;
    color: var(--heading-color, #222);
    margin: 0;
    padding: 0;
    font-family: var(--heading-font, 'Poppins', sans-serif);
    line-height: 1.3;
  }

  .cs_seo_description {
    font-size: 16px;
    color: var(--body-color, #636363);
    margin: 0;
    padding: 0;
    font-family: var(--body-font, 'Rubik', sans-serif);
    line-height: 1.7;
    max-width: 800px;
  }
}
```

---

## 📝 Usage in Pages

### Example: About Page
```jsx
import PageSEOContent from '@/app/Components/PageSEOContent';

const page = () => {
  return (
    <div className='about-page-area'>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* SEO Content Section */}
      <PageSEOContent pageName="about" />

      {/* Rest of page content */}
    </div>
  );
};
```

---

## 🔌 API Usage

### Fetch SEO Content
```javascript
// Get content for a specific page
const response = await fetch('/api/page-settings?page_name=about');
const data = await response.json();

// Response format:
[
  {
    id: 'uuid',
    page_name: 'about',
    setting_key: 'page_heading',
    setting_value: 'About Healwell Healthcare',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'uuid',
    page_name: 'about',
    setting_key: 'page_description',
    setting_value: 'Founded on the principle...',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]
```

### Save SEO Content
```javascript
// Save heading
await fetch('/api/page-settings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    page_name: 'about',
    setting_key: 'page_heading',
    setting_value: 'About Healwell Healthcare'
  })
});

// Save description
await fetch('/api/page-settings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    page_name: 'about',
    setting_key: 'page_description',
    setting_value: 'Founded on the principle...'
  })
});
```

---

## 🗄️ Database Query

### Get All Settings for a Page
```sql
SELECT * FROM page_settings WHERE page_name = 'about';
```

### Get Specific Setting
```sql
SELECT * FROM page_settings 
WHERE page_name = 'about' 
AND setting_key = 'page_heading';
```

### Insert New Setting
```sql
INSERT INTO page_settings (page_name, setting_key, setting_value)
VALUES ('about', 'page_heading', 'About Healwell Healthcare');
```

### Update Setting
```sql
UPDATE page_settings 
SET setting_value = 'New Heading', updated_at = NOW()
WHERE page_name = 'about' 
AND setting_key = 'page_heading';
```

---

## 🧪 Testing

### Test Component Rendering
```javascript
// In browser console
document.querySelector('.cs_page_seo_content')
// Should return the section element if content exists
```

### Test API Endpoint
```javascript
// In browser console
fetch('/api/page-settings?page_name=about')
  .then(r => r.json())
  .then(console.log)
```

### Test Database
```sql
-- In Supabase SQL editor
SELECT * FROM page_settings WHERE page_name = 'about';
```

---

## 📋 Integration Checklist

- ✅ Import PageSEOContent component
- ✅ Add component below PageHeading
- ✅ Pass correct pageName prop
- ✅ Add content via admin panel
- ✅ Verify content displays
- ✅ Test on mobile/tablet/desktop
- ✅ Check SEO in browser DevTools


