import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface ItineraryDay {
  day: number;
  activities: {
    time: string;
    title: string;
    description: string;
    location: string;
  }[];
}

interface ItineraryProps {
  days: ItineraryDay[];
}

const Itinerary: React.FC<ItineraryProps> = ({ days }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {days.map((day) => (
        <div key={day.day} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
              <span className="text-xl font-bold">D{day.day}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Day {day.day}</h3>
              <p className="text-sm text-gray-600">Your Greek adventure continues</p>
            </div>
          </div>
          <div className="space-y-4">
            {day.activities.map((activity, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-100" />
                <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-blue-600 ring-2 ring-blue-50" />
                <div className="space-y-2">
                  <div className="flex items-center text-blue-700 font-medium text-sm bg-blue-50 px-2 py-1 rounded-full w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </div>
                  <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-3 h-3 mr-1 text-blue-600" />
                    {activity.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itinerary; 