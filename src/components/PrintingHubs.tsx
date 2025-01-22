import React from 'react';
import { MapPin, Printer, Star, Clock, Package } from 'lucide-react';

const SAMPLE_HUBS = [
  {
    id: '1',
    name: '3D Print Pro Lab',
    address: '123 Maker Street, Tech City',
    rating: 4.8,
    reviews: 156,
    printers: ['Ultimaker S5', 'Prusa i3 MK3S+'],
    materials: ['PLA', 'PETG', 'ABS', 'Resin'],
    pricing: 'From $25/hour',
    availability: 'Available Now',
    completedOrders: 1234,
    image: 'https://images.unsplash.com/photo-1631744591853-998c4308bbb0?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Maker Space Hub',
    address: '456 Innovation Ave, Tech Valley',
    rating: 4.6,
    reviews: 98,
    printers: ['Form 3+', 'Prusa i3 MK3S+', 'Ultimaker 2+'],
    materials: ['PLA', 'PETG', 'Resin'],
    pricing: 'From $30/hour',
    availability: '2 hour wait',
    completedOrders: 856,
    image: 'https://images.unsplash.com/photo-1615947914112-73cd43488dab?auto=format&fit=crop&q=80&w=400'
  }
];

export const PrintingHubs = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Nearby Printing Hubs</h2>
        <div className="flex space-x-2">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option>Sort by: Distance</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Price</option>
          </select>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {SAMPLE_HUBS.map((hub) => (
          <div key={hub.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={hub.image}
                alt={hub.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-green-600">
                {hub.availability}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{hub.name}</h3>
                  <p className="text-gray-500 flex items-center mt-1">
                    <MapPin size={16} className="mr-1" />
                    {hub.address}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400" />
                    <span className="ml-1 font-medium">{hub.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({hub.reviews})</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {hub.completedOrders.toLocaleString()} orders completed
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium flex items-center">
                    <Printer size={16} className="mr-1" />
                    Printers
                  </h4>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    {hub.printers.map((printer) => (
                      <li key={printer}>{printer}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Materials</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {hub.materials.map((material) => (
                      <span
                        key={material}
                        className="px-2 py-1 text-xs bg-gray-100 rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-600">{hub.pricing}</p>
                  <p className="text-sm text-gray-500">Instant quote available</p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  <Package size={18} />
                  <span>Select Hub</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}