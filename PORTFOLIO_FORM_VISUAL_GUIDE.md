# Portfolio Form - Visual Guide & Layout

## Form Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    FORM MODAL OVERLAY                       │
│  (Semi-transparent black backdrop - z-index: 1000)          │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ ✅ Create New Portfolio Entry                      ✕  │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │                                                       │  │
│  │  Title *                                            │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ Enter case study title...                       │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  Slug                                               │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ Auto-generated from title (disabled)            │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  Hospital/Client Name *        Location             │  │
│  │  ┌──────────────────────────┐  ┌──────────────────┐ │  │
│  │  │ Enter hospital name...   │  │ Chicago, IL...   │ │  │
│  │  └──────────────────────────┘  └──────────────────┘ │  │
│  │                                                       │  │
│  │  Category              Duration        Staff Placed  │  │
│  │  ┌──────────────────┐  ┌──────────┐  ┌────────────┐ │  │
│  │  │ Hospitals ▼      │  │ 18 mo... │  │ 45 placed..│ │  │
│  │  └──────────────────┘  └──────────┘  └────────────┘ │  │
│  │                                                       │  │
│  │  Description                                        │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ Comprehensive staffing solution for a new 60-  │ │  │
│  │  │ bed ICU expansion, providing specialized       │ │  │
│  │  │ critical care nurses and support staff.        │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  Key Results                                        │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ Enter a key result and click Add                │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │  [Add]                                              │  │
│  │                                                       │  │
│  │  ✓ 100% staffing coverage achieved                 │  │
│  │  ✓ 15% reduction in turnover                       │  │
│  │  ✓ 98% patient satisfaction scores                 │  │
│  │  ✓ Zero safety incidents                           │  │
│  │                                                       │  │
│  │  Testimonial                                        │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ HealWell provided exceptional staffing support │ │  │
│  │  │ during our ICU expansion...                     │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  Testimonial Author        Author Title             │  │
│  │  ┌──────────────────────┐  ┌──────────────────────┐ │  │
│  │  │ Dr. Sarah Johnson    │  │ Chief Nursing Officer│ │  │
│  │  └──────────────────────┘  └──────────────────────┘ │  │
│  │                                                       │  │
│  │  Rating                                             │  │
│  │  ┌──────────────────────────────────────────────────┐ │  │
│  │  │ 5 Stars ▼                                        │ │  │
│  │  └──────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  Featured Image                                     │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │ Choose file                                     │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │                                                 │ │  │
│  │  │  [Image Preview - max 200px]                   │ │  │
│  │  │                                                 │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  Display Order         ☑ Active                     │  │
│  │  ┌──────────────────┐                              │  │
│  │  │ 0                │                              │  │
│  │  └──────────────────┘                              │  │
│  │                                                       │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ [Create Entry]              [Cancel]                │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Color Scheme

### Primary Colors
- **Header Background**: White
- **Header Text**: Primary Blue (#002261)
- **Modal Background**: White
- **Backdrop**: Black with 50% opacity

### Input States
- **Default Border**: Gray (#dddddd)
- **Focus Border**: Accent Blue (#2ea6f7)
- **Focus Shadow**: Blue with 10% opacity
- **Disabled Background**: Light Gray (#f9fafb)

### Key Results
- **Item Background**: Light Gray (#f9fafb)
- **Item Text**: Body Color (#636363)
- **Remove Button**: Danger Red (#ef4444)
- **Remove Hover**: Darker Red

---

## Responsive Breakpoints

### Desktop (> 600px)
```
┌─────────────────────────────────────┐
│ Title                               │
│ [Full width input]                  │
│                                     │
│ Field 1              │ Field 2      │
│ [Input]              │ [Input]      │
└─────────────────────────────────────┘
```

### Mobile (≤ 600px)
```
┌──────────────────┐
│ Title            │
│ [Full width]     │
│                  │
│ Field 1          │
│ [Full width]     │
│                  │
│ Field 2          │
│ [Full width]     │
└──────────────────┘
```

---

## Form Field Styling

### Text Input
```
┌─────────────────────────────────────┐
│ Label                               │
│ ┌─────────────────────────────────┐ │
│ │ Placeholder text...             │ │
│ └─────────────────────────────────┘ │
│ (2px border, 8px border-radius)     │
└─────────────────────────────────────┘

On Focus:
│ ┌─────────────────────────────────┐ │
│ │ Placeholder text...             │ │ ← Blue border
│ └─────────────────────────────────┘ │ ← Blue shadow
```

### Textarea
```
┌─────────────────────────────────────┐
│ Label                               │
│ ┌─────────────────────────────────┐ │
│ │ Line 1                          │ │
│ │ Line 2                          │ │
│ │ Line 3                          │ │
│ │ Line 4                          │ │
│ └─────────────────────────────────┘ │
│ (Min height: 100px, resizable)      │
└─────────────────────────────────────┘
```

### Select Dropdown
```
┌─────────────────────────────────────┐
│ Label                               │
│ ┌─────────────────────────────────┐ │
│ │ Hospitals                    ▼  │ │
│ └─────────────────────────────────┘ │
│ (Custom dropdown arrow)             │
└─────────────────────────────────────┘
```

### File Input
```
┌─────────────────────────────────────┐
│ Label                               │
│ ┌─────────────────────────────────┐ │
│ │ Choose file                     │ │
│ └─────────────────────────────────┘ │
│ (Same styling as text input)        │
└─────────────────────────────────────┘
```

---

## Key Results Section

### Add Key Result
```
┌─────────────────────────────────────┐
│ Key Results                         │
│ ┌──────────────────────────┐ ┌────┐ │
│ │ Enter a key result...    │ │Add │ │
│ └──────────────────────────┘ └────┘ │
│ (Flex layout, input flex: 1)        │
└─────────────────────────────────────┘
```

### Result Items
```
┌─────────────────────────────────────┐
│ ✓ 100% staffing coverage achieved ✕ │
│ ✓ 15% reduction in turnover       ✕ │
│ ✓ 98% patient satisfaction scores ✕ │
│ ✓ Zero safety incidents           ✕ │
│                                     │
│ (Gray background, rounded, flex)    │
└─────────────────────────────────────┘
```

---

## Image Preview

### Before Upload
```
┌─────────────────────────────────────┐
│ Featured Image                      │
│ ┌─────────────────────────────────┐ │
│ │ Choose file                     │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### After Upload
```
┌─────────────────────────────────────┐
│ Featured Image                      │
│ ┌─────────────────────────────────┐ │
│ │ Choose file                     │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │     [Image Preview]             │ │
│ │     (Max 200px width)           │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│ (Rounded corners, responsive)       │
└─────────────────────────────────────┘
```

---

## Action Buttons

### Button Layout
```
┌─────────────────────────────────────┐
│ ┌──────────────┐  ┌──────────────┐  │
│ │ Create Entry │  │    Cancel    │  │
│ └──────────────┘  └──────────────┘  │
│ (Flex layout, equal width)          │
└─────────────────────────────────────┘
```

### Button Styling
- **Background**: Primary Blue (#002261)
- **Text**: White
- **Padding**: 12px 20px
- **Border Radius**: 8px
- **Hover**: Darker blue
- **Transition**: 0.3s ease

---

## Spacing Reference

| Element | Spacing |
|---------|---------|
| Form Padding | 25px |
| Form Group Margin | 20px |
| Form Row Gap | 20px |
| Label Margin Bottom | 8px |
| Input Padding | 12px 15px |
| Key Result Gap | 10px |
| Button Gap | 15px |
| Image Margin Top | 15px |

All styling is complete and verified! ✅

