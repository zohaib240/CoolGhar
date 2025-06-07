import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center select-none cursor-pointer">
          <div className="text-3xl font-bold flex space-x-1">
            <span className="text-blue-600">C</span>
            <span className="text-black">G</span>
          </div>
          <div className="text-xs font-semibold tracking-wide leading-tight">
            <span className="text-blue-600">cool</span> <span className="text-black">ghar</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-blue-700">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/services" className="hover:text-black transition">Services</Link>
          <Link to="/blogs" className="hover:text-black transition">Blogs</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 border-b border-gray-200 text-blue-700 hover:text-black transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 border-b border-gray-200 text-blue-700 hover:text-black transition"
          >
            Services
          </Link>
          <a
            href="/blogs"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 border-b border-gray-200 text-blue-700 hover:text-black transition"
          >
            Blogs
          </a>
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-blue-700 hover:text-black transition"
          >
            Contact
          </a>
        </div>
      )}

      {/* Bottom ticker */}
      <div className="bg-blue-50 py-1 px-4 overflow-hidden text-center">
        <p className="text-xs sm:text-sm md:text-base text-blue-700 font-medium">
          Popular Services: AC Repair | Fridge Service | Chiller Installation | Gas Filling | Cooling Maintenance | Emergency Visits
        </p>
      </div>
    </header>
  );
}
