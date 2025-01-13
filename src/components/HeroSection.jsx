import React from "react";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="banner-hero-area relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute flex flex-wrap justify-center px-4 py-2 space-y-3 space-x-0 bg-white transform -translate-x-1/2 bottom-6 left-1/2 md:flex-nowrap md:space-x-6 md:space-y-0 md:px-8 md:py-4 shadow-lg">
          <button className="w-full px-6 py-3 text-sm font-medium border border-black md:w-auto md:px-12 md:py-3 md:text-base hover:shadow-xl transition-all">
            Shop Kids
          </button>
          <button className="w-full px-6 py-3 text-sm font-medium border border-black md:w-auto md:px-12 md:py-3 md:text-base hover:shadow-xl transition-all">
            Shop Women
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default HeroSection;
