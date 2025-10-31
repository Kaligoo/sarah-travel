# Stripe Payment Setup Guide

## Getting Your Stripe Keys

1. **Sign up for Stripe** (if you haven't already)
   - Go to https://dashboard.stripe.com/register
   - Complete the signup process

2. **Get your API keys**
   - Go to https://dashboard.stripe.com/test/apikeys
   - You'll see two keys:
     - **Publishable key** (starts with `pk_test_`)
     - **Secret key** (starts with `sk_test_`)

## Setting Up Environment Variables

1. **Create `.env.local` file** in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your Stripe keys** to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   ```

## Vercel Deployment Setup

1. **Add environment variables in Vercel**:
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add both keys:
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
   - Make sure to add them for **Production**, **Preview**, and **Development**

2. **Redeploy** your site after adding the environment variables

## Testing Payments

Use these test card numbers:

- **Successful payment**: `4242 4242 4242 4242`
- **Requires authentication**: `4000 0025 0000 3155`
- **Declined payment**: `4000 0000 0000 0002`

For all test cards:
- Use any future expiration date (e.g., 12/34)
- Use any 3-digit CVC
- Use any ZIP code

## How It Works

1. Client clicks "Proceed to Secure Payment"
2. App creates a Stripe Checkout Session via `/api/create-checkout-session`
3. User is redirected to Stripe's secure checkout page
4. After payment, user is redirected to `/booking/success`

## Going Live

When ready for production:

1. **Activate your Stripe account**
   - Complete business verification in Stripe Dashboard

2. **Switch to live keys**
   - Get live keys from https://dashboard.stripe.com/apikeys
   - Update environment variables with live keys (they start with `pk_live_` and `sk_live_`)

3. **Set up webhooks** (optional but recommended)
   - For handling post-payment events
   - Go to https://dashboard.stripe.com/webhooks
