import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { GALLERY_IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Carousel />

      {/* Hero Overlay / CTA */}
      <div className="bg-thai-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Hamsika Travels – Thailand Group Trip</h1>
          <p className="text-lg md:text-xl text-thai-gold font-semibold mb-6">January 2026 | Bangkok & Pattaya | 50 Members</p>
          <div className="flex justify-center space-x-4">
            <Link to="/itinerary" className="bg-transparent border-2 border-white hover:bg-white hover:text-thai-blue text-white px-6 py-3 rounded-lg font-semibold transition">
              View Itinerary
            </Link>
            <Link to="/booking" className="bg-thai-gold hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg transition">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover the Land of Smiles</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join our exclusive group tour for an unforgettable 6-day journey through the vibrant streets of Bangkok and the tropical paradise of Pattaya.
              Experience culture, adventure, and relaxation with Hamsika Travels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hotel text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Stays</h3>
              <p className="text-gray-500">Premium accommodation in 4-star hotels in the heart of the city.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bus text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfort Travel</h3>
              <p className="text-gray-500">All transfers and sightseeing in private AC luxury coaches.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ticket-alt text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">All Inclusive</h3>
              <p className="text-gray-500">Entry tickets to Safari World, Tiger Park, and more included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Trip Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((seed, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                <img
                  src={`https://picsum.photos/seed/${seed}/600/400`}
                  alt="Gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;