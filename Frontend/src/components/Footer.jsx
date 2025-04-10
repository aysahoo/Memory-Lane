import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#214e6e] to-black text-neutral-200 px-8 py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">Memory Lane</h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Your smart audio companion. Store, search, chat, and rediscover your voice notes, meetings, and more — all in one hub.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/process" className="hover:text-white transition">Process</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/team" className="hover:text-white transition">Team</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Stay in the Loop</h3>
          <p className="text-sm mb-3 text-neutral-400">Join our newsletter for updates.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 text-sm focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-16 pt-6 text-xs text-center text-neutral-500">
        © {new Date().getFullYear()} Memory Lane. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
