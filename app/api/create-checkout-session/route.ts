import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-10-29.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { tourId, tourName, price, travelers, customerEmail, customerName } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tourName,
              description: `${travelers} traveler${travelers > 1 ? 's' : ''}`,
              images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80'],
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: travelers,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail,
      metadata: {
        tourId: tourId.toString(),
        tourName,
        travelers: travelers.toString(),
        customerName,
      },
      success_url: `${request.headers.get('origin')}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/tours/${tourId}?canceled=true`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
