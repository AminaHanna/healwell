# 🏢 Careers Database Setup

## Create Careers Table in Supabase

Go to your Supabase dashboard (https://app.supabase.com) and run this SQL query:

```sql
CREATE TABLE careers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type TEXT DEFAULT 'Full-time',
  experience_level TEXT DEFAULT 'Mid-level',
  salary_range TEXT,
  description TEXT NOT NULL,
  requirements TEXT,
  benefits TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Steps to Create Table

1. Go to https://app.supabase.com
2. Select your project
3. Click on "SQL Editor" in the left sidebar
4. Click "New Query"
5. Copy and paste the SQL above
6. Click "Run"
7. You should see "Success" message

## Table Fields

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique identifier |
| title | TEXT | Job title (e.g., "Senior Doctor") |
| slug | TEXT | URL-friendly slug (auto-generated) |
| department | TEXT | Department (e.g., "Cardiology") |
| location | TEXT | Job location (e.g., "New York, NY") |
| job_type | TEXT | Full-time, Part-time, Contract, Temporary |
| experience_level | TEXT | Entry-level, Mid-level, Senior, Executive |
| salary_range | TEXT | Salary range (e.g., "$80,000 - $120,000") |
| description | TEXT | Full job description (HTML) |
| requirements | TEXT | Job requirements (HTML) |
| benefits | TEXT | Job benefits (HTML) |
| active | BOOLEAN | Whether job is active/visible |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

## After Creating Table

1. Go to Admin Dashboard: `http://localhost:3000/admin`
2. Click "Careers" tab
3. Click "Create New Career"
4. Fill in the form
5. Click "Create Career"

## View Career Postings

- Careers List: `http://localhost:3000/careers`
- Career Details: `http://localhost:3000/careers/[slug]`

## Example Career Data

```json
{
  "title": "Senior Cardiologist",
  "slug": "senior-cardiologist",
  "department": "Cardiology",
  "location": "New York, NY",
  "job_type": "Full-time",
  "experience_level": "Senior",
  "salary_range": "$150,000 - $200,000",
  "description": "<h2>About the Role</h2><p>We are looking for an experienced cardiologist...</p>",
  "requirements": "<ul><li>MD or DO degree</li><li>Board certification in Cardiology</li></ul>",
  "benefits": "<ul><li>Competitive salary</li><li>Health insurance</li><li>401k matching</li></ul>",
  "active": true
}
```

## Troubleshooting

### Table not created
- Check if you're logged into Supabase
- Verify the SQL syntax is correct
- Check for any error messages

### Can't see careers in admin
- Verify the table was created successfully
- Check browser console for errors
- Restart the dev server

### Careers not showing on website
- Make sure `active` is set to `true`
- Check if the careers page exists at `/careers`
- Verify the slug is correct

