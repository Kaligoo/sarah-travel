'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { use } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const tours = [
  {
    id: 1,
    name: "European Discovery",
    destination: "Paris, Rome & Barcelona",
    duration: "14 Days",
    price: 3999,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    description: "Experience the magic of Europe's most iconic cities on this unforgettable 14-day journey.",
    fullDescription: "Immerse yourself in the rich history, stunning architecture, and world-class cuisine of three of Europe's most celebrated cities. From the romantic streets of Paris to the ancient wonders of Rome and the vibrant culture of Barcelona, this comprehensive tour offers the perfect blend of guided experiences and free time to explore on your own.",
    highlights: ["Eiffel Tower", "Colosseum", "Sagrada Familia", "Louvre Museum", "Vatican Museums"],
    included: [
      "13 nights accommodation in 4-star hotels",
      "Daily breakfast and 8 dinners",
      "All transportation between cities",
      "Expert English-speaking guides",
      "Skip-the-line tickets to major attractions"
    ],
    itinerary: [
      { day: 1, title: "Arrive in Paris", description: "Welcome dinner and city orientation" },
      { day: 2, title: "Paris Highlights", description: "Eiffel Tower, Champs-Élysées, Seine River cruise" },
      { day: 3, title: "Louvre & Versailles", description: "Guided museum tour and palace visit" },
      { day: 4, title: "Free Day in Paris", description: "Explore at your own pace" },
      { day: 5, title: "Travel to Rome", description: "High-speed train to Italy's capital" },
      { day: 6, title: "Ancient Rome", description: "Colosseum, Roman Forum, Palatine Hill" },
      { day: 7, title: "Vatican City", description: "St. Peter's Basilica, Sistine Chapel" },
      { day: 8, title: "Trastevere & Free Time", description: "Explore charming neighborhoods" },
      { day: 9, title: "Travel to Barcelona", description: "Flight to Spain's Mediterranean gem" },
      { day: 10, title: "Gaudí's Masterpieces", description: "Sagrada Familia, Park Güell, Casa Batlló" },
      { day: 11, title: "Gothic Quarter", description: "Medieval streets and hidden plazas" },
      { day: 12, title: "Montjuïc & Beaches", description: "Cable car rides and seaside relaxation" },
      { day: 13, title: "Day Trip to Montserrat", description: "Mountain monastery excursion" },
      { day: 14, title: "Departure", description: "Farewell breakfast and airport transfer" }
    ]
  },
  {
    id: 2,
    name: "Asian Adventure",
    destination: "Tokyo, Bangkok & Bali",
    duration: "12 Days",
    price: 3499,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    description: "Immerse yourself in the wonders of Asia across three incredible destinations.",
    fullDescription: "Journey through the ultra-modern metropolis of Tokyo, the vibrant streets of Bangkok, and the tropical paradise of Bali. This tour perfectly balances cultural experiences, culinary adventures, and relaxation in some of Asia's most captivating destinations.",
    highlights: ["Mount Fuji", "Grand Palace", "Rice Terraces", "Temples", "Beach Resorts"],
    included: [
      "11 nights accommodation",
      "Daily breakfast and 6 dinners",
      "Internal flights",
      "All guided tours and entrance fees",
      "Cultural experiences and cooking classes"
    ],
    itinerary: []
  },
  // Add other tours similarly...
];

export default function TourPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const tour = tours.find(t => t.id === parseInt(resolvedParams.id));
  const [showBooking, setShowBooking] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    date: '',
  });

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <Link href="/" className="text-indigo-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: tour.id,
          tourName: tour.name,
          price: tour.price,
          travelers: formData.travelers,
          customerEmail: formData.email,
          customerName: formData.name,
        }),
      });

      const { sessionId, url, error } = await response.json();

      if (error) {
        alert(`Error: ${error}`);
        setIsProcessing(false);
        return;
      }

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Sarah Kahane Travel
            </Link>
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">
              ← Back to Tours
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-96">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{tour.name}</h1>
            <p className="text-2xl">{tour.destination}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-600 mb-4">{tour.description}</p>
              <p className="text-gray-600">{tour.fullDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
              <ul className="space-y-2">
                {tour.included.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tour.itinerary && tour.itinerary.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-indigo-600 pl-6 py-3">
                      <div className="flex items-center mb-2">
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          Day {day.day}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                      </div>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  ${tour.price}
                </div>
                <div className="text-gray-600">per person</div>
                <div className="mt-2 text-gray-600">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tour.duration}
                </div>
              </div>

              {!showBooking ? (
                <button
                  onClick={() => setShowBooking(true)}
                  className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
                >
                  Book This Tour
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Travelers *
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Start Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold mb-4">
                      <span>Total:</span>
                      <span className="text-indigo-600">${tour.price * formData.travelers}</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? 'Processing...' : 'Proceed to Secure Payment'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBooking(false)}
                      className="w-full mt-2 text-gray-600 hover:text-gray-800 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Contact us for personalized assistance
                </p>
                <a
                  href="mailto:sarah@sarahkahanetravel.com"
                  className="block w-full text-center border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
