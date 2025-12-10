import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRICING } from '../constants';
import { BookingState } from '../types';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingState>({
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price: (Adults + Children) * Price Per Person
    const total = (formData.adults + formData.children) * PRICING.pricePerPerson;
    setTotalPrice(total);
  }, [formData.adults, formData.children]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'adults' || name === 'children' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this to the backend here.
    // Since we are simulating, we pass data via router state or just navigate to payment.
    navigate('/payment', { state: { ...formData, totalPrice } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-thai-blue py-6 px-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-calendar-check mr-3"></i>
            Booking Form
          </h2>
          <p className="text-blue-100 mt-2">Reserve your spot for Thailand 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Personal Info */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thai-blue focus:ring-thai-blue sm:text-sm p-2 border"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thai-blue focus:ring-thai-blue sm:text-sm p-2 border"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thai-blue focus:ring-thai-blue sm:text-sm p-2 border"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-gray-700">Adults</label>
              <select
                name="adults"
                id="adults"
                value={formData.adults}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thai-blue focus:ring-thai-blue sm:text-sm p-2 border"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="children" className="block text-sm font-medium text-gray-700">Children</label>
              <select
                name="children"
                id="children"
                value={formData.children}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-thai-blue focus:ring-thai-blue sm:text-sm p-2 border"
              >
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Price per person:</span>
              <span className="font-medium">{PRICING.currency} {PRICING.pricePerPerson.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total Members:</span>
              <span className="font-medium">{formData.adults + formData.children}</span>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex justify-between items-center text-lg font-bold text-thai-blue">
              <span>Total Amount:</span>
              <span>{PRICING.currency} {totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-thai-gold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-gray-900 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;