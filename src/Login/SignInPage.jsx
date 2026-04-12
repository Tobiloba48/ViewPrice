import React, { useState } from 'react';
import Google from '../assets/google_symbol.svg.png';
import Facebook from '../assets/facebook_symbol.svg.png';
import { Link } from "react-router-dom";

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API for login
    console.log('Signing in:', { email, password });
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-4 
        transition-all duration-500">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Sign In</h1>
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-[#F75D02] font-semibold">
            Create one
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 
                focus:outline-none focus:ring-2 focus:ring-[#F75D02]"
              required
            />
          </div>

          <div className="relative flex flex-col">
            <label className="mb-1 text-sm font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md p-2 pr-24 
                focus:outline-none focus:ring-2 focus:ring-[#F75D02]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-8 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F75D02] text-white font-semibold py-2 
                rounded-md hover:bg-[#e55400] transition-colors"
          >
            Sign In
          </button>

          {/* Forgot password link under the button */}
          <div className="text-right">
            <Link to ="/reset-password" className="text-sm text-[#F75D02] font-medium hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 border-t border-black/10 pt-2">
          Or sign in using
        </p>

        <div className="mt-3 space-y-2">
            <a href="#" 
                className='flex items-center justify-center gap-2 border border-gray-300 
                  py-2 text-sm rounded-lg hover:bg-gray-100 transition text-[#F75D02] font-semibold'
            >
                <img src={Google} alt="Google" className="w-4 h-4" />
                  Continue with Google
            </a>
          <a href="#" className='flex items-center justify-center gap-2 border border-gray-300 
            py-2 text-sm rounded-lg hover:bg-gray-100 transition text-[#F75D02] font-semibold'
          > 
            <img src={Facebook} alt="Facebook" className="w-4 h-4 " />
              Continue with Facebook        
            </a>             
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
