import React from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Location {
  name: string;
  coordinates: [number, number];
}

interface TripMapProps {
  locations: Location[];
}

const TripMap: React.FC<TripMapProps> = ({ locations }) => {
  const bounds = locations.reduce(
    (bounds, location) => {
      return {
        minLng: Math.min(bounds.minLng, location.coordinates[0]),
        maxLng: Math.max(bounds.maxLng, location.coordinates[0]),
        minLat: Math.min(bounds.minLat, location.coordinates[1]),
        maxLat: Math.max(bounds.maxLat, location.coordinates[1]),
      };
    },
    {
      minLng: locations[0].coordinates[0],
      maxLng: locations[0].coordinates[0],
      minLat: locations[0].coordinates[1],
      maxLat: locations[0].coordinates[1],
    }
  );

  const padding = 0.5; // Add padding to the bounds

  return (
    <Map
      initialViewState={{
        longitude: (bounds.minLng + bounds.maxLng) / 2,
        latitude: (bounds.minLat + bounds.maxLat) / 2,
        zoom: 6,
        padding: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 50
        }
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken="YOUR_MAPBOX_TOKEN"
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          longitude={location.coordinates[0]}
          latitude={location.coordinates[1]}
        >
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {location.name}
          </div>
        </Marker>
      ))}
    </Map>
  );
};

export default TripMap; 