'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // In a production app, you'd verify the session on the server
      // For now, we'll just show a success message
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 font-light">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs tracking-wider">
            <div>Luxury Tailor-Made Travel Since 2024</div>
            <div className="flex items-center space-x-6">
              <span>📞 1-800-TRAVEL</span>
              <span>✉️ hello@sarahkahane.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-3xl font-serif font-light tracking-wide cursor-pointer">SARAH KAHANE</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl font-serif font-light text-gray-900 mb-6">Booking Confirmed!</h1>

          <p className="text-xl text-gray-600 font-light mb-4">
            Thank you for choosing Sarah Kahane Travel
          </p>

          <p className="text-gray-600 font-light mb-12 max-w-2xl mx-auto">
            Your payment has been processed successfully. One of our luxury travel consultants will contact you within 24 hours to finalize the details of your journey and answer any questions you may have.
          </p>

          {/* Confirmation Box */}
          <div className="bg-light border border-gray-200 p-8 mb-12 max-w-xl mx-auto">
            <h3 className="elegant-text text-gray-900 mb-4">What Happens Next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-light text-gray-900 mb-1">Confirmation Email</p>
                  <p className="text-sm text-gray-600 font-light">You&apos;ll receive a confirmation email with your booking details</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-light text-gray-900 mb-1">Personal Consultation</p>
                  <p className="text-sm text-gray-600 font-light">A travel consultant will reach out to discuss your itinerary</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-light text-gray-900 mb-1">Final Details</p>
                  <p className="text-sm text-gray-600 font-light">We&apos;ll send you a complete itinerary and travel documents</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-luxury">
              Return to Home
            </Link>
            <Link href="/contact" className="btn-luxury-outline">
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-600 font-light mb-4">
              Questions about your booking?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
              <a href="mailto:hello@sarahkahane.com" className="text-secondary hover:text-dark transition font-light">
                hello@sarahkahane.com
              </a>
              <a href="tel:1-800-TRAVEL" className="text-secondary hover:text-dark transition font-light">
                1-800-TRAVEL
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-light mb-4">SARAH KAHANE</h3>
            <p className="text-gray-400 font-light">
              Curating extraordinary travel experiences for discerning explorers since 2024
            </p>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm font-light">© 2025 Sarah Kahane Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <SuccessContent />
    </Suspense>
  );
}
