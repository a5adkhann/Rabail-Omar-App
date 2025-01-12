import React from "react";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <>
    <Fade direction="up" duration={1000} triggerOnce>
      <div>
        <div className="banner-hero-area relative h-[100vh]">
          <div className="absolute flex flex-wrap justify-center px-6 py-4 space-x-4 transform -translate-x-1/2 bg-white hero-btns bottom-4 left-1/2 md:space-x-4 md:py-8 md:px-12">
            <button className="px-8 py-2 text-sm border border-black md:text-base md:px-12 md:py-2 hover:shadow-xl">
              Shop Kids
            </button>
            <button className="px-8 py-2 text-sm border border-black md:text-base md:px-12 md:py-2 hover:shadow-xl">
              Shop Women
            </button>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};

export default HeroSection;
