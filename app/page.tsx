'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const tours = [
  {
    id: 1,
    name: "European Discovery",
    destination: "Paris, Rome & Barcelona",
    duration: "14 Days",
    price: 3999,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    description: "Experience the magic of Europe's most iconic cities",
    highlights: ["Eiffel Tower", "Colosseum", "Sagrada Familia"]
  },
  {
    id: 2,
    name: "Asian Adventure",
    destination: "Tokyo, Bangkok & Bali",
    duration: "12 Days",
    price: 3499,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    description: "Immerse yourself in the wonders of Asia",
    highlights: ["Mount Fuji", "Grand Palace", "Rice Terraces"]
  },
  {
    id: 3,
    name: "African Safari",
    destination: "Kenya & Tanzania",
    duration: "10 Days",
    price: 4599,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    description: "Witness the majesty of African wildlife",
    highlights: ["Serengeti", "Masai Mara", "Big Five"]
  },
  {
    id: 4,
    name: "South American Explorer",
    destination: "Peru & Chile",
    duration: "16 Days",
    price: 4299,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    description: "Discover ancient wonders and natural beauty",
    highlights: ["Machu Picchu", "Atacama Desert", "Easter Island"]
  },
  {
    id: 5,
    name: "Island Paradise",
    destination: "Maldives & Seychelles",
    duration: "8 Days",
    price: 5299,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    description: "Relax in tropical paradise",
    highlights: ["Overwater Bungalows", "Snorkeling", "Beach Resorts"]
  },
  {
    id: 6,
    name: "Northern Lights Expedition",
    destination: "Iceland & Norway",
    duration: "9 Days",
    price: 3899,
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&q=80",
    description: "Chase the Aurora Borealis",
    highlights: ["Northern Lights", "Glaciers", "Fjords"]
  }
];

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Sarah Kahane Travel</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#tours" className="text-gray-700 hover:text-indigo-600 transition">Tours</Link>
              <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Next Adventure Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Expert-guided tours to the world's most breathtaking destinations
          </p>
          <a
            href="#tours"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg"
          >
            Explore Tours
          </a>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tours</h2>
            <p className="text-xl text-gray-600">Handpicked adventures for unforgettable experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                onClick={() => setSelectedTour(tour.id)}
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-indigo-600 font-bold">${tour.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{tour.destination}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{tour.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sarah Kahane Travel</h2>
              <p className="text-lg text-gray-600 mb-4">
                With over 15 years of experience in curating exceptional travel experiences,
                Sarah Kahane Travel specializes in creating unforgettable journeys to the world's
                most captivating destinations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expert team handles every detail, from accommodation and transportation to
                exclusive experiences and local guides, ensuring your trip is seamless and memorable.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">500+</div>
                  <div className="text-gray-600">Tours</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">15K+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">95%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                alt="Travel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with us to plan your perfect adventure
          </p>
          <a
            href="mailto:sarah@sarahkahanetravel.com"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Sarah Kahane Travel</h3>
          <p className="text-gray-400 mb-6">Creating unforgettable memories around the world</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
          </div>
          <p className="text-gray-500 mt-8">© 2025 Sarah Kahane Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
