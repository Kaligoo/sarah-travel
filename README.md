# Sarah Kahane Travel - Tours & Booking Site

A beautiful, modern travel booking website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Beautiful Tour Listings** - Browse stunning travel destinations
- 🎨 **Modern Design** - Responsive, mobile-friendly interface
- 📝 **Booking System** - Easy-to-use booking forms
- 🖼️ **High-Quality Images** - Professional travel photography
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image Optimization
- **Hosting**: Configured for deployment at garretthorvath.com/sarah

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000/sarah](http://localhost:3000/sarah)

## Deployment

This app is configured to be deployed at `garretthorvath.com/sarah`:

### Option 1: Deploy as Static Export

```bash
# Build the app
npm run build

# The output will be in the .next folder
# Copy to your server's sarah subdirectory
```

### Option 2: Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Set base path in deployment settings or use the included next.config.ts

## Project Structure

```
sarah-travel/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage with tour listings
│   ├── globals.css         # Global styles
│   └── tours/
│       └── [id]/
│           └── page.tsx    # Individual tour pages
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json
```

## Featured Tours

1. **European Discovery** - Paris, Rome & Barcelona (14 days)
2. **Asian Adventure** - Tokyo, Bangkok & Bali (12 days)
3. **African Safari** - Kenya & Tanzania (10 days)
4. **South American Explorer** - Peru & Chile (16 days)
5. **Island Paradise** - Maldives & Seychelles (8 days)
6. **Northern Lights Expedition** - Iceland & Norway (9 days)

## Customization

- Update tour data in `app/page.tsx` and `app/tours/[id]/page.tsx`
- Modify colors in `tailwind.config.ts`
- Add more pages in the `app` directory

## Contact

For questions or support, contact Sarah Kahane Travel.

---

Built with ❤️ by Claude Code
