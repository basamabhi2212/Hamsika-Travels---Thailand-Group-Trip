import React from 'react';
import { ITINERARY_DATA } from '../constants';
import { Link } from 'react-router-dom';

const Itinerary: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-thai-blue mb-4">Trip Itinerary</h1>
          <p className="text-xl text-gray-600">6 Days / 5 Nights of Adventure</p>
        </div>

        <div className="space-y-12">
          {ITINERARY_DATA.map((item, index) => (
            <div 
              key={item.day} 
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Card */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-80 group">
                   <img 
                    src={`https://picsum.photos/seed/${item.imageSeed}/800/600`}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-thai-gold text-gray-900 font-bold px-4 py-1 rounded-full shadow-md">
                    Day {item.day}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{item.title}</h2>
                <div className="w-20 h-1 bg-thai-blue rounded"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span><i className="fas fa-clock mr-2 text-thai-gold"></i> Full Day</span>
                  <span><i className="fas fa-camera mr-2 text-thai-gold"></i> Sightseeing</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for the adventure?</h3>
            <p className="text-gray-600 mb-6">Limited seats available for the 50-member group. Secure your spot today.</p>
            <Link 
              to="/booking" 
              className="inline-block bg-thai-blue hover:bg-cyan-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition transform hover:-translate-y-1"
            >
              Book Your Trip Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;