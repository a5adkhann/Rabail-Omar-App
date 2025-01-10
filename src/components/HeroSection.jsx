import React from "react";

const HeroSection = () => {
  return (
    <>
      <div>
        <div className="banner-hero-area relative h-[400px]">
          <div className="hero-btns absolute bottom-4 bg-[#FFFFFF] py-8 px-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button className="px-12 py-2 border border-black hover:shadow-xl">
              Shop Kids
            </button>
            <button className="px-12 py-2 border border-black hover:shadow-xl">
              Shop Women
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
