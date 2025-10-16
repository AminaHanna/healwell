# Admin Dashboard - CSS & Design Guide

## 🎨 Color Palette

```
Primary Blue:     #3B82F6 (bg-blue-600)
White:            #FFFFFF (bg-white)
Light Gray:       #F9FAFB (bg-gray-50)
Dark Gray:        #111827 (text-gray-900)
Border Gray:      #E5E7EB (border-gray-200)
```

## 📐 Layout Structure

### Navigation Bar
```
┌─────────────────────────────────────────┐
│  [Logo] Admin Dashboard                 │  ← Blue background (bg-blue-600)
└─────────────────────────────────────────┘
```

### Tab Navigation
```
┌─────────────────────────────────────────┐
│ Dashboard  │  Blogs  │  Services        │  ← White background with blue underline
└─────────────────────────────────────────┘
```

### Dashboard Cards
```
┌─────────────────────────────────────────┐
│ ┃ [Icon] Blog Management                │  ← White card with blue left border
│ ┃ Create and manage blog posts          │
│ ┃ [Manage Blogs →]                      │
└─────────────────────────────────────────┘
```

### Table
```
┌─────────────────────────────────────────┐
│ Title    │ Author  │ Status  │ Actions  │  ← Blue header with white text
├─────────────────────────────────────────┤
│ Blog 1   │ John    │ Draft   │ ✎ 🗑    │  ← White rows with hover effect
│ Blog 2   │ Jane    │ Publish │ ✎ 🗑    │
└─────────────────────────────────────────┘
```

## 🎯 Component Styling

### Navigation Bar
- **Height**: 80px (h-20)
- **Background**: Blue (bg-blue-600)
- **Shadow**: Large (shadow-lg)
- **Logo**: White background, blue icon
- **Text**: White, 3xl, bold

### Tab Buttons
- **Active**: Blue text, blue bottom border (4px)
- **Inactive**: Gray text, transparent border
- **Hover**: Blue text
- **Padding**: py-4 px-2
- **Font**: Semibold, lg

### Dashboard Cards
- **Background**: White (bg-white)
- **Border**: Left blue border (border-l-4 border-blue-600)
- **Rounded**: Extra large (rounded-xl)
- **Shadow**: Large (shadow-lg)
- **Hover**: Larger shadow (hover:shadow-xl)
- **Padding**: 8 units (p-8)

### Buttons
- **Primary**: Blue background, white text
- **Hover**: Darker blue (hover:bg-blue-700)
- **Padding**: px-6 py-3
- **Rounded**: Large (rounded-lg)
- **Font**: Semibold
- **Shadow**: Medium (shadow-md)

### Form Inputs
- **Border**: 2px gray (border-2 border-gray-200)
- **Padding**: px-4 py-2
- **Rounded**: Large (rounded-lg)
- **Focus**: Blue ring (focus:ring-2 focus:ring-blue-500)
- **Focus Border**: Blue (focus:border-blue-500)
- **Transition**: Smooth (transition-colors)

### Tables
- **Background**: White (bg-white)
- **Rounded**: Extra large (rounded-xl)
- **Shadow**: Large (shadow-lg)
- **Header**: Blue background (bg-blue-600)
- **Header Text**: White, semibold
- **Rows**: Hover light gray (hover:bg-gray-50)
- **Borders**: Gray dividers (divide-y divide-gray-200)

## 📱 Responsive Design

### Mobile (< 640px)
- Single column layout
- Full-width cards
- Stacked navigation
- Touch-friendly buttons

### Tablet (640px - 1024px)
- 2-column grid for cards
- Horizontal navigation
- Optimized spacing

### Desktop (> 1024px)
- Full layout
- Max-width container (max-w-7xl)
- Optimal spacing and padding

## 🎨 Typography

### Headings
- **Page Title**: 3xl, bold, dark gray
- **Section Title**: 2xl, bold, dark gray
- **Card Title**: lg, semibold, dark gray
- **Table Header**: sm, semibold, white

### Body Text
- **Regular**: sm, normal, dark gray
- **Muted**: sm, normal, gray-600
- **Labels**: sm, semibold, dark gray

## ✨ Effects

### Shadows
- **Small**: shadow-md
- **Medium**: shadow-lg
- **Large**: shadow-xl
- **Extra Large**: shadow-2xl

### Transitions
- **Color**: transition-colors
- **All**: transition-all
- **Duration**: 200ms (default)

### Hover Effects
- **Buttons**: Darker color + larger shadow
- **Cards**: Larger shadow
- **Rows**: Light gray background

## 🎯 Spacing Guide

```
Padding:
- p-2 = 8px
- p-4 = 16px
- p-6 = 24px
- p-8 = 32px

Margin:
- mb-2 = 8px
- mb-4 = 16px
- mb-6 = 24px
- mb-8 = 32px

Gap:
- gap-2 = 8px
- gap-4 = 16px
- gap-6 = 24px
- gap-8 = 32px
```

## 📝 Usage Examples

### Blue Button
```html
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg">
  Click Me
</button>
```

### White Card
```html
<div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
  Content here
</div>
```

### Blue Table Header
```html
<thead className="bg-blue-600">
  <tr>
    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
      Column
    </th>
  </tr>
</thead>
```

---

**Status**: ✅ COMPLETE
**Color Scheme**: White & Blue
**Framework**: Tailwind CSS
**Ready to Use**: YES ✅

