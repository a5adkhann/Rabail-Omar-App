import React from "react";
import { Fade } from "react-awesome-reveal";
import { IoIosArrowDown } from "react-icons/io";

const MommyCards = () => {

  const mommySections = [
    {
      mommyID: 1,
      mommyImg: "./mommy1.jpg",
      mommyName: "Crushed Cascade",
      mommyPrice: "Rs. PKR 20,000.00",
    },

    {
      mommyID: 2,
      mommyImg: "./mommy2.jpg",
      mommyName: "Magnolia",
      mommyPrice: "Rs. PKR 11,000.00",
    },

    {
      mommyID: 3,
      mommyImg: "./mommy3.jpg",
      mommyName: "Shimmering streaks",
      mommyPrice: "Rs. PKR 50,000.00",
    },

    {
      mommyID: 4,
      mommyImg: "./mommy4.jpg",
      mommyName: "Crushed Flounce",
      mommyPrice: "Rs. PKR 13,000.00",
    },

    {
      mommyID: 5,
      mommyImg: "./mommy5.jpg",
      mommyName: "Oasis",
      mommyPrice: "Rs. PKR 11,000.00",
    },

    {
      mommyID: 6,
      mommyImg: "./mommy6.jpg",
      mommyName: "ISADORA",
      mommyPrice: "Rs. PKR 12,000.00",
    },

    {
      mommyID: 7,
      mommyImg: "./mommy7.jpg",
      mommyName: "ALITA",
      mommyPrice: "Rs. PKR 12,000.00",
    },

    {
      mommyID: 8,
      mommyImg: "./mommy8.jpg",
      mommyName: "Royal Blue Luxe Duo",
      mommyPrice: "Rs. PKR 14,000.00",
    },
  ];

  return (
    <>
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="px-5 py-10 md:px-10 lg:px-20 formals-header">
        <h2 className="text-lg font-bold md:text-2xl heading">Mommy & Me</h2>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 px-5 pb-8 md:flex-row md:items-center md:px-10 lg:px-20 mommy-card-container md:gap-0">
        <div className="w-full filter-container md:w-auto">
          <p className="flex items-center gap-2 text-sm md:text-base">
            Filter: <span>Availability</span> <IoIosArrowDown />
            <span>Price</span> <IoIosArrowDown />
          </p>
        </div>

        <div className="w-full sort-container md:w-auto">
          <p className="flex items-center gap-2 text-sm md:text-base">
            Sort by: <span>Best selling</span> <IoIosArrowDown />
            <span>8 Products</span>
          </p>
        </div>
      </div>
      </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8 bridal-cards-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {mommySections.map((mommy) => (
          <div className="mommy-card">
            <div className="overflow-hidden shadow-md bridal-img">
              <img
                src={mommy.mommyImg}
                alt="Scarlet Dream"
                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="mt-4 bridal-text">
              <p className="text-lg font-semibold">{mommy.mommyName}</p>
              <p className="text-sm text-gray-500">{mommy.mommyPrice}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      </Fade>
    </>
  );
};

export default MommyCards;
