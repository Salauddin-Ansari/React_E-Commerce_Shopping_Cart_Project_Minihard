import React from "react";
import Banner from "../assets/Banner.jpg";
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div
      className="
        bg-gray-100
        dark:bg-[var(--bg-color)]
        md:py-24
        transition-all duration-300
      "
    >
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[660px]"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Where Style Meets Innovation and Comfort
            </h1>

            <p className="text-lg md:text-xl mb-6">
              Discover top trends in fashion, beauty, tech, and home essentials
              — all at unbeatable prices with fast delivery.
            </p>

            <Link to={"/products"}>
              <button
                className="
                  bg-gradient-to-r from-yellow-400 to-yellow-900
                  hover:from-yellow-900 hover:to-yellow-400
                  transition duration-300 hover:scale-105
                  text-white font-semibold
                  md:py-3 md:px-6 px-4 py-2
                  rounded-lg cursor-pointer
                "
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
