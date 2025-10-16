# 🏗️ Admin Dashboard Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client                          │
│                  (http://localhost:3000/admin)               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js App Router                         │
│                  /admin/page.jsx                             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              AdminDashboard Component                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Navigation Tabs (Dashboard, Blogs, Services)        │   │
│  └──────────────────────────────────────────────────────┘   │
│                         │                                    │
│         ┌───────────────┼───────────────┐                   │
│         ▼               ▼               ▼                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │ Dashboard  │  │   Blogs    │  │ Services   │            │
│  │ Overview   │  │  Manager   │  │  Manager   │            │
│  └────────────┘  └────────────┘  └────────────┘            │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Component Hierarchy                             │
│                                                              │
│  BlogManager          ServiceManager      DashboardOverview │
│      │                     │                     │          │
│      ├─ BlogForm           ├─ ServiceForm        │          │
│      └─ BlogList           └─ ServiceList        │          │
│                                                  │          │
│  (Forms & Lists)          (Forms & Lists)   (Statistics)   │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Supabase Client (supabase.js)                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  - Authentication                                    │   │
│  │  - Database queries                                 │   │
│  │  - Real-time subscriptions                          │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Supabase Backend                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  PostgreSQL Database                                │   │
│  │  ┌────────────────┐      ┌────────────────┐        │   │
│  │  │  Blogs Table   │      │ Services Table │        │   │
│  │  │  - id          │      │ - id           │        │   │
│  │  │  - title       │      │ - title        │        │   │
│  │  │  - slug        │      │ - slug         │        │   │
│  │  │  - content     │      │ - description  │        │   │
│  │  │  - author      │      │ - price        │        │   │
│  │  │  - published   │      │ - active       │        │   │
│  │  │  - ...         │      │ - ...          │        │   │
│  │  └────────────────┘      └────────────────┘        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Data Flow

### Blog Management Flow

```
BlogManager (State: blogs, loading, showForm, editingBlog)
    │
    ├─ fetchBlogs() ──────────────────┐
    │                                  │
    │                    ┌─────────────▼──────────┐
    │                    │  Supabase Query        │
    │                    │  SELECT * FROM blogs   │
    │                    └─────────────┬──────────┘
    │                                  │
    │  ◄─────────────────────────────┘
    │
    ├─ BlogForm (Create/Edit)
    │   │
    │   └─ onSave() ──────────────────┐
    │                                  │
    │                    ┌─────────────▼──────────┐
    │                    │  Supabase Insert/      │
    │                    │  Update Operation      │
    │                    └─────────────┬──────────┘
    │                                  │
    │  ◄─────────────────────────────┘
    │
    └─ BlogList (Display)
        │
        └─ onDelete() ───────────────┐
                                     │
                        ┌────────────▼──────────┐
                        │  Supabase Delete      │
                        │  Operation            │
                        └────────────┬──────────┘
                                     │
                        ◄────────────┘
```

### Service Management Flow

```
ServiceManager (State: services, loading, showForm, editingService)
    │
    ├─ fetchServices() ────────────────┐
    │                                   │
    │                     ┌─────────────▼──────────┐
    │                     │  Supabase Query        │
    │                     │  SELECT * FROM services│
    │                     └─────────────┬──────────┘
    │                                   │
    │  ◄──────────────────────────────┘
    │
    ├─ ServiceForm (Create/Edit)
    │   │
    │   └─ onSave() ────────────────┐
    │                                │
    │                 ┌──────────────▼──────────┐
    │                 │  Supabase Insert/       │
    │                 │  Update Operation       │
    │                 └──────────────┬──────────┘
    │                                │
    │  ◄───────────────────────────┘
    │
    └─ ServiceList (Display)
        │
        └─ onDelete() ──────────────┐
                                    │
                       ┌────────────▼──────────┐
                       │  Supabase Delete      │
                       │  Operation            │
                       └────────────┬──────────┘
                                    │
                       ◄────────────┘
```

---

## State Management

### AdminDashboard State
```javascript
const [activeTab, setActiveTab] = useState('dashboard');
// Values: 'dashboard', 'blogs', 'services'
```

### BlogManager State
```javascript
const [blogs, setBlogs] = useState([]);
const [loading, setLoading] = useState(true);
const [showForm, setShowForm] = useState(false);
const [editingBlog, setEditingBlog] = useState(null);
```

### ServiceManager State
```javascript
const [services, setServices] = useState([]);
const [loading, setLoading] = useState(true);
const [showForm, setShowForm] = useState(false);
const [editingService, setEditingService] = useState(null);
```

### BlogForm State
```javascript
const [formData, setFormData] = useState({
  title: '',
  slug: '',
  content: '',
  excerpt: '',
  author: '',
  featured_image: '',
  published: false,
});
```

### ServiceForm State
```javascript
const [formData, setFormData] = useState({
  title: '',
  slug: '',
  description: '',
  short_description: '',
  icon: '',
  featured_image: '',
  price: '',
  active: true,
  display_order: 0,
});
```

---

## Database Operations

### Blog Operations

#### Create Blog
```javascript
const { error } = await supabase
  .from('blogs')
  .insert([blogData]);
```

#### Read Blogs
```javascript
const { data, error } = await supabase
  .from('blogs')
  .select('*')
  .order('created_at', { ascending: false });
```

#### Update Blog
```javascript
const { error } = await supabase
  .from('blogs')
  .update(blogData)
  .eq('id', blogId);
```

#### Delete Blog
```javascript
const { error } = await supabase
  .from('blogs')
  .delete()
  .eq('id', blogId);
```

### Service Operations

#### Create Service
```javascript
const { error } = await supabase
  .from('services')
  .insert([serviceData]);
```

#### Read Services
```javascript
const { data, error } = await supabase
  .from('services')
  .select('*')
  .order('display_order', { ascending: true });
```

#### Update Service
```javascript
const { error } = await supabase
  .from('services')
  .update(serviceData)
  .eq('id', serviceId);
```

#### Delete Service
```javascript
const { error } = await supabase
  .from('services')
  .delete()
  .eq('id', serviceId);
```

---

## Styling Architecture

### SCSS Structure
```
admin.scss
├── Color Variables
│   ├── Primary Blue (#002261)
│   ├── Accent Blue (#2ea6f7)
│   ├── White (#ffffff)
│   └── Other colors
├── Font Variables
│   ├── Heading Font (Poppins)
│   └── Body Font (Rubik)
├── Mixins
│   ├── flex-center
│   ├── flex-between
│   ├── box-shadow
│   └── transition
├── Components
│   ├── Admin Layout
│   ├── Admin Header
│   ├── Admin Navigation
│   ├── Dashboard Overview
│   ├── Forms
│   ├── Tables
│   ├── Buttons
│   └── Responsive Design
└── Media Queries
    ├── Desktop (1200px+)
    ├── Tablet (768px-1199px)
    └── Mobile (<768px)
```

---

## File Dependencies

```
page.jsx
  └─ AdminDashboard.jsx
      ├─ DashboardOverview.jsx
      │   └─ supabase.js
      ├─ BlogManager.jsx
      │   ├─ BlogForm.jsx
      │   ├─ BlogList.jsx
      │   └─ supabase.js
      └─ ServiceManager.jsx
          ├─ ServiceForm.jsx
          ├─ ServiceList.jsx
          └─ supabase.js

admin.scss
  └─ (Imported in layout.jsx)

supabase.js
  └─ (Imported in all manager components)
```

---

## Error Handling Flow

```
User Action
    │
    ▼
Try Block
    │
    ├─ Success ──────────────────┐
    │                            │
    │                    ┌───────▼────────┐
    │                    │ Update State   │
    │                    │ Show Success   │
    │                    │ Message        │
    │                    └────────────────┘
    │
    └─ Error ───────────────────┐
                                │
                        ┌───────▼────────┐
                        │ Log Error      │
                        │ Show Error     │
                        │ Message        │
                        │ Keep State     │
                        └────────────────┘
```

---

## Performance Optimizations

1. **Lazy Loading**: Components load on demand
2. **Efficient Queries**: Only fetch necessary data
3. **Indexes**: Database indexes for fast queries
4. **Memoization**: Prevent unnecessary re-renders
5. **CSS Minification**: Optimized stylesheet
6. **Error Boundaries**: Graceful error handling

---

## Security Architecture

```
┌─────────────────────────────────────────┐
│  Client-Side Validation                 │
│  - Required fields check                │
│  - Form validation                      │
│  - Confirmation dialogs                 │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  Supabase Client                        │
│  - Environment variables                │
│  - Secure credentials                   │
└────────────────┬────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  Supabase Backend                       │
│  - Row Level Security (RLS)             │
│  - Database constraints                 │
│  - Authentication                       │
└─────────────────────────────────────────┘
```

---

## Deployment Architecture

```
Development
    │
    ├─ npm run dev
    └─ http://localhost:3000/admin

Production
    │
    ├─ npm run build
    ├─ npm run start
    └─ https://yourdomain.com/admin
```

---

**This architecture ensures scalability, maintainability, and security.**

