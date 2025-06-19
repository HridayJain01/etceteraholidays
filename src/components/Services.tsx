import React from 'react';
import { Import as Passport, Shield, Ship, Plane, Hotel, Car } from 'lucide-react';

const services = [
  {
    icon: <Passport className="h-8 w-8" />,
    title: 'Visa Assistance',
    description: 'Expert guidance through visa application process'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for worry-free travel'
  },
  {
    icon: <Ship className="h-8 w-8" />,
    title: 'Cruise Bookings',
    description: 'Luxury cruise experiences worldwide'
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: 'Flight Bookings',
    description: 'Best deals on international & domestic flights'
  },
  {
    icon: <Hotel className="h-8 w-8" />,
    title: 'Hotel Bookings',
    description: 'Curated selection of accommodations'
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: 'Transport',
    description: 'Comfortable and reliable transportation'
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}