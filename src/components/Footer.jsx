import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">CoolGhar</h2>
          <p className="text-sm text-gray-300">
            We provide reliable cooling and appliance services right at your home.
            Stay cool with CoolGhar.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-white">
            <a href="https://www.facebook.com/share/p/16Y3yfxsSr/?mibextid=qi2Omg"><FaFacebookF className="hover:text-blue-300" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-300" /></a>
            <a href="#"><FaInstagram className="hover:text-blue-300" /></a>
            <a href="https://www.linkedin.com/in/umair-siddique-39827b30a"><FaLinkedinIn className="hover:text-blue-300" /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-2">Get the latest blog tips and updates.</p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 rounded text-white text-sm mb-2"
          />
          <button className="w-full bg-white text-blue-900 py-2 rounded font-semibold text-sm hover:bg-blue-100 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} CoolGhar. All rights reserved.
      </div>
    </footer>
  );
}
