import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FormalsCards = () => {

    const formals = [
        {
            formalID: 1,
            formalImg: "./formals1.jpg",
            formalName: "Cobalt",
            formalPrice: "Rs. 85, 000.000 PKR"
        },

        {
            formalID: 2,
            formalImg: "./formals2.jpg",
            formalName: "Jade",
            formalPrice: "Rs. 95, 000.000 PKR"
        },

        {
            formalID: 3,
            formalImg: "./formals3.jpg",
            formalName: "Rosette",
            formalPrice: "Rs. 80, 000.000 PKR"
        },

        {
            formalID: 4,
            formalImg: "./formals4.jpg",
            formalName: "Orchid",
            formalPrice: "Rs. 85, 000.000 PKR"
        },

        {
            formalID: 5,
            formalImg: "./formals5.jpg",
            formalName: "Garnet",
            formalPrice: "Rs. 85, 000.000 PKR"
        },

        {
            formalID: 6,
            formalImg: "./formals6.jpg",
            formalName: "Velour",
            formalPrice: "Rs. 85, 000.000 PKR"
        },

        {
            formalID: 7,
            formalImg: "./formals7.jpg",
            formalName: "Mistique",
            formalPrice: "Rs. 75, 000.000 PKR"
        },

        {
            formalID: 8,
            formalImg: "./formals8.jpg",
            formalName: "Rose Quartz",
            formalPrice: "Rs. 75, 000.000 PKR"
        },

        {
            formalID: 9,
            formalImg: "./formals9.jpg",
            formalName: "Marrgold",
            formalPrice: "Rs. 75, 000.000 PKR"
        },

        {
            formalID: 10,
            formalImg: "./formals10.jpg",
            formalName: "Isabella",
            formalPrice: "Rs. 70, 000.000 PKR"
        },

        {
            formalID: 11,
            formalImg: "./formals11.jpg",
            formalName: "Chantelle",
            formalPrice: "Rs. 80, 000.000 PKR"
        },

        {
            formalID: 12,
            formalImg: "./formals12.jpg",
            formalName: "Bliss",
            formalPrice: "Rs. 75, 000.000 PKR"
        }
    ]


  return (
    <>
      <div className="px-5 py-10 md:px-10 lg:px-20 formals-header">
        <h2 className="text-lg font-bold md:text-2xl heading">Formals</h2>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 px-5 pb-8 md:flex-row md:items-center md:px-10 lg:px-20 formals-card-container md:gap-0">
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

      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8 bridal-cards-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {formals.map((formal) => (
          <div className="formal-card">
            <div className="overflow-hidden shadow-md bridal-img">
              <img
                src={formal.formalImg}
                alt="Scarlet Dream"
                className="object-cover w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="mt-4 bridal-text">
              <p className="text-lg font-semibold">{formal.formalName}</p>
              <p className="text-sm text-gray-500">{formal.formalPrice}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormalsCards;
