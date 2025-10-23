# Team Members - Code Reference

## 🔧 Component Usage

### TeamSection Component

**Location**: `src/app/Components/TeamSection/index.jsx`

**Usage - Dynamic (Recommended)**:
```jsx
import TeamSection from '@/app/Components/TeamSection';

<TeamSection
  hr={true}
  variant={'cs_pagination cs_style_2'}
/>
```

**Usage - With Provided Data (Backward Compatible)**:
```jsx
<TeamSection
  hr={true}
  variant={'cs_pagination cs_style_2'}
  data={customTeamData}
/>
```

**Props**:
- `data` (optional) - Pre-fetched team data
- `hr` (boolean) - Show horizontal rule
- `variant` (string) - CSS variant class
- `bgColor` (boolean) - Background color variant

---

## 📡 API Endpoints

### GET /api/team-members

**Query Parameters**:
- `active_only` (boolean) - Filter only active members

**Response**:
```json
[
  {
    "id": "uuid",
    "name": "Dr. Name",
    "position": "Position",
    "image_url": "/path/to/image.jpg",
    "bio": "Bio text",
    "social_links": {
      "facebook": "url",
      "twitter": "url",
      "instagram": "url",
      "pinterest": "url"
    },
    "display_order": 1,
    "is_active": true,
    "created_at": "2025-10-23T...",
    "updated_at": "2025-10-23T..."
  }
]
```

### POST /api/team-members

**Request Body**:
```json
{
  "name": "Dr. Name",
  "position": "Position",
  "image_url": "/path/to/image.jpg",
  "bio": "Bio text",
  "social_links": {
    "facebook": "url",
    "twitter": "url",
    "instagram": "url",
    "pinterest": "url"
  },
  "display_order": 1,
  "is_active": true
}
```

### PUT /api/team-members

**Request Body**:
```json
{
  "id": "uuid",
  "name": "Updated Name",
  "position": "Updated Position",
  ...
}
```

### DELETE /api/team-members

**Query Parameters**:
- `id` (string) - Team member UUID

---

## 🎨 Admin Components

### TeamMembersManager

**Location**: `src/app/admin/components/TeamMembersManager.jsx`

**Features**:
- Fetches team members from API
- Manages form/list view state
- Handles CRUD operations
- Error handling

**Key Methods**:
```javascript
fetchMembers()           // Load all members
handleAddMember()        // Create new member
handleEditMember()       // Edit existing member
handleDeleteMember()     // Delete member
handleSaveMember()       // Save form data
```

### TeamMembersForm

**Location**: `src/app/admin/components/TeamMembersForm.jsx`

**Features**:
- Form fields for all member data
- Social links inputs
- Validation
- Loading states

**Form Fields**:
- Name (required)
- Position (required)
- Image URL
- Bio
- Social Links (facebook, twitter, instagram, pinterest)
- Display Order
- Active checkbox

### TeamMembersList

**Location**: `src/app/admin/components/TeamMembersList.jsx`

**Features**:
- Table view of members
- Image thumbnails
- Status badges
- Edit/Delete actions
- Empty state handling

---

## 🗄️ Database Queries

### Fetch All Active Members
```sql
SELECT * FROM team_members 
WHERE is_active = true 
ORDER BY display_order ASC;
```

### Fetch Member by ID
```sql
SELECT * FROM team_members WHERE id = $1;
```

### Create Member
```sql
INSERT INTO team_members 
(name, position, image_url, bio, social_links, display_order, is_active)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;
```

### Update Member
```sql
UPDATE team_members 
SET name = $1, position = $2, ..., updated_at = NOW()
WHERE id = $3
RETURNING *;
```

### Delete Member
```sql
DELETE FROM team_members WHERE id = $1;
```

---

## 🔄 Data Flow

### Adding a Team Member

1. Admin fills form in TeamMembersForm
2. Form validates data
3. POST request to `/api/team-members`
4. API inserts into database
5. TeamMembersManager fetches updated list
6. TeamMembersList re-renders
7. Changes appear on pages

### Displaying on Pages

1. Page loads (home or about)
2. TeamSection component mounts
3. useEffect triggers fetchTeamMembers()
4. GET request to `/api/team-members?active_only=true`
5. Data transformed to component format
6. Carousel renders with team members

---

## 🛠️ Integration Points

### AdminDashboard.jsx
```jsx
import TeamMembersManager from '@/app/admin/components/TeamMembersManager';

// In navigation
<button onClick={() => setActiveTab('team')}>
  👥 Team Members
</button>

// In content
{activeTab === 'team' && <TeamMembersManager />}
```

### Home Page
```jsx
import TeamSection from '@/app/Components/TeamSection';

<TeamSection
  hr={true}
  variant={'cs_pagination cs_style_2'}
/>
```

### About Page
```jsx
import TeamSection from '@/app/Components/TeamSection';

<TeamSection
  hr={true}
  variant={'cs_pagination cs_style_2'}
/>
```

---

## 📦 Dependencies

- `next/image` - Image optimization
- `react` - React hooks (useState, useEffect)
- `supabase-js` - Database client

---

## ⚙️ Configuration

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Database Connection
Uses Supabase client initialized in `lib/supabase.js`

---

## 🐛 Error Handling

### API Errors
- Returns error response with status code
- Admin panel shows error message
- Component falls back to provided data

### Network Errors
- Caught in try/catch blocks
- Logged to console
- User-friendly error messages

### Validation Errors
- Required fields checked
- Form shows validation messages
- Prevents invalid submissions

---

## 📈 Performance

### Database Indexes
- `is_active` - Fast filtering
- `display_order` - Fast sorting

### Query Optimization
- Only fetch active members on pages
- Limit fields if needed
- Use pagination for large lists

### Caching
- Component caches data in state
- Re-fetches on mount
- Manual refresh available


