# Deployment Guide for garretthorvath.com/sarah

## Quick Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Create a new GitHub repository**
   ```bash
   cd /c/sarah-travel
   git init
   git add .
   git commit -m "Initial commit - Sarah Kahane Travel site"
   git remote add origin https://github.com/YOUR-USERNAME/sarah-travel.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure Domain**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add `garretthorvath.com` as the domain
   - The app will be accessible at `garretthorvath.com/sarah` (configured via basePath in next.config.ts)

### Option 2: Deploy via Vercel CLI

```bash
cd /c/sarah-travel

# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Adding Sarah's Photo

Since LinkedIn blocked automated access, here's how to add Sarah's photo manually:

1. Download Sarah's LinkedIn profile photo
2. Save it as `sarah.jpg` in the `public` folder
3. Update the About section in `app/page.tsx`:
   ```tsx
   <Image
     src="/sarah/sarah.jpg"  // Note the /sarah prefix for basePath
     alt="Sarah Kahane"
     fill
     className="object-cover"
   />
   ```

## Environment Variables (Optional)

If you want to add Stripe payment integration or other services:

1. Create `.env.local` file:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

2. Add these in Vercel dashboard under Settings → Environment Variables

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000/sarah
```

## Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Visit http://localhost:3000/sarah
```

## Post-Deployment Checklist

- [ ] Verify site loads at garretthorvath.com/sarah
- [ ] Test all tour pages
- [ ] Test booking forms
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test navigation links

## Customization Tips

### Update Tour Data
Edit `app/page.tsx` and `app/tours/[id]/page.tsx` to add/modify tours

### Change Color Scheme
Edit `tailwind.config.ts` to change primary/secondary colors

### Add More Pages
Create new files in the `app` directory following Next.js conventions

### Add Real Payment Integration
Install Stripe: `npm install @stripe/stripe-js stripe`

## Support

For questions, contact the site owner or consult:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Site Location:** C:\sarah-travel
**Configured for:** garretthorvath.com/sarah
**Framework:** Next.js 16.0.1
**Status:** ✅ Ready for Deployment
