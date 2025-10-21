# 📖 Franchising Page - Code Reference

## 🔍 File Locations

### Main Component
**File**: `src/app/(innerpage)/franchising/page.jsx`
**Size**: ~300 lines
**Type**: Client component (`'use client'`)

### Styling
**File**: `src/app/sass/style.scss`
**Lines**: 226-643 (418 lines added)
**Type**: SCSS

### Navigation
**File**: `src/app/Components/Header/Header.jsx`
**Line**: 75
**Change**: Added franchising link

---

## 📝 Component Structure

### Imports
```javascript
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import SectionHeading from '@/app/Components/SectionHeading';
import Button from '@/app/Components/Buttons';
import React from 'react';
import { FaGraduationCap, FaTrophy, FaChartLine, ... } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
```

### Page Structure
```javascript
export default function Page() {
  return (
    <div>
      {/* Page Heading Section */}
      <Section className="cs_page_heading cs_bg_filed cs_center">
        <PageHeading data={headingData} />
      </Section>

      {/* Hero Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Hero content */}
      </Section>

      {/* Why Franchise Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Feature cards */}
      </Section>

      {/* Investment Overview Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Investment details */}
      </Section>

      {/* Support System Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Support cards */}
      </Section>

      {/* Available Markets Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Market cards */}
      </Section>

      {/* Application Process Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Process steps */}
      </Section>

      {/* CTA Section */}
      <Section topSpaceLg="70" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        {/* Call to action */}
      </Section>
    </div>
  );
}
```

---

## 🎨 CSS Classes

### Main Containers
```scss
.cs_franchising_hero
.cs_franchising_cards
.cs_investment_overview
.cs_investment_grid
.cs_requirements
.cs_support_cards
.cs_markets_grid
.cs_market_card
.cs_process_timeline
.cs_franchising_cta
```

### Responsive Grids
```scss
/* Desktop: 4 columns */
grid-template-columns: repeat(4, 1fr);

/* Tablet: 2 columns */
@media (max-width: 1199px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile: 1 column */
@media (max-width: 767px) {
  grid-template-columns: 1fr;
}
```

### Hover Effects
```scss
&:hover {
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(46, 166, 247, 0.15);
  transform: translateY(-5px);
}
```

---

## 🔧 Key Functions

### Market Info Handler
```javascript
const handleMarketInfo = (region) => {
  window.location.href = `/contact?region=${region}`;
};
```

### Button Component Usage
```javascript
<Button
  btnText="Request Market Info"
  variant="cs_btn cs_style_1 cs_color_1"
  btnUrl="/contact?region=Southeast"
/>
```

---

## 📊 Data Structure

### Heading Data
```javascript
const headingData = {
  title: 'Franchising',
};
```

### Section Heading Usage
```javascript
<SectionHeading
  SectionSubtitle="FRANCHISE BENEFITS"
  SectionTitle="Why Franchise with Healwell?"
  SectionDescription="Leverage our proven business model..."
  variant="text-center"
/>
```

---

## 🎯 Card Components

### Feature Card
```jsx
<div className="cs_franchising_card">
  <div className="card_icon">
    <FaChartLine />
  </div>
  <h3 className="cs_primary_color">Proven Growth Model</h3>
  <p>Our franchisees see average revenue growth...</p>
</div>
```

### Market Card
```jsx
<div className="cs_market_card">
  <h3 className="cs_primary_color">Southeast Region</h3>
  <div className="market_info">
    <p><strong>Available Markets:</strong> ...</p>
    <p><strong>Population:</strong> 2.5M+ Combined</p>
    <p><strong>Healthcare Facilities:</strong> 150+</p>
  </div>
  <Button
    btnText="Request Market Info"
    variant="cs_btn cs_style_1 cs_color_1"
    btnUrl="/contact?region=Southeast"
  />
</div>
```

### Process Step
```jsx
<div className="cs_process_step">
  <div className="step_number">01</div>
  <h3 className="cs_primary_color">Initial Inquiry</h3>
  <p>Submit your franchise inquiry...</p>
</div>
```

---

## 🎨 Styling Patterns

### Card Styling
```scss
.cs_franchising_card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 40px 30px;
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 10px 30px rgba(46, 166, 247, 0.15);
    transform: translateY(-5px);
  }
}
```

### Icon Styling
```scss
.card_icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--blue-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: var(--white);
}
```

### Grid Layout
```scss
.cs_franchising_cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔗 Navigation Integration

### Header Menu Update
**File**: `src/app/Components/Header/Header.jsx`
**Line**: 75

```javascript
navItems: [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/service' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Franchising', href: '/franchising' },  // NEW
  { label: 'Contact', href: '/contact' },
],
```

---

## 📱 Responsive Breakpoints

### Desktop (1200px+)
- 4-column grids
- 48px headings
- 50px spacing
- Full hover effects

### Tablet (768-1199px)
- 2-column grids
- 42px headings
- 40px spacing
- Touch-friendly

### Mobile (<768px)
- 1-column stacked
- 32px headings
- 30px spacing
- Optimized buttons

---

## 🎯 CSS Variables Used

```scss
--white: #fff
--black: #000
--heading-color: #222
--body-color: #636363
--accent-color: #2ea6f7
--blue-color: #002261
--gray-color: #e8edf0
--border-color: #dddddd
--heading-font: 'Poppins', sans-serif
--body-font: 'Rubik', sans-serif
```

---

## 🔄 Component Reusability

### Section Component
```jsx
<Section
  topSpaceLg="70"
  topSpaceMd="110"
  bottomSpaceLg="80"
  bottomSpaceMd="120"
>
  {children}
</Section>
```

### Button Component
```jsx
<Button
  btnText="Text"
  variant="cs_btn cs_style_1 cs_color_1"
  btnUrl="/path"
/>
```

### SectionHeading Component
```jsx
<SectionHeading
  SectionSubtitle="Subtitle"
  SectionTitle="Title"
  SectionDescription="Description"
  variant="text-center"
/>
```

---

## 📊 Build Output

```
Route: /franchising
Size: 4.49 kB
First Load JS: 104 kB
Status: ○ (Static) prerendered as static content
```

---

## ✅ Code Quality

- ✅ No build errors
- ✅ No TypeScript errors
- ✅ No ESLint warnings (related to franchising)
- ✅ Proper semantic HTML
- ✅ Accessible components
- ✅ Mobile-first responsive design
- ✅ Performance optimized

---

## 🚀 Deployment Ready

The franchising page is production-ready with:
- ✅ Complete implementation
- ✅ Responsive design
- ✅ Professional styling
- ✅ Zero build errors
- ✅ Optimized performance
- ✅ SEO friendly

Ready to deploy! 🎉

