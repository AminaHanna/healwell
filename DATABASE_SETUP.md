# 🗄️ Database Setup Guide

## Supabase Configuration

Your Supabase project is already configured in the application. You just need to create the database tables.

### Project Details
- **Project URL**: https://rdqczsmrxuzlouiflchq.supabase.co
- **Environment Variables**: Already set in `.env.local`

## Creating Database Tables

### Step 1: Access Supabase Dashboard
1. Go to https://supabase.com
2. Sign in to your account
3. Select your project: "healwellservice@gmail.com's Project"

### Step 2: Open SQL Editor
1. Click on "SQL Editor" in the left sidebar
2. Click "New Query"

### Step 3: Create Blogs Table

Copy and paste this SQL query:

```sql
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);
```

Click "Run" to execute.

### Step 4: Create Services Table

Copy and paste this SQL query:

```sql
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  short_description TEXT,
  icon TEXT,
  featured_image TEXT,
  price TEXT,
  active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(active);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(display_order);
```

Click "Run" to execute.

## Table Schemas

### Blogs Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| title | TEXT | NOT NULL | Blog post title |
| slug | TEXT | NOT NULL, UNIQUE | URL-friendly slug |
| content | TEXT | NOT NULL | Full blog content |
| excerpt | TEXT | NULLABLE | Short summary |
| featured_image | TEXT | NULLABLE | Cover image URL |
| author | TEXT | NOT NULL | Author name |
| published | BOOLEAN | DEFAULT false | Publication status |
| published_at | TIMESTAMPTZ | NULLABLE | Publication timestamp |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Creation timestamp |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Last update timestamp |

### Services Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| title | TEXT | NOT NULL | Service name |
| slug | TEXT | NOT NULL, UNIQUE | URL-friendly slug |
| description | TEXT | NOT NULL | Full description |
| short_description | TEXT | NULLABLE | Brief summary |
| icon | TEXT | NULLABLE | Emoji or icon URL |
| featured_image | TEXT | NULLABLE | Service image URL |
| price | TEXT | NULLABLE | Service pricing |
| active | BOOLEAN | DEFAULT true | Active status |
| display_order | INTEGER | DEFAULT 0 | Display order |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Creation timestamp |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Last update timestamp |

## Row Level Security (RLS)

### Enable RLS on Tables

```sql
-- Enable RLS on blogs table
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Enable RLS on services table
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
```

### Create RLS Policies

For public read access (published blogs and active services):

```sql
-- Blogs: Allow public read of published blogs
CREATE POLICY "Allow public read published blogs"
ON blogs FOR SELECT
USING (published = true);

-- Services: Allow public read of active services
CREATE POLICY "Allow public read active services"
ON services FOR SELECT
USING (active = true);

-- Admin: Allow all operations (if you add authentication)
-- For now, you can use service role key for admin operations
```

## Verifying Setup

### Check Tables Exist
1. Go to Supabase Dashboard
2. Click "Table Editor" in the left sidebar
3. You should see "blogs" and "services" tables

### Check Data
1. Click on each table
2. You should see the columns listed
3. Initially, tables will be empty

## Testing the Setup

### Using the Admin Dashboard
1. Start the development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin`
3. Try creating a blog post
4. Try creating a service
5. Check Supabase dashboard to see the data

### Using Supabase Dashboard
1. Go to Table Editor
2. Click on "blogs" table
3. Click "Insert row" to add test data
4. Verify data appears in admin dashboard

## Troubleshooting

### "Table does not exist" error
- Verify you ran the CREATE TABLE SQL queries
- Check table names are lowercase: "blogs", "services"
- Refresh the page and try again

### "Permission denied" error
- Check RLS policies are set correctly
- Verify Supabase credentials in `.env.local`
- Try disabling RLS temporarily for testing

### Data not appearing
- Verify tables are created
- Check that data is being inserted
- Look at browser console for errors
- Check Supabase logs for database errors

### Slow queries
- Verify indexes are created
- Check query performance in Supabase dashboard
- Consider adding more indexes if needed

## Backup and Restore

### Backup Data
1. Go to Supabase Dashboard
2. Click "Backups" in the left sidebar
3. Click "Create backup"
4. Download backup file

### Restore Data
1. Go to Supabase Dashboard
2. Click "Backups" in the left sidebar
3. Select backup to restore
4. Click "Restore"

## Environment Variables

Your `.env.local` should contain:

```
NEXT_PUBLIC_SUPABASE_URL=https://rdqczsmrxuzlouiflchq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

These are already configured in your project.

## Next Steps

1. ✅ Create the database tables using the SQL queries above
2. ✅ Verify tables exist in Supabase dashboard
3. ✅ Start the development server
4. ✅ Access the admin dashboard at `/admin`
5. ✅ Create your first blog post and service
6. ✅ Verify data appears in Supabase dashboard

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Supabase SQL Editor Guide](https://supabase.com/docs/guides/database/sql-editor)

## Support

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Review Supabase logs in the dashboard
3. Verify environment variables are set correctly
4. Check that tables are created with correct schema

