# Medilo Codebase Index

## 📁 Project Structure Overview

```
medilo/
├── src/
│   ├── app/
│   │   ├── admin/                          # Admin Dashboard
│   │   │   ├── page.jsx                    # Admin entry point
│   │   │   ├── AdminDashboard.jsx          # Main dashboard component
│   │   │   └── components/
│   │   │       ├── BlogForm.jsx            # Blog creation/editing form
│   │   │       ├── BlogManager.jsx         # Blog CRUD operations
│   │   │       ├── BlogList.jsx            # Blog listing
│   │   │       ├── ServiceForm.jsx         # Service creation/editing form
│   │   │       ├── ServiceManager.jsx      # Service CRUD operations
│   │   │       ├── ServiceList.jsx         # Service listing
│   │   │       ├── DashboardOverview.jsx   # Statistics dashboard
│   │   │       ├── Sidebar.jsx             # Navigation sidebar
│   │   │       ├── Header.jsx              # Page header
│   │   │       ├── Toast.jsx               # Notifications
│   │   │       ├── ConfirmDialog.jsx       # Confirmation dialogs
│   │   │       └── SkeletonLoader.jsx      # Loading states
│   │   │
│   │   ├── api/
│   │   │   ├── blogs/route.js              # Blog API endpoint
│   │   │   ├── services/route.js           # Service API endpoint
│   │   │   └── careers/route.js            # Career API endpoint
│   │   │
│   │   ├── (innerpage)/
│   │   │   ├── blog/
│   │   │   │   ├── page.jsx                # Blog listing page
│   │   │   │   └── [slug]/page.jsx         # Blog details page (dynamic)
│   │   │   ├── service/
│   │   │   │   ├── page.jsx                # Service listing page
│   │   │   │   └── [slug]/page.jsx         # Service details page (dynamic)
│   │   │   └── careers/
│   │   │       ├── page.jsx                # Careers listing page
│   │   │       └── [slug]/page.jsx         # Career details page (dynamic)
│   │   │
│   │   ├── Components/
│   │   │   ├── BlogsDetailsSide/
│   │   │   │   ├── BlogsLeft.jsx           # Blog content display
│   │   │   │   └── BlogsRight.jsx          # Blog sidebar
│   │   │   ├── Service/
│   │   │   │   ├── index.jsx               # Service listing
│   │   │   │   └── ServiceSection4.jsx     # Service details
│   │   │   ├── AppointmentSection/
│   │   │   │   └── index.jsx               # Appointment booking section
│   │   │   └── ... (other components)
│   │   │
│   │   └── sass/
│   │       └── admin.scss                  # Admin dashboard styles
│   │
│   └── lib/
│       ├── supabase.js                     # Supabase client configuration
│       └── imageUpload.js                  # Image upload utility (NEW)
│
├── scripts/
│   └── setup-storage-buckets.js            # Storage bucket setup script (NEW)
│
├── public/
│   └── assets/                             # Static assets
│
├── .env.local                              # Environment variables
├── package.json                            # Dependencies
├── next.config.js                          # Next.js configuration
└── Documentation files (see below)
```

---

## 🔑 Key Files & Their Purpose

### Admin Dashboard
| File | Purpose |
|------|---------|
| `src/app/admin/page.jsx` | Entry point for admin dashboard |
| `src/app/admin/AdminDashboard.jsx` | Main dashboard component with tabs |
| `src/app/admin/components/BlogForm.jsx` | Form for creating/editing blogs |
| `src/app/admin/components/ServiceForm.jsx` | Form for creating/editing services |
| `src/app/admin/components/BlogManager.jsx` | Blog CRUD operations |
| `src/app/admin/components/ServiceManager.jsx` | Service CRUD operations |

### API Routes
| File | Purpose |
|------|---------|
| `src/app/api/blogs/route.js` | Blog API endpoint (GET) |
| `src/app/api/services/route.js` | Service API endpoint (GET) |
| `src/app/api/careers/route.js` | Career API endpoint (GET) |

### Frontend Pages
| File | Purpose |
|------|---------|
| `src/app/(innerpage)/blog/page.jsx` | Blog listing page |
| `src/app/(innerpage)/blog/[slug]/page.jsx` | Blog details page (dynamic) |
| `src/app/(innerpage)/service/page.jsx` | Service listing page |
| `src/app/(innerpage)/service/[slug]/page.jsx` | Service details page (dynamic) |

