import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-thai-gold">Hamsika Travels</h3>
            <p className="text-gray-400 text-sm">
              Creating unforgettable memories with premium group tours to the world's most exciting destinations. Join us for Thailand 2026.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/itinerary" className="hover:text-white transition">Itinerary</Link></li>
              <li><Link to="/booking" className="hover:text-white transition">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p><i className="fas fa-phone mr-2"></i> +91 98765 43210</p>
              <p><i className="fas fa-envelope mr-2"></i> support@hamsikatravels.com</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i> Hyderabad, India</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; 2025 Hamsika Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;