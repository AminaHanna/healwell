# 📝 Proven Track Record - Code Reference

## Component Code

### File: `src/app/(innerpage)/portfolio/page.jsx`

#### Section HTML (Lines 140-200)

```jsx
{/* Proven Track Record Section */}
<div className="cs_proven_track_record">
  <div className="track_record_header">
    <h2 className="cs_primary_color">Proven Track Record</h2>
    <p className="cs_secondary_color">
      Our portfolio demonstrates consistent success across diverse healthcare environments
    </p>
  </div>

  <div className="track_record_cards">
    {/* Card 1: Operational Excellence */}
    <div className="track_record_card">
      <div className="card_icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <polyline points="13 2 13 9 20 9"></polyline>
          <path d="M9 15l2 2 4-4"></path>
        </svg>
      </div>
      <h3 className="cs_primary_color">Operational Excellence</h3>
      <ul className="track_record_metrics">
        <li>98% average client satisfaction</li>
        <li>96% shift fill rate</li>
        <li>30% average efficiency improvement</li>
        <li>25% reduction in turnover</li>
      </ul>
    </div>

    {/* Card 2: Quality Outcomes */}
    <div className="track_record_card">
      <div className="card_icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </svg>
      </div>
      <h3 className="cs_primary_color">Quality Outcomes</h3>
      <ul className="track_record_metrics">
        <li>99% professional retention</li>
        <li>95% patient satisfaction scores</li>
        <li>Zero safety incidents</li>
        <li>100% credential compliance</li>
      </ul>
    </div>

    {/* Card 3: Industry Recognition */}
    <div className="track_record_card">
      <div className="card_icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 25 12 19.54 3.73 25 6.82 16.70 0 10.27 8.91 10.26 12 2"></polygon>
        </svg>
      </div>
      <h3 className="cs_primary_color">Industry Recognition</h3>
      <ul className="track_record_metrics">
        <li>15+ industry awards</li>
        <li>Joint Commission partnerships</li>
        <li>Magnet hospital collaborations</li>
        <li>CARF accreditation support</li>
      </ul>
    </div>
  </div>
</div>
```

---

## Styling Code

### File: `src/app/sass/style.scss`

#### Main Container (Lines 192-212)

```scss
.cs_proven_track_record {
  margin-bottom: 60px;

  .track_record_header {
    text-align: center;
    margin-bottom: 50px;

    h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 15px;
      font-family: var(--heading-font);
    }

    p {
      font-size: 16px;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
}
```

#### Grid Layout (Lines 214-228)

```scss
.track_record_cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
```

#### Card Styling (Lines 230-251)

```scss
.track_record_card {
  background-color: var(--white);
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  border-top: 4px solid var(--accent-color);

  @media (max-width: 767px) {
    padding: 30px 20px;
  }

  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);

    .card_icon {
      background-color: var(--blue-color);
      color: var(--white);
    }
  }
}
```

#### Icon Styling (Lines 253-270)

```scss
.card_icon {
  width: 70px;
  height: 70px;
  background-color: #f0f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  transition: all 0.4s ease;
  color: var(--accent-color);
  flex-shrink: 0;

  svg {
    width: 36px;
    height: 36px;
  }
}
```

#### Title Styling (Lines 272-277)

```scss
h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: var(--heading-font);
}
```

#### Metrics List Styling (Lines 279-302)

```scss
.track_record_metrics {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 15px;
    color: var(--body-color);
    margin-bottom: 12px;
    line-height: 1.6;
    font-weight: 500;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '✓ ';
      color: var(--accent-color);
      font-weight: 700;
      margin-right: 8px;
    }
  }
}
```

---

## CSS Variables Used

```scss
--white: #fff;
--heading-color: #222;
--body-color: #636363;
--accent-color: #2ea6f7;
--blue-color: #002261;
--heading-font: 'Poppins', sans-serif;
--body-font: 'Rubik', sans-serif;
```

---

## Responsive Breakpoints

```scss
// Desktop (1200px and above)
grid-template-columns: repeat(3, 1fr);

// Tablet (768px to 1199px)
@media (max-width: 1199px) {
  grid-template-columns: repeat(2, 1fr);
}

// Mobile (below 768px)
@media (max-width: 767px) {
  grid-template-columns: 1fr;
}
```

---

## SVG Icons

### Icon 1: Document with Checkmark
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
  <polyline points="13 2 13 9 20 9"></polyline>
  <path d="M9 15l2 2 4-4"></path>
</svg>
```

### Icon 2: Checkmark Circle
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
```

### Icon 3: Star
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 25 12 19.54 3.73 25 6.82 16.70 0 10.27 8.91 10.26 12 2"></polygon>
</svg>
```

---

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Primary Text | Primary Color | #002261 |
| Secondary Text | Secondary Color | #636363 |
| Accent | Accent Color | #2ea6f7 |
| Icon Background | Light Blue | #f0f7ff |
| Card Background | White | #fff |
| Border | Accent Color | #2ea6f7 |

---

## Spacing Values

| Element | Value |
|---------|-------|
| Section Bottom Margin | 60px |
| Header Bottom Margin | 50px |
| Card Gap (Desktop) | 30px |
| Card Gap (Tablet) | 25px |
| Card Gap (Mobile) | 20px |
| Card Padding | 40px 30px |
| Card Padding (Mobile) | 30px 20px |
| Icon Margin Bottom | 25px |
| Card Title Margin Bottom | 20px |
| Metric Item Margin Bottom | 12px |

---

## Transition Effects

```scss
transition: all 0.4s ease;
```

Applied to:
- Card hover effect
- Icon color change
- Shadow change
- Transform (lift effect)

---

## Summary

This code reference provides all the HTML and CSS needed to understand and customize the Proven Track Record section. All styling uses the existing design system variables for consistency.

