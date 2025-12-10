import React, { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const location = useLocation();
  const state = location.state as { name: string; totalPrice: number; adults: number; children: number } | null;

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!state) {
    return <Navigate to="/booking" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        
        <div className="bg-green-600 p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <i className="fas fa-check text-2xl text-green-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-white">Booking Initiated</h2>
          <p className="text-green-100">Hello, {state.name}</p>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Complete your payment to confirm</p>
            <p className="text-3xl font-bold text-gray-900">₹ {state.totalPrice.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">
              For {state.adults} Adults, {state.children} Children
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 mb-8 text-center">
            <p className="text-sm font-bold text-gray-500 mb-2">SCAN & PAY VIA UPI</p>
            
            {/* QR Code Placeholder */}
            <div className="bg-white p-4 mx-auto w-48 h-48 rounded-lg shadow-sm flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=hamsikatravels@upi&pn=HamsikaTravels&am=0&cu=INR" 
                 alt="Payment QR"
                 className="w-full h-full object-contain opacity-80"
               />
            </div>
            
            <div className="bg-white py-2 px-4 rounded border border-gray-200 inline-block">
              <span className="font-mono text-gray-800 font-semibold select-all">hamsikatravels@upi</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">Use any UPI App (GPay, PhonePe, Paytm)</p>
          </div>

          <div className="space-y-4">
            <button 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
              onClick={() => alert("Payment Verification feature would be here in a real app.")}
            >
              I Have Paid
            </button>
            <Link 
              to="/" 
              className="block w-full text-center bg-transparent hover:bg-gray-100 text-gray-600 font-semibold py-3 px-4 rounded-lg border border-gray-300 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            Booking ID: #THAI-{Math.floor(1000 + Math.random() * 9000)} <br/>
            Need help? Call +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;