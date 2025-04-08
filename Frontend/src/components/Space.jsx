import React, { useState } from "react";
import { Mail } from "lucide-react";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";


// Reusable Button
function Button({ children, className = "", type = "button", disabled = false, ...props }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center px-5 py-3 rounded-full text-xl font-semibold shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 8;
  const isConfirmMatch = password === confirmPassword;
  const isFormValid = isLogin
    ? isValidEmail && isValidPassword
    : isValidEmail && isValidPassword && name.length > 0 && isConfirmMatch;

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isFormValid) {
      setError("Please fill all fields correctly.");
      return;
    }

    try {
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(`${isLogin ? "Login" : "Account created"} successfully! Redirecting...`);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setSuccess("");

    try {
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess("Google sign in successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (err) {
      setError("Google sign in failed. Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <img
        src={assets.hero_bg}
        alt="Background"
        className="absolute inset-0 scale-110 w-full h-full object-cover"
      />
  
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
  
      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 z-20">
        <button className="bg-neutral-900/70 hover:bg-neutral-900 text-white rounded-lg px-6 py-2 backdrop-blur-md duration-300">
          ← Back
        </button>
      </Link>
  
      {/* Fixed Header */}
      <div className="absolute top-12 w-full text-center z-20">
        <h1 className="text-5xl pt-20 pb-2 font-bold bg-gradient-to-r from-[#459ddc] via-white to-[#459ddc] text-transparent bg-clip-text">
          Memory Lane
        </h1>
      </div>
  
      {/* Form */}
      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-80 px-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col space-y-6 overflow-y-auto no-scrollbar max-h-[70vh] px-2">
    
    {/* Status Messages */}
    {error && (
      <div className="w-full px-4 py-3 rounded-lg bg-red-800/60 text-red-100 border border-red-400 shadow-sm">
        {error}
      </div>
    )}
    {success && (
      <div className="w-full px-4 py-3 rounded-lg bg-green-800/60 text-green-100 border border-green-400 shadow-sm">
        {success}
      </div>
    )}

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4 pb-4">
      {!isLogin && (
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-3 mt-2 rounded-full border border-white/30 bg-white/10 text-white  placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#459ddc] backdrop-blur-sm"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mt-2 px-5 py-3 rounded-full border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#459ddc] backdrop-blur-sm"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-5 py-3 rounded-full border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#459ddc] backdrop-blur-sm"
      />
      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#459ddc] backdrop-blur-sm"
        />
      )}
    </form>
  </div>

  {/* Fixed Bottom Panel */}
  <div className="fixed bottom-10 left-0 right-0 px-4 flex justify-center z-30">
    <div className="w-full max-w-md space-y-4 backdrop-blur-md bg-black/30 p-4 rounded-2xl shadow-lg">
      <Button
        className="w-full bg-neutral-900/80 hover:bg-neutral-700 text-white gap-3"
        onClick={handleGoogleAuth}
        disabled={isProcessing}
      >
        <FcGoogle className="text-2xl" />
        {isProcessing ? "Please wait..." : `${isLogin ? "Login" : "Sign up"} with Google`}
      </Button>

      <Button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-white text-black hover:bg-gray-200 gap-3"
        disabled={isProcessing || !isFormValid}
      >
        <Mail className="w-6 h-6" />
        {isProcessing
          ? isLogin
            ? "Logging in..."
            : "Signing up..."
          : isLogin
          ? "Login with Email"
          : "Sign up with Email"}
      </Button>

      <div className="text-center text-gray-300 text-base pt-2">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          className="text-[#459ddc] hover:underline cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Login"} here.
        </span>
      </div>

      <div className="flex justify-center text-sm text-gray-500 gap-4 pt-1">
        <a href="#" className="hover:underline">Terms of Use</a>
        <span>|</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </div>
  </div>
</div>

    </div>
  );
  
  
}
