import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Metrics from '../components/Metrics';
import TourCard from '../components/TourCard';
import { Destination } from '../types';

const internationalTours: Destination[] = [
  {
    id: "1",
    name: "Japanese Cherry Blossoms",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Experience the magical sakura season in Japan with our carefully crafted tour package.",
    price: 2499,
    duration: "8 Days"
  },
  {
    id: "2",
    name: "European Discovery",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Explore the best of Europe including Paris, Rome, and Amsterdam.",
    price: 3299,
    duration: "12 Days"
  },
  {
    id: "3",
    name: "Thailand Adventure",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Discover the beautiful beaches and rich culture of Thailand.",
    price: 1899,
    duration: "7 Days"
  }
];

const domesticTours: Destination[] = [
  {
    id: "4",
    name: "Grand Canyon Explorer",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Experience the natural wonder of the Grand Canyon with guided tours and hiking.",
    price: 999,
    duration: "4 Days"
  },
  {
    id: "5",
    name: "New York City Break",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Explore the Big Apple with our comprehensive city tour package.",
    price: 1299,
    duration: "5 Days"
  },
  {
    id: "6",
    name: "Hawaii Paradise",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    description: "Relax on pristine beaches and experience Hawaiian culture.",
    price: 1799,
    duration: "6 Days"
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Welcome to Etcetera Holidays</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in creating unforgettable travel experiences. We specialize in crafting 
              personalized journeys that cater to your unique preferences and desires.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular International Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Domestic Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Metrics />
    </div>
  );
}