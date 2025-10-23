# Team Members Management - Quick Guide

## 🚀 Quick Start

### Access Admin Panel
```
http://localhost:3000/admin
```

### Navigate to Team Members
Click the **👥 Team Members** tab in the admin navigation

---

## 📝 Adding a Team Member

1. Click **+ Add Team Member** button
2. Fill in the form:
   - **Name** (required) - Full name
   - **Position** (required) - Job title
   - **Image URL** - Link to profile image
   - **Bio** - Short description
   - **Social Links** - Optional social media URLs
   - **Display Order** - Number for sorting (1, 2, 3, etc.)
   - **Active** - Checkbox to show/hide member
3. Click **Add Member**

---

## ✏️ Editing a Team Member

1. Find the member in the list
2. Click **✏️ Edit** button
3. Update the form fields
4. Click **Update Member**

---

## 🗑️ Deleting a Team Member

1. Find the member in the list
2. Click **🗑️ Delete** button
3. Confirm deletion

---

## 📊 Team Members List

The list shows:
- **Image** - Profile photo thumbnail
- **Name** - Team member's name
- **Position** - Job title
- **Order** - Display order number
- **Status** - Active/Inactive badge
- **Actions** - Edit and Delete buttons

---

## 🔍 Viewing Changes

After adding/editing team members, visit:
- **Home Page**: `http://localhost:3000/`
- **About Page**: `http://localhost:3000/about`

Team members appear in the carousel in order of display_order.

---

## 💡 Tips

1. **Display Order**: Lower numbers appear first (1, 2, 3...)
2. **Active Status**: Only active members show on pages
3. **Image URLs**: Use full URLs (e.g., `/assets/img/team_1.jpg`)
4. **Social Links**: Leave blank if not available
5. **Bio**: Optional but recommended for better profiles

---

## 🎯 Current Team Members

| Name | Position | Order | Status |
|------|----------|-------|--------|
| Dr. Norma Pedric | Neurologist | 1 | Active |
| Dr. James Lewis | Neurologist | 2 | Active |
| Dr. Sophia Anderson | Neurologist | 3 | Active |
| Dr. Michael Thompson | Neurologist | 4 | Active |
| Dr. David Wilson | Neurologist | 5 | Active |

---

## 🔧 Technical Details

- **Database**: Supabase `team_members` table
- **API**: `/api/team-members`
- **Component**: `TeamSection` (auto-fetches data)
- **Pages**: Home and About pages display team members

---

## ✅ Status

✅ Fully operational
✅ Production ready
✅ All features working


