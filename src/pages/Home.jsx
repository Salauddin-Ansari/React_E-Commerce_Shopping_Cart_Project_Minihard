import React from "react";
import Carousel from "../components/Carousel";
import MidBanner from "../components/MidBanner";
import Features from "../components/Features";

const Home = () => {
  return (
    <div
      className="
      overflow-hidden 
      bg-[var(--bg-color)]  // DARK MODE ADDED
      text-[var(--text-color)] // DARK MODE ADDED
    "
    >
      <Carousel />
      <MidBanner />
      <Features />
    </div>
  );
};

export default Home;
