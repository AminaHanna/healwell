# 🎨 Mission and Vision Section - Visual Design Guide

## Section Layout

### Desktop View (1200px+)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    ✨ OUR MISSION & VISION ✨                      │
│                         What Drives Us                              │
│                                                                     │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐│
│  │                              │  │                              ││
│  │  ◯ (background shape)        │  │  ◯ (background shape)        ││
│  │  🎯 (70px icon)              │  │  👁️ (70px icon)              ││
│  │                              │  │                              ││
│  │  Our Mission                 │  │  Our Vision                  ││
│  │  (26px, 700 weight)          │  │  (26px, 700 weight)          ││
│  │                              │  │                              ││
│  │  To bridge the gap between   │  │  To be the most trusted      ││
│  │  exceptional healthcare...   │  │  healthcare staffing...      ││
│  │                              │  │                              ││
│  └──────────────────────────────┘  └──────────────────────────────┘│
│                                                                     │
│  Decorative circles visible in background                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Tablet View (768-1199px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              ✨ OUR MISSION & VISION ✨                    │
│                   What Drives Us                            │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                                                       │ │
│  │  ◯ (background shape)                                │ │
│  │  🎯 (60px icon)                                      │ │
│  │                                                       │ │
│  │  Our Mission                                          │ │
│  │  (22px, 700 weight)                                  │ │
│  │                                                       │ │
│  │  To bridge the gap between exceptional...            │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                                                       │ │
│  │  ◯ (background shape)                                │ │
│  │  👁️ (60px icon)                                      │ │
│  │                                                       │ │
│  │  Our Vision                                           │ │
│  │  (22px, 700 weight)                                  │ │
│  │                                                       │ │
│  │  To be the most trusted healthcare staffing...       │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  Smaller decorative circles visible                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile View (<768px)

```
┌──────────────────────────────────┐
│                                  │
│  ✨ OUR MISSION & VISION ✨      │
│       What Drives Us              │
│                                  │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │  🎯 (60px icon)            │  │
│  │                            │  │
│  │  Our Mission               │  │
│  │  (22px, 700 weight)        │  │
│  │                            │  │
│  │  To bridge the gap...      │  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │  👁️ (60px icon)            │  │
│  │                            │  │
│  │  Our Vision                │  │
│  │  (22px, 700 weight)        │  │
│  │                            │  │
│  │  To be the most trusted... │  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  No decorative circles           │
│                                  │
└──────────────────────────────────┘
```

---

## Card Design Details

### Card Structure

```
┌─────────────────────────────────────────┐
│  Card Container                         │
│  ┌───────────────────────────────────┐  │
│  │ Card Inner (padding: 50px)        │  │
│  │                                   │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │ Icon Wrapper                │  │  │
│  │  │ ┌───────────────────────┐   │  │  │
│  │  │ │ Background Shape      │   │  │  │
│  │  │ │ ┌─────────────────┐   │   │  │  │
│  │  │ │ │ Icon (70px)     │   │   │  │  │
│  │  │ │ │ 🎯              │   │   │  │  │
│  │  │ │ └─────────────────┘   │   │  │  │
│  │  │ └───────────────────────┘   │  │  │
│  │  └─────────────────────────────┘  │  │
│  │                                   │  │
│  │  Title (26px, 700 weight)         │  │
│  │  Our Mission                      │  │
│  │                                   │  │
│  │  Body Text (16px, 1.8 line-height)│  │
│  │  To bridge the gap between...     │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  Left Border: 4px (6px on hover)        │
│  Border Color: accent on hover          │
│  Shadow: 0 4px 15px (0 20px 40px hover) │
│  Border Radius: 16px                    │
│                                         │
└─────────────────────────────────────────┘
```

---

## Icon Design

### Icon Styling

```
Icon Circle (70px desktop, 60px mobile)
├─ Background: Linear gradient (accent → blue)
├─ Border Radius: 50% (perfect circle)
├─ Shadow: 0 8px 20px rgba(46, 166, 247, 0.3)
├─ Color: White
├─ Font Size: 32px (desktop), 28px (mobile)
└─ Transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1)

Background Shape (behind icon)
├─ Width: 100px (desktop), 80px (mobile)
├─ Height: 100px (desktop), 80px (mobile)
├─ Background: Radial gradient (accent/blue)
├─ Border Radius: 50% (perfect circle)
├─ Opacity: 10-20% (varies on hover)
└─ Scales to 1.1 on hover
```

---

## Color Scheme

### Primary Colors

```
Accent Color: #2ea6f7 (Bright Blue)
├─ Used for: Icons, borders, hover effects
├─ Opacity: 100%, 30%, 15%, 10%, 5%
└─ Gradient: Accent → Blue

Blue Color: #002261 (Dark Blue)
├─ Used for: Icon gradients, accents
├─ Opacity: 100%, 20%, 10%, 5%
└─ Gradient: Accent → Blue

Heading Color: #222 (Dark Gray)
├─ Used for: Titles
├─ Hover: Changes to Accent Color
└─ Weight: 700 (bold)

Body Color: #636363 (Medium Gray)
├─ Used for: Body text
├─ Line Height: 1.8
└─ Font Size: 16px

Border Color: #dddddd (Light Gray)
├─ Used for: Card borders
├─ Opacity: 10% → 30% on hover
└─ Width: 2px
```

---

## Animation Specifications

### Hover Animation Timeline

```
0ms (Start)
├─ Card position: 0
├─ Icon scale: 1
├─ Icon rotation: 0deg
├─ Background shape scale: 1
└─ Title color: heading-color

200ms (Mid-animation)
├─ Card position: -4px
├─ Icon scale: 1.075
├─ Icon rotation: 4deg
├─ Background shape scale: 1.05
└─ Title color: transitioning

400ms (End)
├─ Card position: -8px
├─ Icon scale: 1.15
├─ Icon rotation: 8deg
├─ Background shape scale: 1.1
└─ Title color: accent-color
```

### Easing Curve

```
cubic-bezier(0.4, 0, 0.2, 1)

This creates a smooth, professional motion:
├─ Fast start (0.4)
├─ Smooth middle (0, 0.2)
└─ Smooth end (1)

Visual effect: Smooth acceleration and deceleration
```

---

## Spacing Details

### Desktop Spacing

```
Section Top: 70px
Section Bottom: 80px

Section Heading Bottom: 60px

Card Gap: 50px (horizontal)

Card Padding: 50px (all sides)

Icon Margin Bottom: 30px

Title Margin Bottom: 20px

Icon Size: 70px
Icon Margin Bottom: 30px
```

### Mobile Spacing

```
Section Top: 110px
Section Bottom: 120px

Section Heading Bottom: 40px

Card Gap: 30px (vertical)

Card Padding: 40px 30px

Icon Margin Bottom: 25px

Title Margin Bottom: 15px

Icon Size: 60px
Icon Margin Bottom: 25px
```

---

## Typography Specifications

### Headings

```
Section Title: "What Drives Us"
├─ Font: Poppins
├─ Size: 32px (desktop), 28px (mobile)
├─ Weight: 600
├─ Color: Heading Color
└─ Line Height: 1.3

Card Title: "Our Mission" / "Our Vision"
├─ Font: Poppins
├─ Size: 26px (desktop), 22px (mobile)
├─ Weight: 700 (bold)
├─ Color: Heading Color → Accent on hover
└─ Line Height: 1.3
```

### Body Text

```
Card Description
├─ Font: Rubik
├─ Size: 16px (desktop), 15px (mobile)
├─ Weight: 400 (regular)
├─ Color: Body Color
├─ Line Height: 1.8
└─ Letter Spacing: normal
```

---

## Responsive Breakpoints

```
Desktop: 1200px+
├─ 2-column grid
├─ 70px icons
├─ 26px headings
├─ Decorative circles visible
└─ Full animations

Tablet: 768-1199px
├─ 1-column stacked
├─ 60px icons
├─ 22px headings
├─ Smaller decorative circles
└─ Full animations

Mobile: <768px
├─ 1-column stacked
├─ 60px icons
├─ 22px headings
├─ No decorative circles
└─ Full animations
```

---

## Decorative Elements

### Background Circles

```
Top-Right Circle (Desktop)
├─ Width: 300px
├─ Height: 300px
├─ Position: top -50px, right -100px
├─ Background: Radial gradient (accent)
├─ Opacity: 8%
└─ Border Radius: 50%

Bottom-Left Circle (Desktop)
├─ Width: 350px
├─ Height: 350px
├─ Position: bottom -80px, left -100px
├─ Background: Radial gradient (blue)
├─ Opacity: 5%
└─ Border Radius: 50%

Hidden on Mobile (<768px)
```

---

## Shadow Specifications

```
Card Base Shadow
├─ Offset X: 0
├─ Offset Y: 4px
├─ Blur: 15px
├─ Color: rgba(0, 0, 0, 0.08)
└─ Spread: 0

Card Hover Shadow
├─ Offset X: 0
├─ Offset Y: 20px
├─ Blur: 40px
├─ Color: rgba(46, 166, 247, 0.15)
└─ Spread: 0

Icon Shadow
├─ Offset X: 0
├─ Offset Y: 8px
├─ Blur: 20px
├─ Color: rgba(46, 166, 247, 0.3)
└─ Spread: 0
```

---

## 🎯 Design System Integration

✅ Uses CSS variables for colors
✅ Follows existing design patterns
✅ Responsive breakpoints aligned
✅ Typography consistent
✅ Spacing system consistent
✅ Animation timing consistent
✅ Professional appearance
✅ Accessible design

---

## 📊 Summary

This visual guide provides comprehensive specifications for the enhanced Mission and Vision section, including:

- Layout specifications for all screen sizes
- Card design details
- Icon styling
- Color scheme
- Animation specifications
- Spacing details
- Typography specifications
- Responsive breakpoints
- Decorative elements
- Shadow specifications

All specifications follow the existing design system and maintain professional, modern aesthetics.


