'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import TripPlanner from './components/TripPlanner';

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
  const [plannerVisible, setPlannerVisible] = useState(false);

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
              <h1 className="text-3xl font-serif font-light tracking-wide">SARAH KAHANE</h1>
            </div>
            <div className="flex items-center space-x-10">
              <div className="hidden md:flex space-x-10">
                <Link href="#destinations" className="elegant-text text-gray-800 hover:text-secondary transition">Destinations</Link>
                <Link href="#tours" className="elegant-text text-gray-800 hover:text-secondary transition">Journeys</Link>
                <Link href="#about" className="elegant-text text-gray-800 hover:text-secondary transition">About</Link>
                <Link href="#contact" className="elegant-text text-gray-800 hover:text-secondary transition">Contact</Link>
              </div>
              <button
                onClick={() => setPlannerVisible(true)}
                className="btn-luxury"
              >
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Luxury Travel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-light mb-6 tracking-wide">
            Curated Luxury Journeys
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light tracking-wide opacity-90">
            Bespoke travel experiences crafted for the discerning explorer
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#tours" className="btn-luxury-outline bg-white bg-opacity-10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black">
              Explore Journeys
            </a>
            <button onClick={() => setPlannerVisible(true)} className="btn-luxury bg-white bg-opacity-90 text-black border-white hover:bg-white">
              Speak to a Consultant
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="elegant-text text-secondary mb-4">Signature Journeys</p>
            <h2 className="text-5xl font-serif font-light text-gray-900 mb-6">Curated Experiences</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Each journey is meticulously crafted to deliver extraordinary moments and authentic connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedTour(tour.id)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="elegant-text text-white/80 mb-2">{tour.duration}</p>
                    <h3 className="text-3xl font-serif font-light mb-2">{tour.name}</h3>
                    <p className="text-sm font-light tracking-wide opacity-90">{tour.destination}</p>
                  </div>
                </div>
                <div className="p-8 border border-gray-100">
                  <p className="text-gray-700 font-light mb-6 leading-relaxed">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs tracking-wider text-gray-600 border border-gray-300 px-3 py-1"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">From</p>
                      <p className="text-2xl font-serif">${tour.price.toLocaleString()}</p>
                    </div>
                    <Link
                      href={`/tours/${tour.id}`}
                      className="elegant-text text-black hover:text-secondary transition border-b border-black hover:border-secondary pb-1"
                    >
                      View Journey
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Luxury Travel Experience"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="elegant-text text-secondary mb-4">Our Philosophy</p>
              <h2 className="text-5xl font-serif font-light text-gray-900 mb-8">Bespoke Travel Excellence</h2>
              <p className="text-lg text-gray-700 font-light mb-6 leading-relaxed">
                With over 15 years of distinguished service in luxury travel, Sarah Kahane curates
                extraordinary journeys for the world's most discerning travelers.
              </p>
              <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed">
                Every detail is meticulously arranged—from private accommodations and exclusive access
                to cultural immersion and personal concierge services—ensuring a seamless and transformative experience.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300">
                <div>
                  <div className="text-4xl font-serif text-secondary mb-2">500+</div>
                  <div className="elegant-text text-gray-600">Curated Journeys</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-secondary mb-2">15K+</div>
                  <div className="elegant-text text-gray-600">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-secondary mb-2">50+</div>
                  <div className="elegant-text text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Contact Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="elegant-text text-accent mb-6">Begin Your Journey</p>
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-8">Let Us Craft Your Perfect Escape</h2>
          <p className="text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Speak with one of our luxury travel consultants to design an experience tailored exclusively to your desires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@sarahkahane.com"
              className="btn-luxury-outline border-white text-white hover:bg-white hover:text-black"
            >
              Email Us
            </a>
            <button
              onClick={() => setPlannerVisible(true)}
              className="btn-luxury bg-white text-black border-white hover:bg-transparent hover:text-white"
            >
              Start Planning
            </button>
          </div>
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-center gap-8 text-sm font-light">
              <div>
                <p className="elegant-text text-accent mb-2">Phone</p>
                <p>1-800-TRAVEL</p>
              </div>
              <div>
                <p className="elegant-text text-accent mb-2">Email</p>
                <p>hello@sarahkahane.com</p>
              </div>
              <div>
                <p className="elegant-text text-accent mb-2">Hours</p>
                <p>Monday - Friday, 9AM - 6PM EST</p>
              </div>
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
                <a href="#tours" className="block text-gray-400 hover:text-white transition font-light">Journeys</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition font-light">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition font-light">Contact</a>
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

      {/* Trip Planner Questionnaire */}
      <TripPlanner visible={plannerVisible} onClose={() => setPlannerVisible(false)} />
    </div>
  );
}
