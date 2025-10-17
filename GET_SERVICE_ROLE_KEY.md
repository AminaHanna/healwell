# 🔑 Get Your Service Role Key - Required for Bucket Creation

## Why You Need This

To create storage buckets programmatically, you need your **Service Role Key** from Supabase.

---

## 📍 How to Get Your Service Role Key

### Step 1: Go to Supabase Dashboard

1. Open: https://app.supabase.com
2. Login with: healwellservice@gmail.com
3. Select project: "healwellservice@gmail.com's Project"

### Step 2: Navigate to Project Settings

1. Click the **gear icon** (⚙️) at the bottom left
2. Or click **"Settings"** in the left sidebar
3. You should see "Project Settings"

### Step 3: Go to API Section

1. In the left sidebar under Settings, click **"API"**
2. You should see different keys listed

### Step 4: Find Service Role Key

You should see:
- **Project URL**
- **Anon Key** (public)
- **Service Role Key** (secret) ← THIS ONE

### Step 5: Copy Service Role Key

1. Look for **"Service Role Key"** or **"service_role"**
2. Click the **copy icon** next to it
3. Copy the entire key (it's a long string)

---

## ⚠️ Important Security Notes

- ✅ Keep this key **SECRET**
- ✅ Never share it publicly
- ✅ Never commit it to GitHub
- ✅ Only use it on your server/backend
- ✅ Never expose it in client-side code

---

## 📝 Add to .env.local

Once you have the Service Role Key:

1. Open your `.env.local` file
2. Add this line:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```
3. Replace `your_service_role_key_here` with the actual key
4. Save the file

### Example:
```
NEXT_PUBLIC_SUPABASE_URL=https://rdqczsmrxuzlouiflchq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🚀 After Adding the Key

1. Save `.env.local`
2. Restart your dev server: `npm run dev`
3. Run the bucket creation script:
   ```
   node scripts/setup-storage-buckets.js
   ```

---

## ✅ Verify Buckets Were Created

1. Go to Supabase Dashboard
2. Click "Storage"
3. You should see:
   - blog-images (Public)
   - service-images (Public)

---

## 🆘 Troubleshooting

### Problem: Can't find API section
- Make sure you're in Project Settings
- Look for "API" in the left sidebar
- If not visible, scroll down

### Problem: Can't find Service Role Key
- Make sure you're in the API section
- Look for "Service Role Key" or "service_role"
- It should be below the Anon Key

### Problem: Key is too short
- Make sure you copied the entire key
- It should be a very long string (200+ characters)
- Don't include quotes or extra spaces

---

## 📸 Visual Guide

```
Supabase Dashboard
├── Settings (gear icon ⚙️)
│   ├── API
│   │   ├── Project URL
│   │   ├── Anon Key (public)
│   │   └── Service Role Key (secret) ← COPY THIS
│   └── ...
└── ...
```

---

## 🎯 Next Steps

1. Get your Service Role Key
2. Add to `.env.local`
3. Restart dev server
4. Run: `node scripts/setup-storage-buckets.js`
5. Verify buckets created
6. Test image upload

---

**Last Updated**: 2025-10-16


