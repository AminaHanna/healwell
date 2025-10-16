# Tailwind CSS Reference - Admin Dashboard

## 🎨 Color Classes

### Background Colors
```
bg-white          - White background
bg-gray-50        - Light gray background
bg-gray-100       - Lighter gray background
bg-blue-600       - Primary blue background
bg-blue-700       - Darker blue (hover)
```

### Text Colors
```
text-white        - White text
text-gray-600     - Medium gray text
text-gray-700     - Darker gray text
text-gray-800     - Even darker gray text
text-gray-900     - Dark gray text (headings)
text-blue-600     - Blue text
```

### Border Colors
```
border-gray-200   - Light gray border
border-gray-300   - Medium gray border
border-blue-600   - Blue border
```

## 📐 Spacing Classes

### Padding
```
p-2   - 8px padding all sides
p-4   - 16px padding all sides
p-6   - 24px padding all sides
p-8   - 32px padding all sides

px-4  - 16px horizontal padding
py-2  - 8px vertical padding
py-3  - 12px vertical padding
py-4  - 16px vertical padding
```

### Margin
```
mb-2  - 8px margin bottom
mb-4  - 16px margin bottom
mb-6  - 24px margin bottom
mb-8  - 32px margin bottom
```

### Gap
```
gap-2 - 8px gap between items
gap-4 - 16px gap between items
gap-6 - 24px gap between items
gap-8 - 32px gap between items
```

## 🎯 Sizing Classes

### Width
```
w-full      - 100% width
max-w-2xl   - Max width 2xl (672px)
max-w-7xl   - Max width 7xl (1280px)
```

### Height
```
h-16  - 64px height
h-20  - 80px height
```

## 🔲 Border & Radius Classes

### Border Width
```
border      - 1px border
border-2    - 2px border
border-b-4  - 4px bottom border
```

### Border Radius
```
rounded-lg  - Large border radius (8px)
rounded-xl  - Extra large border radius (12px)
```

## 💫 Shadow Classes

### Box Shadows
```
shadow      - Small shadow
shadow-md   - Medium shadow
shadow-lg   - Large shadow
shadow-xl   - Extra large shadow
shadow-2xl  - Extra extra large shadow
```

### Hover Shadows
```
hover:shadow-md   - Medium shadow on hover
hover:shadow-lg   - Large shadow on hover
hover:shadow-xl   - Extra large shadow on hover
```

## 🎨 Typography Classes

### Font Size
```
text-sm   - Small text (14px)
text-lg   - Large text (18px)
text-xl   - Extra large text (20px)
text-2xl  - 2xl text (24px)
text-3xl  - 3xl text (30px)
```

### Font Weight
```
font-medium    - Medium weight (500)
font-semibold  - Semibold weight (600)
font-bold      - Bold weight (700)
```

### Text Transform
```
uppercase     - Uppercase text
tracking-wider - Wider letter spacing
```

## ✨ Interactive Classes

### Hover Effects
```
hover:bg-blue-700      - Darker blue on hover
hover:text-blue-600    - Blue text on hover
hover:shadow-lg        - Larger shadow on hover
```

### Focus Effects
```
focus:ring-2           - 2px focus ring
focus:ring-blue-500    - Blue focus ring
focus:border-blue-500  - Blue focus border
```

### Transitions
```
transition           - Smooth transition
transition-colors   - Color transition
transition-all      - All properties transition
```

## 🎯 Common Component Classes

### Navigation Bar
```html
<nav className="bg-blue-600 shadow-lg">
  <div className="h-20 flex items-center">
    <h1 className="text-3xl font-bold text-white">Title</h1>
  </div>
</nav>
```

### Button
```html
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md hover:shadow-lg">
  Click Me
</button>
```

### Card
```html
<div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
  Content here
</div>
```

### Form Input
```html
<input className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
```

### Table Header
```html
<thead className="bg-blue-600">
  <tr>
    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
      Column
    </th>
  </tr>
</thead>
```

### Tab Navigation
```html
<button className={`py-4 px-2 font-semibold text-lg border-b-4 transition-all ${
  active 
    ? 'text-blue-600 border-blue-600' 
    : 'text-gray-600 border-transparent hover:text-blue-600'
}`}>
  Tab
</button>
```

## 📱 Responsive Classes

### Breakpoints
```
sm  - 640px
md  - 768px
lg  - 1024px
xl  - 1280px
2xl - 1536px
```

### Responsive Grid
```html
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Single column on mobile, 2 columns on tablet+ -->
</div>
```

## 🎨 Color Palette

### Blues
```
bg-blue-100  - Light blue background
bg-blue-600  - Primary blue
bg-blue-700  - Darker blue
text-blue-600 - Blue text
```

### Grays
```
bg-white     - White
bg-gray-50   - Very light gray
bg-gray-100  - Light gray
text-gray-600 - Medium gray text
text-gray-900 - Dark gray text
border-gray-200 - Light gray border
```

## 🎯 Quick Reference

### Most Used Classes
```
bg-blue-600         - Primary blue
bg-white            - White background
text-white          - White text
text-gray-900       - Dark text
px-6 py-3           - Button padding
rounded-lg          - Rounded corners
rounded-xl          - Extra rounded
shadow-lg           - Large shadow
hover:bg-blue-700   - Hover effect
transition-colors   - Smooth transition
font-semibold       - Bold text
text-3xl            - Large heading
border-2            - 2px border
focus:ring-2        - Focus ring
```

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind CSS Spacing](https://tailwindcss.com/docs/customizing-spacing)

---

**Status**: ✅ COMPLETE
**Framework**: Tailwind CSS
**Ready to Use**: YES ✅

