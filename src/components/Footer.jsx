import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
      py-10

      bg-[var(--card-color)] 
      text-[var(--text-color)] 
    "
    >
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <h1 className="font-bold text-2xl font-serif tracking-wider">
              <span className="text-3xl text-red-500">MINI</span>hard
            </h1>
          </Link>

          <p className="mt-2 text-sm">
            Where Style Meets Innovation and Comfort
          </p>
          <p className="mt-2 text-sm">
            564 Boring Canal Road, Patna, BR-800001
          </p>
          <p className="text-sm">Email: support@MINIhard.com</p>
          <p className="text-sm">Phone: (+91)-91286**446</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-lg">
            <FaFacebook />
            <FaInstagram />
            <FaX />
            <FaPinterest />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and more
          </p>

          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address..."
              className="
              w-full p-2 rounded-l-md focus:outline-none

              bg-[var(--bg-color)] // DARK MODE ADDED
              text-[var(--text-color)] // DARK MODE ADDED
              border border-[var(--border-color)] // DARK MODE ADDED
            "
            />

            <button
              type="submit"
              className="
              bg-gradient-to-r from-yellow-400 to-yellow-900 
              hover:from-yellow-900 hover:to-yellow-400 
              transition-all duration-300 transform hover:scale-105 
              text-white px-4 py-2 cursor-pointer rounded-r-md
            "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div
        className="
        mt-8 py-4 pt-6 text-center text-sm

        border-t border-[var(--border-color)] // DARK MODE ADDED
      "
      >
        <p>
          &copy; {new Date().getFullYear()} <span>MINIhard</span>. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;