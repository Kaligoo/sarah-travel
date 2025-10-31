'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const tours = [
  'European Discovery',
  'Asian Adventure',
  'African Safari',
  'South American Explorer',
  'Island Paradise',
  'Northern Lights Expedition',
  'Custom Journey'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourInterest: '',
    meetingType: 'email',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tourInterest: '',
        meetingType: 'email',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-3xl font-serif font-light tracking-wide cursor-pointer">SARAH KAHANE</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-10">
              <div className="hidden md:flex space-x-10">
                <Link href="/#destinations" className="elegant-text text-gray-800 hover:text-secondary transition">Destinations</Link>
                <Link href="/#tours" className="elegant-text text-gray-800 hover:text-secondary transition">Journeys</Link>
                <Link href="/#about" className="elegant-text text-gray-800 hover:text-secondary transition">About</Link>
                <Link href="/contact" className="elegant-text text-secondary">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="elegant-text text-accent mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4 tracking-wide">
            Let the Journey Begin
          </h1>
          <p className="text-lg font-light opacity-90 max-w-2xl mx-auto">
            Share your vision with us, and we&apos;ll design a journey that exceeds all expectations
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <p className="elegant-text text-secondary mb-4">Connect With Us</p>
              <h2 className="text-4xl font-serif font-light text-gray-900 mb-8">Your Journey Awaits</h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="elegant-text text-gray-900 mb-3">Email</h3>
                  <a href="mailto:hello@sarahkahane.com" className="text-lg text-gray-700 hover:text-secondary transition font-light">
                    hello@sarahkahane.com
                  </a>
                </div>

                <div>
                  <h3 className="elegant-text text-gray-900 mb-3">Phone</h3>
                  <a href="tel:1-800-TRAVEL" className="text-lg text-gray-700 hover:text-secondary transition font-light">
                    1-800-TRAVEL
                  </a>
                  <p className="text-sm text-gray-500 mt-2 font-light">Monday - Friday, 9AM - 6PM EST</p>
                </div>

                <div>
                  <h3 className="elegant-text text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-secondary transition">
                      <span className="elegant-text text-xs">Instagram</span>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-secondary transition">
                      <span className="elegant-text text-xs">Facebook</span>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-secondary transition">
                      <span className="elegant-text text-xs">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Our luxury travel consultants are dedicated to crafting bespoke experiences that reflect your unique preferences and exceed your expectations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-light border border-gray-200 p-12 text-center">
                  <h3 className="text-2xl font-serif font-light text-gray-900 mb-4">Thank You</h3>
                  <p className="text-gray-600 font-light">
                    We&apos;ve received your inquiry and will be in touch within 24 hours to begin planning your perfect journey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block elegant-text text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition font-light"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block elegant-text text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition font-light"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block elegant-text text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tourInterest" className="block elegant-text text-gray-700 mb-2">
                      Journey of Interest
                    </label>
                    <select
                      id="tourInterest"
                      name="tourInterest"
                      value={formData.tourInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition font-light bg-white"
                    >
                      <option value="">Select a journey...</option>
                      {tours.map(tour => (
                        <option key={tour} value={tour}>{tour}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block elegant-text text-gray-700 mb-3">
                      Preferred Contact Method *
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'email', label: 'Email' },
                        { value: 'phone', label: 'Phone Call' },
                        { value: 'video', label: 'Video Call' }
                      ].map(option => (
                        <label key={option.value} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="meetingType"
                            value={option.value}
                            checked={formData.meetingType === option.value}
                            onChange={handleChange}
                            className="mr-3"
                          />
                          <span className="font-light text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block elegant-text text-gray-700 mb-2">
                      Tell Us About Your Dream Journey
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition font-light resize-none"
                      placeholder="Share your vision, preferences, and any special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-luxury w-full"
                  >
                    Submit Inquiry
                  </button>

                  <p className="text-xs text-gray-500 font-light text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-light mb-4">SARAH KAHANE</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                Curating extraordinary travel experiences for discerning explorers since 2024
              </p>
            </div>
            <div>
              <h4 className="elegant-text text-white mb-4">Explore</h4>
              <div className="space-y-2">
                <Link href="/#tours" className="block text-gray-400 hover:text-white transition font-light">Journeys</Link>
                <Link href="/#about" className="block text-gray-400 hover:text-white transition font-light">About</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition font-light">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="elegant-text text-white mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition font-light">Instagram</a>
                <a href="#" className="block text-gray-400 hover:text-white transition font-light">Facebook</a>
                <a href="#" className="block text-gray-400 hover:text-white transition font-light">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm font-light">© 2025 Sarah Kahane Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
