# 📱 Contact Info Cards - Visual Guide

## 🎨 Desktop Layout (2x2 Grid)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐    │
│  │  📞                          │  │  ✉️                          │    │
│  │  Phone                       │  │  Email                       │    │
│  │  (555) 123-4567             │  │  info@healwellhc.com         │    │
│  │  24/7 Emergency Line        │  │  emergency@healwellhc.com    │    │
│  └──────────────────────────────┘  └──────────────────────────────┘    │
│                                                                           │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐    │
│  │  📍                          │  │  🕐                          │    │
│  │  Address                     │  │  Hours                       │    │
│  │  123 Healthcare Boulevard    │  │  24/7 Emergency Support      │    │
│  │  Medical City, MC 12345      │  │  Mon-Fri 8AM-6PM Office      │    │
│  └──────────────────────────────┘  └──────────────────────────────┘    │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📱 Tablet Layout (2 Columns)

```
┌──────────────────────────────────────────────────────┐
│                                                        │
│  ┌────────────────────────────┐  ┌────────────────┐  │
│  │  📞                        │  │  ✉️            │  │
│  │  Phone                     │  │  Email         │  │
│  │  (555) 123-4567           │  │  info@...      │  │
│  │  24/7 Emergency Line      │  │  emergency@... │  │
│  └────────────────────────────┘  └────────────────┘  │
│                                                        │
│  ┌────────────────────────────┐  ┌────────────────┐  │
│  │  📍                        │  │  🕐            │  │
│  │  Address                   │  │  Hours         │  │
│  │  123 Healthcare Boulevard  │  │  24/7 Support  │  │
│  │  Medical City, MC 12345    │  │  Mon-Fri 8-6   │  │
│  └────────────────────────────┘  └────────────────┘  │
│                                                        │
└──────────────────────────────────────────────────────┘
```

---

## 📱 Mobile Layout (1 Column)

```
┌──────────────────────────────┐
│                              │
│  ┌────────────────────────┐  │
│  │         📞             │  │
│  │       Phone            │  │
│  │  (555) 123-4567        │  │
│  │ 24/7 Emergency Line    │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │         ✉️             │  │
│  │       Email            │  │
│  │  info@healwellhc.com   │  │
│  │ emergency@healwellhc.. │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │         📍             │  │
│  │      Address           │  │
│  │ 123 Healthcare Blvd    │  │
│  │ Medical City, MC 12345 │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │         🕐             │  │
│  │       Hours            │  │
│  │ 24/7 Emergency Support │  │
│  │ Mon-Fri 8AM-6PM Office │  │
│  └────────────────────────┘  │
│                              │
└──────────────────────────────┘
```

---

## 🎨 Card Design Details

### Normal State
```
┌─────────────────────────────────────┐
│  📞  │  Phone                        │
│      │  (555) 123-4567               │
│      │  24/7 Emergency Line          │
└─────────────────────────────────────┘
```

**Styling**:
- Border: 1px solid #ddd
- Background: White
- Shadow: Light (0px 0px 20px rgba(0,0,0,0.05))
- Icon Background: Blue (#002261)

### Hover State
```
┌─────────────────────────────────────┐
│  📞  │  Phone                        │
│      │  (555) 123-4567               │
│      │  24/7 Emergency Line          │
└─────────────────────────────────────┘
```

**Changes on Hover**:
- Border: Changes to Accent Blue (#2ea6f7)
- Shadow: Increases (0px 0px 40px rgba(46,166,247,0.15))
- Card: Lifts up (-5px)
- Icon: Scales up (1.1x) and changes to Accent Blue
- Title: Changes to Accent Blue

---

## 📐 Spacing & Dimensions

### Card Dimensions
| Device | Width | Padding | Gap |
|--------|-------|---------|-----|
| Desktop | 50% | 40px 30px | 25px |
| Tablet | 50% | 30px 25px | 20px |
| Mobile | 100% | 25px 20px | 15px |

### Icon Dimensions
| Device | Size | Font Size |
|--------|------|-----------|
| Desktop | 70x70px | 32px |
| Tablet | 60x60px | 28px |
| Mobile | 65x65px | 30px |

### Typography
| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Title | 22px | 20px | 18px |
| Primary | 16px | 15px | 14px |
| Secondary | 14px | 13px | 12px |

---

## 🎯 Contact Page Layout

```
┌─────────────────────────────────────────────────────┐
│  Page Heading (Contact Us)                          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  SEO Content Section                                │
│  (Heading + Description from Admin Panel)           │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Contact Info Cards (NEW)                           │
│  ┌──────────────┐  ┌──────────────┐                │
│  │ 📞 Phone     │  │ ✉️ Email     │                │
│  └──────────────┘  └──────────────┘                │
│  ┌──────────────┐  ┌──────────────┐                │
│  │ 📍 Address   │  │ 🕐 Hours     │                │
│  └──────────────┘  └──────────────┘                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Contact Form Section                               │
│  (Form + Image)                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Location Map                                       │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Color Scheme

### Primary Colors
- **Blue**: #002261 (Icon background)
- **Accent Blue**: #2ea6f7 (Hover effects)
- **White**: #fff (Card background)

### Secondary Colors
- **Border**: #ddd (Card border)
- **Heading**: #222 (Text)
- **Body**: #636363 (Secondary text)

---

## 🔄 Hover Animation

```
Normal State → Hover State

Card:
  - Border: #ddd → #2ea6f7
  - Shadow: Light → Medium
  - Position: 0 → -5px (up)

Icon:
  - Background: #002261 → #2ea6f7
  - Scale: 1 → 1.1

Title:
  - Color: #222 → #2ea6f7
```

---

## 📱 Responsive Breakpoints

### Desktop (≥1200px)
- 2 columns
- 40px padding
- 25px gap
- 70x70px icons

### Tablet (768px - 1199px)
- 2 columns
- 30px padding
- 20px gap
- 60x60px icons

### Mobile (<768px)
- 1 column
- 25px padding
- 15px gap
- 65x65px icons
- Centered text

---

## ✨ Key Features

✅ **Professional Design**
- Clean, modern card layout
- Consistent with site design
- Professional color scheme

✅ **Responsive**
- Works on all devices
- Proper breakpoints
- Mobile-optimized

✅ **Interactive**
- Smooth hover effects
- Color transitions
- Lift animation

✅ **Accessible**
- Semantic HTML
- Clear information hierarchy
- Readable typography

✅ **Performance**
- Lightweight component
- Optimized CSS
- No external dependencies

---

## 🎊 Summary

The Contact Info Cards provide a professional, responsive way to display contact information on the Contact page. The cards feature:

- 4 contact information cards with icons
- Responsive 2x2 grid on desktop, 1 column on mobile
- Smooth hover effects with color transitions
- Consistent styling with the site design
- Professional appearance and user experience


