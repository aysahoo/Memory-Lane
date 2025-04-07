import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] p-4">
      <div className="flex w-full max-w-4xl min-h-[650px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
        {/* Left Side - Image and Tagline */}
        <div className="w-1/2 bg-gradient-to-br from-[#459ddc] to-black relative hidden md:block">
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xl">Be a Part of</p>
            <p className="text-3xl font-bold">Something <span className="text-white font-extrabold">Magical</span></p>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full md:w-1/2 bg-black text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p className="text-gray-400 mb-6">
            {isLogin ? 'Enter your credentials to access your account' : 'Create a new account to get started'}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]"
                  placeholder="Your Name"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]"
                placeholder="aimerpaix@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]"
                placeholder="••••••••"
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#459ddc]"
                  placeholder="••••••••"
                />
              </div>
            )}
            {isLogin && (
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-black via-[#459ddc] to-black text-black py-2 rounded font-semibold hover:bg-[#459ddc] transition"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

            {/* Google Login Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded font-medium hover:bg-gray-200 transition border border-gray-300"
            >
              <FcGoogle className="text-xl" /> Continue with Google
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            {isLogin ? (
              <>Not a member? <span onClick={() => setIsLogin(false)} className="text-[#459ddc] cursor-pointer hover:underline">Create an account</span></>
            ) : (
              <>Already have an account? <span onClick={() => setIsLogin(true)} className="text-[#459ddc] cursor-pointer hover:underline">Login</span></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
