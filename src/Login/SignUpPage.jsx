import React, { useState } from 'react';
import Google from '../assets/google_symbol.svg.png';
import Facebook from '../assets/facebook_symbol.svg.png';
import { Link } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  // Real-time password match check
  const handleConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordMatch) return;
    // TODO: Connect to backend API
    console.log('Submitting:', { email, password });
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-4 transition-all duration-500">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Create an Account</h1>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to = "/login" href="#" className="text-[#F75D02] font-semibold">
            Sign in
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
              className="border border-gray-300 rounded-md p-2 focus:outline-none 
                focus:ring-2 focus:ring-[#F75D02]"
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
              className="border border-gray-300 rounded-md p-2 pr-10 
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

          <div className="relative flex flex-col">
            <label className="mb-1 text-sm font-medium">Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmChange}
              className={`border rounded-md p-2 pr-10 focus:outline-none focus:ring-2 ${
                passwordMatch ? 'border-gray-300 focus:ring-[#F75D02]' : 'border-red-500 focus:ring-red-500'
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-2 top-8 text-gray-500"
            >
              {showConfirm ? 'Hide' : 'Show'}
            </button>
            {!passwordMatch && (
              <span className="text-red-500 text-xs mt-1">Passwords do not match</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#F75D02] text-white font-semibold py-2 rounded-md 
              cursor-pointer hover:bg-[#e55400] transition-colors"
            disabled={!passwordMatch}
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-[#F75D02] font-semibold">
            Terms of Service
          </a>
        </p>

        <p className="text-center text-sm text-gray-600 border-t border-black/10 pt-2">
          Or create an account using</p>

        <div className="mt-3 space-y-2">
          <a href="#" 
            className='flex items-center justify-center gap-2 border border-gray-300 
              py-2 text-sm rounded-lg hover:bg-gray-100 transition text-[#F75D02] font-semibold'
          >
            <img src={Google} alt="Google" className="w-4 h-4" />
              Continue with Google
          </a>
          <a href="#"
            className='flex items-center justify-center gap-2 border border-gray-300 
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

export default SignUpPage;
