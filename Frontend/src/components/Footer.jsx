import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#214e6e]  to-black text-neutral-200 px-6 py-20 mt-20">

    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
      <div>
        <h2 className="text-white text-2xl font-semibold mb-3">Memory Lane</h2>
        <p className="text-sm leading-relaxed">
          Your smart audio companion. Store, search, chat, and rediscover your voice notes, meetings, and more — all in one hub.
        </p>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-white transition">Home</a></li>
          <li><a href="/process" className="hover:text-white transition">Process</a></li>
          <li><a href="/about" className="hover:text-white transition">About</a></li>
          <li><a href="/team" className="hover:text-white transition">Team</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-3">Stay in the Loop</h3>
        <p className="text-sm mb-3">Join our newsletter for updates.</p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

  <div className="border-t border-neutral-800 mt-28 pt-8 text-xs text-center">
    © {new Date().getFullYear()} Memory Lane. All rights reserved.
  </div>
</footer>

  )
}

export default Footer