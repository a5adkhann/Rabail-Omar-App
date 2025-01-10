import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Collections = () => {
  return (
    <>
      <div className="collections-header container mx-auto text-center py-20">
        <h6 className="heading font-bold text-2xl py-3">
          Discover Women's & Kid's Luxury Eastern Wear
        </h6>
        <div className="flex justify-center w-[calc(100%-4rem/1.0)]">
          <p>
            Welcome to Rabail Omar, where tradition meets elegance in Women's
            Luxury Eastern Wear. Explore our curated collection of exquisite
            Pakistani dresses, perfect for grand events or elevating your
            wardrobe, blending rich traditions with contemporary trends for every
            occasion.
          </p>
        </div>
      </div>

      <div className="collections-section container mx-auto">
        <h1 className="font-bold heading text-2xl">Collections</h1>
        <div className="collections-container flex flex-wrap gap-28">

          <div className="collection-1 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection1.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">RHEA - Festive Collection ‘24 <FaArrowRightLong /></p>
            </div>
          </div>

          <div className="collection-2 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection2.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">Mommy & Me <FaArrowRightLong /></p>
            </div>
          </div>

          <div className="collection-3 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection3.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">Pret Wear <FaArrowRightLong /></p>
            </div>
          </div>

          <div className="collection-4 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection4.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">Kids Eid Wear <FaArrowRightLong /></p>
            </div>
          </div>

          <div className="collection-5 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection5.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">Kids Formal <FaArrowRightLong /></p>
            </div>
          </div>

          <div className="collection-6 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection6.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">Formals <FaArrowRightLong /></p>
            </div>
          </div>

          <div className="collection-7 w-80">
            <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
              <img
                src="./assets/collection7.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="collection-text mt-2">
              <p className="heading flex items-center gap-2">Bridals <FaArrowRightLong /></p>
            </div>
          </div>
        </div>
      </div>

      <div className="explore-collections flex justify-center md:px-0 px-40 leading-10">
        <div>
          <h1 className="text-center font-bold text-2xl py-3 heading">Explore Our Collections</h1>
          <p>Our extensive range of collections is crafted to suit a variety of tastes and occasions:</p>
          <ul>
            <li className="list-disc">Formals: Timeless elegance with intricate designs for weddings or any formal occasion.</li>
            <li className="list-disc">Luxury Prets: Chic, ready-to-wear outfits that blend modern trends with traditional craftsmanship.</li>
            <li className="list-disc">Kids Formals: Beautifully tailored dresses for young girls, perfect for formal events like wedding or Eid.</li>
            <li className="list-disc">Kids Eid Wear: Festive and stylish outfits for young girls to celebrate Eid in elegance.</li>
            <li className="list-disc">Mommy & Me Dresses: Coordinated outfits for mothers and daughters, celebrating a special bond.</li>
            <li className="list-disc">Bridals: Exquisite bridal wear designed to make your special day unforgettable.</li>
          </ul>
        </div>
      </div>

      <div className="all-occasions flex justify-center py-10 md:px-0 px-40 leading-10">
        <div>
          <h1 className="text-center font-bold text-2xl heading">All Occasions</h1>
          <p>Celebrate every occasion in style with our versatile and curated outfits: Casual Wear, Party Wear, Seasonal Collections.</p>
        </div>
      </div>

    </>
  );
};

export default Collections;
