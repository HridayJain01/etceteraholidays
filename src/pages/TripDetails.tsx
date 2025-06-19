import React from 'react';
import { MapPin, Calendar, Clock, Hotel, FileText, AlertCircle, Users, Utensils, Plane, Sun, Wifi, Coffee, Heart, Share2, ChevronRight } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import TripMap from '../components/Map';
import Itinerary from '../components/Itinerary';
import Reviews from '../components/Reviews';

const TripDetails: React.FC = () => {
  const tripImages = [
    {
      url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      alt: "Santorini sunset view"
    },
    {
      url: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24",
      alt: "Santorini blue domes"
    },
    {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      alt: "Santorini beach"
    }
  ];

  const locations = [
    { name: "Athens", coordinates: [23.7275, 37.9838] },
    { name: "Santorini", coordinates: [25.3960, 36.3932] },
    { name: "Mykonos", coordinates: [25.3290, 37.4415] }
  ];

  const itineraryDays = [
    {
      day: 1,
      activities: [
        {
          time: "09:00 AM",
          title: "Athens Arrival",
          description: "Welcome to Athens! Check-in at your luxury hotel and take time to refresh.",
          location: "Athens International Airport"
        },
        {
          time: "02:00 PM",
          title: "Acropolis Tour",
          description: "Guided tour of the ancient Acropolis and Parthenon.",
          location: "Acropolis of Athens"
        }
      ]
    },
    {
      day: 2,
      activities: [
        {
          time: "10:00 AM",
          title: "Athens Food Tour",
          description: "Explore local markets and taste authentic Greek cuisine.",
          location: "Monastiraki Market"
        }
      ]
    },
    {
      day: 3,
      activities: [
        {
          time: "09:00 AM",
          title: "Ferry to Santorini",
          description: "Scenic ferry journey to the beautiful island of Santorini.",
          location: "Piraeus Port"
        }
      ]
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "March 2024",
      comment: "Amazing trip! The views were breathtaking and the service was excellent. The tour guides were knowledgeable and friendly. Would definitely recommend this trip to anyone looking for a perfect Greek getaway!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21" 
          alt="Santorini Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 [text-shadow:_0_1px_12px_rgb(0_0_0_/_40%)]">
              Greek Islands Adventure
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]">
              Experience the magic of Greece through its most beautiful islands
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 -mt-32 relative z-10 pb-24">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <span className="flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700">
                    <Calendar className="w-5 h-5 mr-2" />
                    10 Days
                  </span>
                  <span className="flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700">
                    <MapPin className="w-5 h-5 mr-2" />
                    Greece
                  </span>
                  <span className="flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-700">
                    <Users className="w-5 h-5 mr-2" />
                    12 People
                  </span>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 rounded-full hover:bg-gray-50 transition-colors">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </button>
                  <button className="p-3 rounded-full hover:bg-gray-50 transition-colors">
                    <Share2 className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Embark on an unforgettable journey through the Greek Islands, where ancient history meets stunning landscapes. From the iconic whitewashed buildings of Santorini to the historical wonders of Athens, this carefully curated tour offers the perfect blend of culture, relaxation, and adventure.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="text-blue-600 font-semibold mb-1">Departure</div>
                  <div className="text-gray-900">Athens</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="text-blue-600 font-semibold mb-1">Physical Level</div>
                  <div className="text-gray-900">Moderate</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="text-blue-600 font-semibold mb-1">Age Range</div>
                  <div className="text-gray-900">12-80 years</div>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Sun className="w-8 h-8 text-blue-600 mr-3" />
                Trip Highlights
              </h2>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { 
                    icon: Sun,
                    title: "Perfect Weather",
                    desc: "Mediterranean climate",
                    image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97"
                  },
                  { 
                    icon: Plane,
                    title: "Island Hopping",
                    desc: "Multiple Greek islands",
                    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                  },
                  { 
                    icon: Users,
                    title: "Small Groups",
                    desc: "Maximum 12 travelers",
                    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3"
                  },
                  { 
                    icon: Hotel,
                    title: "Luxury Stays",
                    desc: "4 & 5 star hotels",
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
                  },
                  { 
                    icon: Utensils,
                    title: "Local Cuisine",
                    desc: "Authentic Greek dining",
                    image: "https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9"
                  },
                  { 
                    icon: Coffee,
                    title: "Cultural Tours",
                    desc: "Expert local guides",
                    image: "https://images.unsplash.com/photo-1509041322357-8a3f9757a475"
                  }
                ].map(({ icon: Icon, title, desc, image }, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>
              <ImageCarousel images={tripImages} />
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                Trip Route
              </h2>
              {/* Map intentionally left empty as per request */}
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                Detailed Itinerary
              </h2>
              <Itinerary days={itineraryDays} />
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Where You'll Stay</h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    name: "Royal Olympic Hotel",
                    location: "Athens",
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                    rating: "5-star",
                    price: "$350/night",
                    amenities: ["Spa", "Pool", "Restaurant", "Gym", "Bar"]
                  },
                  {
                    name: "Santorini Secret",
                    location: "Santorini",
                    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
                    rating: "5-star",
                    price: "$450/night",
                    amenities: ["Private Pool", "Sea View", "Restaurant", "Spa", "Bar"]
                  }
                ].map(({ name, location, image, rating, price, amenities }, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium opacity-90">{location}</div>
                        <div className="text-2xl font-semibold">{name}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Hotel className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{rating}</span>
                        </div>
                        <div className="text-blue-600 font-semibold">{price}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {amenities.map((amenity, i) => (
                          <span key={i} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Guest Reviews</h2>
              <Reviews reviews={reviews} />
            </section>
          </div>

          <div>
            <div className="sticky top-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-baseline gap-2 mb-6">
                  <div className="text-5xl font-bold text-gray-900">$2,499</div>
                  <div className="text-gray-500">per person</div>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl mb-6 hover:bg-blue-700 transition-all font-semibold text-lg shadow-sm hover:shadow-blue-200 hover:shadow-lg flex items-center justify-center gap-2">
                  Book Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl text-blue-700">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Limited spots available for July</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl text-green-700">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Free cancellation up to 30 days before</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="font-semibold mb-3">Trip Start Dates</div>
                    <div className="grid grid-cols-2 gap-3">
                      {["Jul 15", "Aug 1", "Aug 15", "Sep 1"].map((date) => (
                        <div key={date} className="text-center p-3 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer transition-colors">
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-3">Group Size</div>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>12 people max</span>
                      </div>
                      <div className="text-blue-600 font-medium">4 spots left</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold mb-4">Trip Inclusions</h2>
                  <ul className="space-y-3">
                    {[
                      "All accommodations",
                      "Daily breakfast",
                      "Internal transport",
                      "Expert guides",
                      "Entry fees"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold mb-4">Required Documents</h2>
                  <ul className="space-y-3">
                    {[
                      "Valid Passport",
                      "Travel Insurance",
                      "Visa if applicable"
                    ].map((doc, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                        <FileText className="w-4 h-4 text-blue-600" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails; 