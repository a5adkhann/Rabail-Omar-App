import React from "react";
import { Fade } from "react-awesome-reveal";
import { IoIosArrowDown } from "react-icons/io";

const LuxuryPretCards = () => {

    const luxuryprets = [
        {
            luxurypretID: 1,
            luxurypretImg: "./pret-wear1.jpg",
            luxurypretName: "Pastel Breeze - Kids",
            luxurypretPrice: "Rs. PKR 18,000.00"
        },

        {
            luxurypretID: 2,
            luxurypretImg: "./pret-wear2.jpg",
            luxurypretName: "Pastel Breeze",
            luxurypretPrice: "Rs. PKR 22,000.00"
        },

        {
            luxurypretID: 3,
            luxurypretImg: "./pret-wear3.jpg",
            luxurypretName: "Serene",
            luxurypretPrice: "Rs. PKR 16,000.00"
        },

        {
            luxurypretID: 4,
            luxurypretImg: "./pret-wear4.jpg",
            luxurypretName: "ROSELLA",
            luxurypretPrice: "Rs. PKR 15,000.00"
        },

        {
            luxurypretID: 5,
            luxurypretImg: "./pret-wear5.jpg",
            luxurypretName: "CELESTINE",
            luxurypretPrice: "Rs. PKR 15,000.00"
        },

        {
            luxurypretID: 6,
            luxurypretImg: "./pret-wear6.jpg",
            luxurypretName: "SERENITY",
            luxurypretPrice: "Rs. PKR 35,000.00"
        },

        {
            luxurypretID: 7,
            luxurypretImg: "./pret-wear7.jpg",
            luxurypretName: "Prismere",
            luxurypretPrice: "Rs. PKR 20,000.00 "
        },

        {
            luxurypretID: 8,
            luxurypretImg: "./pret-wear8.jpg",
            luxurypretName: "BLUSH",
            luxurypretPrice: "Rs. PKR 18,000.00"
        }

    ]


  return (
    <>
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="flex flex-col items-start justify-between gap-4 px-5 pb-8 md:flex-row md:items-center md:px-10 lg:px-20 pret-wear-card-container md:gap-0">
        <div className="w-full filter-container md:w-auto">
          <p className="flex items-center gap-2 text-sm md:text-base">
            Filter: <span>Availability</span> <IoIosArrowDown />
            <span>Price</span> <IoIosArrowDown />
          </p>
        </div>

        <div className="w-full sort-container md:w-auto">
          <p className="flex items-center gap-2 text-sm md:text-base">
            Sort by: <span>Best selling</span> <IoIosArrowDown />
            <span>12 Products</span>
          </p>
        </div>
      </div>
      </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8 luxury-pret-cards-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {luxuryprets.map((luxurypret) => (
          <div className="formal-card">
            <div className="overflow-hidden shadow-md bridal-img">
              <img
                src={luxurypret.luxurypretImg}
                alt="Scarlet Dream"
                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="mt-4 bridal-text">
              <p className="text-lg font-semibold">{luxurypret.luxurypretName}</p>
              <p className="text-sm text-gray-500">{luxurypret.luxurypretPrice}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      </Fade>
    </>
  );
};

export default LuxuryPretCards;
