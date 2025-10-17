# 🔍 Where to Find Service Role Key - Visual Guide

## 📍 Location in Supabase Dashboard

```
Supabase Dashboard
├── Your Project
│   ├── ⚙️ Settings (gear icon, bottom left)
│   │   ├── General
│   │   ├── Database
│   │   ├── Auth
│   │   ├── ★ API ← CLICK HERE
│   │   │   ├── Project URL
│   │   │   ├── Anon Key (public)
│   │   │   └── ★ Service Role Key ← COPY THIS
│   │   └── ...
│   └── ...
└── ...
```

---

## 🎯 Step-by-Step Navigation

### Step 1: Open Supabase Dashboard

```
Browser URL: https://app.supabase.com
```

### Step 2: Select Your Project

```
You should see:
"healwellservice@gmail.com's Project"

Click on it
```

### Step 3: Find Settings

```
Look at the BOTTOM LEFT of the screen

You should see a gear icon ⚙️

Click on it
```

### Step 4: Click API

```
In the left sidebar under Settings:

Home
Database
Auth
★ API ← CLICK HERE
Billing
...
```

### Step 5: Find Service Role Key

```
You should see:

Project URL
https://rdqczsmrxuzlouiflchq.supabase.co

Anon Key (public)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

★ Service Role Key (secret) ← THIS ONE
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🔑 What It Looks Like

### Service Role Key Format

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcWN6c21yeHV6bG91aWZsY2hxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDU4MzA2MiwiZXhwIjoyMDc2MTU5MDYyfQ.HB3d0yPlPgpMdfflbZesMqfGyGj1cdr2T5uA5meUzBE
```

**Characteristics**:
- Very long string (200+ characters)
- Starts with: `eyJ...`
- Contains dots: `.`
- Contains: `service_role`

---

## 📸 Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│  Supabase Dashboard                                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  LEFT SIDEBAR          │  MAIN CONTENT                 │
│  ─────────────────     │  ──────────────               │
│  • Home                │  API Keys                     │
│  • Database            │                               │
│  • Auth                │  Project URL                  │
│  ★ API                 │  ┌─────────────────────────┐  │
│  • Billing             │  │ https://rdqczsmrxuzl... │  │
│  • ...                 │  └─────────────────────────┘  │
│                        │                               │
│                        │  Anon Key (public)            │
│                        │  ┌─────────────────────────┐  │
│                        │  │ eyJhbGciOiJIUzI1NiIs... │  │
│                        │  │ [Copy]                  │  │
│                        │  └─────────────────────────┘  │
│                        │                               │
│                        │  Service Role Key (secret)    │
│                        │  ┌─────────────────────────┐  │
│                        │  │ eyJhbGciOiJIUzI1NiIs... │  │
│                        │  │ [Copy] ← CLICK HERE     │  │
│                        │  └─────────────────────────┘  │
│                        │                               │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ How to Copy

1. Find the **Service Role Key** field
2. Look for the **[Copy]** button next to it
3. Click the **[Copy]** button
4. The key is now in your clipboard
5. Paste it into `.env.local`

---

## ⚠️ Important Notes

### DO:
✅ Copy the entire key
✅ Keep it secret
✅ Add to `.env.local`
✅ Never share it
✅ Never commit to GitHub

### DON'T:
❌ Share the key publicly
❌ Commit to version control
❌ Use in client-side code
❌ Expose in browser console
❌ Copy only part of it

---

## 🆘 Can't Find It?

### Problem: Can't find Settings
- Look at BOTTOM LEFT of screen
- You should see a gear icon ⚙️
- Click on it

### Problem: Can't find API
- Make sure you're in Settings
- Look in left sidebar
- Scroll down if needed
- Look for "API"

### Problem: Can't find Service Role Key
- Make sure you're in API section
- Look for "Service Role Key" (not "Anon Key")
- It should be below the Anon Key
- If you only see "Anon Key", scroll down

### Problem: Key is too short
- Make sure you copied the entire key
- It should be 200+ characters
- Don't include quotes or spaces
- Copy again if needed

---

## 📋 Checklist

- [ ] Opened Supabase Dashboard
- [ ] Selected your project
- [ ] Clicked Settings (gear icon)
- [ ] Clicked API
- [ ] Found Service Role Key
- [ ] Clicked Copy button
- [ ] Key is in clipboard
- [ ] Ready to add to .env.local

---

## 🎯 Next Steps

1. Copy Service Role Key (this page)
2. Open `.env.local`
3. Add: `SUPABASE_SERVICE_ROLE_KEY=your_key`
4. Save file
5. Run: `node scripts/setup-storage-buckets.js`
6. Done! ✅

---

**Last Updated**: 2025-10-16


