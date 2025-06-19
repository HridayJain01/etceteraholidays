import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import { Destination } from '../types';

interface TourCardProps {
  tour: Destination;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={tour.image} 
        alt={tour.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Multiple Cities</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ${tour.price.toLocaleString()}
          </span>
          <Link
            to={`/tour/${tour.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}