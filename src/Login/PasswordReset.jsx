import React, { useState } from 'react';
import { Link } from "react-router-dom";

function PasswordReset() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // TODO: Connect to your backend API to send reset email
    console.log('Reset password for:', email);
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-4 transition-all duration-500">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Password Reset</h1>
        <p className="text-center text-sm text-gray-600">
          We will help you reset your password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F75D02]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F75D02] text-white font-semibold py-2 rounded-md hover:bg-[#e55400] transition-colors"
          >
            Reset Password
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link
              to="/login"
              className="text-[#F75D02] font-medium hover:underline"
            >
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PasswordReset;