### Utilities & Configuration
| File | Purpose |
|------|---------|
| `src/lib/supabase.js` | Supabase client setup |
| `src/lib/imageUpload.js` | Image upload utility (NEW) |
| `scripts/setup-storage-buckets.js` | Storage bucket setup script (NEW) |

---

## 🌐 URL Routes

### Admin Routes
- `/admin` - Admin dashboard (default)
- `/admin?tab=dashboard` - Dashboard overview
- `/admin?tab=blogs` - Blog management
- `/admin?tab=services` - Service management

### Blog Routes
- `/blog` - Blog listing page
- `/blog/[slug]` - Blog details page (dynamic)

### Service Routes
- `/service` - Service listing page
- `/service/[slug]` - Service details page (dynamic)

### Career Routes
- `/careers` - Career listing page
- `/careers/[slug]` - Career details page (dynamic)

---

## 📊 Database Schema

### Blogs Table
```sql
CREATE TABLE blogs (
  id UUID PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image VARCHAR,
  author VARCHAR,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Services Table
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  icon VARCHAR,
  featured_image VARCHAR,
  price VARCHAR,
  active BOOLEAN DEFAULT true,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Careers Table
```sql
CREATE TABLE careers (
  id UUID PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  location VARCHAR,
  job_type VARCHAR,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔧 Technology Stack

- **Framework**: Next.js 14.2.15 (App Router)
- **UI Library**: React 18
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Rich Text Editor**: React Quill
- **Styling**: SCSS
- **Icons**: React Icons
- **UI Components**: React Bootstrap
- **Image Carousel**: React Slick

---

## 📦 Dependencies

```json
{
  "@smastrom/react-rating": "^1.5.0",
  "@supabase/supabase-js": "^2.75.0",
  "bootstrap": "^5.3.3",
  "lucide-react": "^0.545.0",
  "next": "14.2.15",
  "react": "^18",
  "react-bootstrap": "^2.10.5",
  "react-dom": "^18",
  "react-icons": "^5.3.0",
  "react-quill": "^2.0.0",
  "react-slick": "^0.30.2",
  "sass": "^1.79.5",
  "slick-carousel": "^1.8.1"
}
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Create Storage Buckets
```bash
node scripts/setup-storage-buckets.js
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Access Admin Dashboard
```
http://localhost:3000/admin
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `INDEX.md` | Navigation guide for all documentation |
| `CREATE_STORAGE_BUCKETS.md` | How to create storage buckets |
| `QUICK_START_GUIDE.md` | 5-minute setup guide |
| `QUICK_REFERENCE.md` | Quick reference card |
| `README_FIXES.md` | Main overview of fixes |
| `SUPABASE_STORAGE_SETUP.md` | Detailed storage setup |
| `HTML_CONTENT_RENDERING_GUIDE.md` | How HTML rendering works |
| `FIXES_AND_VERIFICATION.md` | Troubleshooting guide |
| `CODE_CHANGES_SUMMARY.md` | Detailed code changes |
| `SESSION_2_SUMMARY.md` | Current session summary |

---

## 🔄 Data Flow

```
Admin Dashboard
    ↓
React Quill Editor (formats content)
    ↓
File Upload (image to Supabase Storage)
    ↓
Database (stores HTML + image URL)
    ↓
API Routes (fetch data)
    ↓
Frontend Pages (display content)
    ↓
User sees formatted content
```

---

## ✨ Key Features

✅ Admin dashboard for content management
✅ Blog creation with rich text editor
✅ Service management
✅ Image upload to Supabase Storage
✅ Dynamic blog and service pages
✅ HTML content rendering
✅ Responsive design
✅ Error handling
✅ Loading states
✅ Confirmation dialogs

---

## 🧪 Testing

### Test Admin Dashboard
1. Go to `/admin`
2. Create a blog post with an image
3. Verify image uploads to Supabase Storage
4. Go to `/blog` to see the blog listing
5. Click on the blog to view details

### Test HTML Content
1. Create blog with formatted content
2. View blog details page
3. Verify HTML renders without showing tags

---

## 🔐 Security

✅ Only authenticated admins can create/edit content
✅ Content stored in secure database
✅ React Quill sanitizes HTML by default
✅ Public buckets allow read-only access
✅ No user-generated content directly rendered

---

## 📞 Support

For issues or questions:
1. Check `QUICK_REFERENCE.md` for quick answers
2. Review `FIXES_AND_VERIFICATION.md` for troubleshooting
3. Check browser console (F12) for error messages
4. Verify Supabase configuration

---

**Last Updated**: 2025-10-16
**Status**: Ready for Production ✅


