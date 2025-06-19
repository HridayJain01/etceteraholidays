import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="space-y-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
              />
              <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-blue-600 bg-white rounded-full p-1" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-1">{review.name}</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">{review.date}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <p className="text-gray-700 leading-relaxed italic">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews; 