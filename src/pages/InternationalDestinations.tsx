import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

interface Continent {
  id: string;
  name: string;
  image: string;
  description: string;
  countries: number;
  destinations: number;
}

const continents: Continent[] = [
  {
    id: "asia",
    name: "Asia",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "From ancient temples to modern cities, experience the diversity of Asian culture and landscapes.",
    countries: 15,
    destinations: 45
  },
  {
    id: "europe",
    name: "Europe",
    image: "https://images.unsplash.com/photo-1541343672885-9be56236302a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Discover the charm of historic cities, alpine adventures, and Mediterranean beaches.",
    countries: 20,
    destinations: 60
  },
  {
    id: "northamerica",
    name: "North America",
    image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Experience natural wonders, vibrant cities, and diverse landscapes across the continent.",
    countries: 3,
    destinations: 25
  },
  {
    id: "southamerica",
    name: "South America",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Explore ancient ruins, rainforests, and vibrant cultures in this diverse continent.",
    countries: 8,
    destinations: 30
  },
  {
    id: "africa",
    name: "Africa",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Safari adventures, ancient pyramids, and stunning landscapes await your discovery.",
    countries: 12,
    destinations: 35
  },
  {
    id: "oceania",
    name: "Oceania",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Discover paradise islands, unique wildlife, and rich indigenous cultures.",
    countries: 4,
    destinations: 20
  }
];

export default function InternationalDestinations() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              International Destinations
            </h1>
            <p className="text-xl text-white">
              Explore the world's most fascinating continents and create lasting memories
            </p>
          </div>
        </div>
      </div>

      {/* Continents Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {continents.map((continent) => (
            <Link 
              key={continent.id}
              to="/trip-details"
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 block"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={continent.image} 
                  alt={continent.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{continent.name}</h3>
                  <div className="flex items-center text-white/80 text-sm space-x-4">
                    <span>{continent.countries} Countries</span>
                    <span>•</span>
                    <span>{continent.destinations} Destinations</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{continent.description}</p>
                <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Explore Destinations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our International Tours?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the world with confidence through our expertly crafted international tours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our experienced local guides ensure you get authentic experiences and insider knowledge
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Experiences</h3>
              <p className="text-gray-600">
                Each tour is thoughtfully designed to offer unique and memorable experiences
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance ensures you travel with complete peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}