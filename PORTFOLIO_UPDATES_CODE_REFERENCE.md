# Portfolio Updates - Code Reference

## File 1: PortfolioForm.jsx - Category Dropdown

### Location
`src/app/admin/components/PortfolioForm.jsx` (Lines 180-189)

### Code
```jsx
<div className="form-row">
  <div className="form-group">
    <label className="cs_primary_color">Category</label>
    <select name="category" value={formData.category} onChange={handleChange}>
      <option>Hospitals</option>
      <option>Long-term Care</option>
      <option>Emergency Response</option>
      <option>Specialty Care</option>
    </select>
  </div>

  <div className="form-group">
    <label className="cs_primary_color">Duration</label>
    <input
      type="text"
      name="duration"
      value={formData.duration}
      onChange={handleChange}
      placeholder="e.g., 18 months"
    />
  </div>
</div>
```

### Key Points
- ✅ Four category options
- ✅ Exact values for filtering
- ✅ Default value: "Hospitals"
- ✅ Integrated with form state

---

## File 2: portfolio/page.jsx - Complete Implementation

### Location
`src/app/(innerpage)/portfolio/page.jsx` (Lines 1-153)

### Part 1: Category Constants
```jsx
const CATEGORIES = [
  { id: 'all', label: 'All Projects', value: null },
  { id: 'hospitals', label: 'Hospitals', value: 'Hospitals' },
  { id: 'longterm', label: 'Long-term Care', value: 'Long-term Care' },
  { id: 'emergency', label: 'Emergency Response', value: 'Emergency Response' },
  { id: 'specialty', label: 'Specialty Care', value: 'Specialty Care' },
];
```

### Part 2: State Management
```jsx
const [caseStudies, setCaseStudies] = useState([]);
const [loading, setLoading] = useState(true);
const [activeTab, setActiveTab] = useState('all');
```

### Part 3: Filtering Logic
```jsx
const getFilteredCaseStudies = () => {
  const activeCategory = CATEGORIES.find((cat) => cat.id === activeTab);
  if (!activeCategory || activeCategory.value === null) {
    return caseStudies;
  }
  return caseStudies.filter((study) => study.category === activeCategory.value);
};

const filteredCaseStudies = getFilteredCaseStudies();
```

### Part 4: Tab Navigation UI
```jsx
<div className="cs_portfolio_tabs">
  <ul className="cs_tab_links cs_style_3 cs_mp_0">
    {CATEGORIES.map((category) => (
      <li
        key={category.id}
        className={activeTab === category.id ? 'active' : ''}
        onClick={() => setActiveTab(category.id)}
      >
        <a href={`#${category.id}`}>{category.label}</a>
      </li>
    ))}
  </ul>
</div>
```

### Part 5: Content Display
```jsx
{filteredCaseStudies.length > 0 ? (
  <HospitalCaseStudySection data={caseStudiesSectionData} />
) : (
  <div className="text-center">
    <p>No case studies found in this category.</p>
  </div>
)}
```

---

## CSS Classes Used

### Tab Styling
```scss
.cs_tab_links.cs_style_3 {
  display: flex;
  flex-wrap: wrap;
  font-size: 17px;
  font-weight: 500;
  gap: 10px 10px;
  margin-top: 25px;
  color: var(--heading-color);
  
  li {
    &.active {
      a {
        color: #fff;
        background-color: var(--accent-color);
      }
    }
    a {
      padding: 4px 12px;
    }
  }
}
```

### Spacing
```scss
.cs_height_50 {
  height: 50px;
}

