import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-black via-zinc-900 to-slate-900 text-white px-6">
      <div className="relative z-10 max-w-md text-center backdrop-blur-md bg-white/5 rounded-2xl p-10 shadow-2xl border border-white/10">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold text-white tracking-widest mb-4"
        >
          404
        </motion.h1>

        <p className="text-white/80 mb-6 text-lg">Oops! The page you're looking for doesn’t exist.</p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-[#459ddc] text-white font-medium hover:bg-[#357fb8] transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>

      {/* Glitch background text */}
      <h1 className="absolute text-[25vw] font-extrabold text-white/5 pointer-events-none select-none z-0">
        ERROR
      </h1>
    </div>
  );
};

export default ErrorPage;
