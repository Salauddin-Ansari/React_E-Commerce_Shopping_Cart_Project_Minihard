import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#37475a] via-[#232f3e] to-[#131921] py-7 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Get in Touch with <span className="text-yellow-600">MINIhard</span>
          </h2>
          <p className="text-white/80 mt-3">
            We’re here to help you anytime — let’s connect 🚀
          </p>
        </div>

        {/* Main Container */}
        <div className="grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8">
          {/* Left Section */}
          <div className="text-white space-y-8">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <p className="text-white/80">
              Have questions about orders, products, or anything else? Reach out
              anytime.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl hover:scale-105 transition">
                <MapPin className="text-yellow-300" />
                <p>564 Boring Canal Road, Patna, BR-800001</p>
              </div>

              <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl hover:scale-105 transition">
                <Mail className="text-yellow-300" />
                <p>support@MINIhard.com</p>
              </div>

              <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl hover:scale-105 transition">
                <Phone className="text-yellow-300" />
                <p>+91 9128661446</p>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}

          <form
            className="
    bg-white
    dark:bg-[var(--card-color)]
    rounded-2xl p-6 space-y-5 shadow-lg
  "
          >
            <h3
              className="
      text-xl font-semibold text-gray-800
      dark:text-[var(--text-color)]
    "
            >
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="
      w-full px-4 py-3 border rounded-xl
      focus:ring-2 focus:ring-pink-500 outline-none
      dark:bg-[var(--bg-color)]
      dark:text-[var(--text-color)]
      dark:border-[var(--border-color)]
    "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
      w-full px-4 py-3 border rounded-xl
      focus:ring-2 focus:ring-pink-500 outline-none
      dark:bg-[var(--bg-color)]
      dark:text-[var(--text-color)]
      dark:border-[var(--border-color)]
    "
            />

            <textarea
              rows="4"
              placeholder="Your Message..."
              className="
      w-full px-4 py-3 border rounded-xl
      focus:ring-2 focus:ring-pink-500 outline-none
      dark:bg-[var(--bg-color)]
      dark:text-[var(--text-color)]
      dark:border-[var(--border-color)]
    "
            ></textarea>

            <button
              type="submit"
              className="
      w-full
      bg-gradient-to-r from-yellow-400 to-yellow-900
      hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
      transition-all duration-300
      text-white py-3 rounded-xl font-semibold
      hover:scale-105 cursor-pointer
    "
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