.cs_height_lg_50 {
  @media (max-width: 991px) {
    height: 50px;
  }
}
```

---

## Data Structure

### Category Object
```javascript
{
  id: 'hospitals',           // Unique identifier
  label: 'Hospitals',        // Display text
  value: 'Hospitals'         // Database filter value
}
```

### Case Study Object
```javascript
{
  id: 1,
  featuredImage: 'url',
  category: 'Hospitals',     // Matches category value
  title: 'Case Study Title',
  hospitalName: 'Hospital Name',
  location: 'City, State',
  duration: '18 months',
  staffPlaced: '45',
  description: 'Description',
  keyResults: ['Result 1', 'Result 2'],
  testimonial: 'Testimonial text',
  testimonialAuthor: 'Author Name',
  testimonialTitle: 'Title',
  rating: 5,
  caseStudyLink: '/portfolio/slug'
}
```

---

## Filtering Examples

### Example 1: All Projects
```javascript
activeTab = 'all'
activeCategory.value = null
Result: All case studies returned
```

### Example 2: Hospitals Only
```javascript
activeTab = 'hospitals'
activeCategory.value = 'Hospitals'
Result: Only entries where category === 'Hospitals'
```

### Example 3: Long-term Care Only
```javascript
activeTab = 'longterm'
activeCategory.value = 'Long-term Care'
Result: Only entries where category === 'Long-term Care'
```

---

## State Management Flow

### Initial State
```javascript
{
  caseStudies: [],
  loading: true,
  activeTab: 'all'
}
```

### After Data Load
```javascript
{
  caseStudies: [
    { id: 1, category: 'Hospitals', ... },
    { id: 2, category: 'Long-term Care', ... },
    { id: 3, category: 'Emergency Response', ... },
    { id: 4, category: 'Specialty Care', ... }
  ],
  loading: false,
  activeTab: 'all'
}
```

### After Tab Click
```javascript
{
  caseStudies: [...],
  loading: false,
  activeTab: 'hospitals'  // Changed
}
```

---

## Event Handlers

### Tab Click Handler
```jsx
onClick={() => setActiveTab(category.id)}
```

### Form Change Handler
```jsx
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value,
  });
};
```

---

## Conditional Rendering

### Show Content or Empty State
```jsx
{filteredCaseStudies.length > 0 ? (
  <HospitalCaseStudySection data={caseStudiesSectionData} />
) : (
  <div className="text-center">
    <p>No case studies found in this category.</p>
  </div>
)}
```

### Show Loading State
```jsx
if (loading) {
  return (
    <div>
      <Section>
        <PageHeading data={headingData} />
      </Section>
      <Section>
        <div className="text-center">Loading portfolio...</div>
      </Section>
    </div>
  );
}
```

---

## API Integration

### Fetch Data
```jsx
const { data, error } = await supabase
  .from('portfolio')
  .select('*')
  .eq('active', true)
  .order('display_order', { ascending: true });
```

### Transform Data
```jsx
const transformedData = data.map((item) => ({
  id: item.id,
  featuredImage: item.featured_image,
  category: item.category,
  title: item.title,
  hospitalName: item.hospital_name,
  location: item.location,
  duration: item.duration,
  staffPlaced: item.staff_placed,
  description: item.description,
  keyResults: item.key_results || [],
  testimonial: item.testimonial,
  testimonialAuthor: item.testimonial_author,
  testimonialTitle: item.testimonial_author_title,
  rating: item.rating,
  caseStudyLink: `/portfolio/${item.slug}`,
}));
```

---

## Component Props

### HospitalCaseStudySection Props
```jsx
const caseStudiesSectionData = {
  sectionTitle: 'Healthcare Staffing Solutions',
  sectionSubtitle: 'OUR PORTFOLIO',
  sectionDescription: 'Explore our successful healthcare staffing solutions...',
  caseStudies: filteredCaseStudies,
};

<HospitalCaseStudySection data={caseStudiesSectionData} />
```

---

## Key Imports
```jsx
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React, { useState, useEffect } from 'react';
import HospitalCaseStudySection from '@/app/Components/HospitalCaseStudyCard/HospitalCaseStudySection';
import { supabase } from '@/lib/supabase';
```

---

## Summary

✅ **Category Dropdown**: 4 options with exact values
✅ **Tab Navigation**: 5 tabs with filtering
✅ **Filtering Logic**: Client-side, instant filtering
✅ **State Management**: React hooks (useState, useEffect)
✅ **Data Consistency**: Values match between form and page
✅ **Error Handling**: Empty state message
✅ **Responsive**: Mobile-friendly design

All code is production-ready! 🎉

