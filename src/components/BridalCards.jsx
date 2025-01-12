import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BridalCards = () => {

  const bridals = [
    {
      bridalID: 1,
      bridalImg: "./bridal1.jpg",
      bridalName: "Scarlet Dream",
      bridalPrice: "Rs. 250, 000.00 PKR"
    },

    {
      bridalID: 2,
      bridalImg: "./bridal2.jpg",
      bridalName: "Merlot Dream",
      bridalPrice: "PKR 350,000.00"
    },

    {
      bridalID: 3,
      bridalImg: "./bridal3.jpg",
      bridalName: "Golden Dream",
      bridalPrice: "PKR 350,000.00"
    }
  ]
  return (
    <>
      <div className="px-5 py-10 md:px-10 lg:px-20 bridals-header">
        <h2 className="text-lg font-bold md:text-2xl heading">Bridals</h2>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 px-5 pb-8 md:flex-row md:items-center md:px-10 lg:px-20 bridals-card-container md:gap-0">
        <div className="w-full filter-container md:w-auto">
          <p className="flex items-center gap-2 text-sm md:text-base">
            Filter: <span>Availability</span> <IoIosArrowDown />
            <span>Price</span> <IoIosArrowDown />
          </p>
        </div>

        <div className="w-full sort-container md:w-auto">
          <p className="flex items-center gap-2 text-sm md:text-base">
            Sort by: <span>Best selling</span> <IoIosArrowDown />
            <span>3 Products</span>
          </p>
        </div>
      </div>

      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8 bridal-cards-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {bridals.map((bridal) => (
          <div className="bridal-card">
            <div className="overflow-hidden shadow-md bridal-img">
              <img
                src={bridal.bridalImg}
                alt="Scarlet Dream"
                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="mt-4 bridal-text">
              <p className="text-lg font-semibold">{bridal.bridalName}</p>
              <p className="text-sm text-gray-500">{bridal.bridalPrice}</p>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default BridalCards;
