import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star, ArrowRight } from 'lucide-react';

interface DomesticDestination {
  id: string;
  name: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
}

const destinations: DomesticDestination[] = [
  {
    id: "nyc",
    name: "New York City Explorer",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Experience the magic of the Big Apple with our comprehensive city tour package.",
    duration: "5 Days",
    price: 1299,
    rating: 4.8,
    reviews: 156,
    location: "New York"
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon Adventure",
    image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Discover the natural wonders of the Grand Canyon with guided tours and hiking experiences.",
    duration: "4 Days",
    price: 999,
    rating: 4.9,
    reviews: 203,
    location: "Arizona"
  },
  {
    id: "hawaii",
    name: "Hawaiian Paradise",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Relax on pristine beaches and experience authentic Hawaiian culture.",
    duration: "7 Days",
    price: 1899,
    rating: 4.7,
    reviews: 178,
    location: "Hawaii"
  },
  {
    id: "yellowstone",
    name: "Yellowstone Explorer",
    image: "https://images.unsplash.com/photo-1533423996375-f914ac520158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "Explore the geothermal wonders and wildlife of America's first national park.",
    duration: "6 Days",
    price: 1499,
    rating: 4.9,
    reviews: 145,
    location: "Wyoming"
  },
  {
    id: "miami",
    name: "Miami Beach Getaway",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Enjoy the vibrant culture and beautiful beaches of Miami.",
    duration: "4 Days",
    price: 1199,
    rating: 4.6,
    reviews: 132,
    location: "Florida"
  },
  {
    id: "alaska",
    name: "Alaskan Wilderness",
    image: "https://images.unsplash.com/photo-1531176175280-33e81422832a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Experience the untamed beauty of Alaska's wilderness and glaciers.",
    duration: "8 Days",
    price: 2499,
    rating: 4.9,
    reviews: 98,
    location: "Alaska"
  }
];

export default function DomesticDestinations() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Domestic Destinations
            </h1>
            <p className="text-xl text-white">
              Discover the beauty and diversity of destinations right here at home
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  ${destination.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-gray-800">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{destination.location}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{destination.duration}</span>
                </div>
                <Link
                  to={`/tour/${destination.id}`}
                  className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Experiences */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover unique activities and experiences across the country
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">National Parks</h3>
              <p className="text-gray-600">
                Explore America's most beautiful national parks with expert guides
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">City Breaks</h3>
              <p className="text-gray-600">
                Experience the energy and culture of America's greatest cities
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beach Getaways</h3>
              <p className="text-gray-600">
                Relax on the most beautiful beaches across the country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}