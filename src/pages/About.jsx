import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="
        min-h-screen
        bg-[var(--bg-color)]
        text-[var(--text-color)]
        py-10 px-4 sm:px-6 lg:px-20
        transition-all duration-300
      "
    >
      <div
        className="
          max-w-5xl mx-auto
          bg-[var(--card-color)]
          border border-[var(--border-color)]
          rounded-2xl shadow-lg
          p-8 space-y-8
        "
      >
        <h1 className="text-4xl font-bold text-center">About MINIhard</h1>

        <p className="text-lg">
          Welcome to{" "}
          <span className="font-semibold text-yellow-600">MINIhard</span>, Your
          one-stop destination for the latest and greatest in fashion, beauty,
          electronics, health, and home & kitchen. From trend-setting styles to
          everyday essentials, we bring you premium products and unbeatable
          service—all in one place.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-600">
            Our Mission
          </h2>

          <p className="text-base">
            At MINIhard, our mission is to bring quality and innovation across
            fashion, beauty, electronics, health, and home & kitchen to
            everyone. We’re passionate about connecting people with products
            that enhance everyday living—offering great value, reliable service,
            and fast delivery you can trust.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-600">
            Why Choose MINIhard?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>A wide range of premium products for every lifestyle</li>
            <li>Quick and secure delivery you can rely on</li>
            <li>Friendly support whenever you need help</li>
            <li>Smooth, simple, and stress-free shopping</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-600">Our Vision</h2>

          <p className="text-base">
            We envision a future where quality, style, and innovation elevate
            everyday living. At MINIhard, we strive to stay ahead of trends,
            offering thoughtfully curated products across fashion, beauty,
            electronics, health, and home & kitchen that are both practical and
            affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">
            Join MINIhard Family
          </h3>

          <p className="mb-4">
            Whether you’re into fashion, beauty, electronics, health, or home &
            kitchen, MINIhard has something for everyone—bringing you products
            that are stylish, practical, and designed for everyday living.
          </p>

          <Link to={"/products"}>
            <button
              className="
                bg-gradient-to-r
                from-yellow-400 to-yellow-900
                hover:from-yellow-900 hover:to-yellow-400
                transition-all duration-300
                text-white
                px-6 py-2
                rounded-xl
                cursor-pointer
              "
            >
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
