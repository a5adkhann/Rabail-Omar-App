import React from "react";
import { IoIosArrowDown, IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="container px-6 py-12 mx-auto sm:px-12 md:px-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex justify-center footer-img sm:justify-start">
            <img src="./logo.png" alt="Logo" className="w-48 h-44" />
          </div>
          <div>
            <p className="py-3 text-lg font-semibold">Information</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Return & Exchange Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="py-3 text-lg font-semibold">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-600">
                  Formals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Mommy & Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Luxury Pret
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  RB Kids
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="py-3 text-lg font-semibold">Contact Info</p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                rabailomar@gmail.com
              </li>
              <li>
                <span className="font-semibold">Address:</span> C-6, Block-4A,Gulshan e Iqbal, Karachi, Pakistan
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +92 332 3249818 <br />
                <span className="font-semibold">Phone:</span> +92 306 2430622 <br />
                <span className="font-semibold">Phone:</span> +92 332 2902327
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container px-6 py-12 mx-auto subscribtion-emails sm:px-12 md:px-24">
        <div className="flex flex-wrap items-center justify-between">
          {/* Subscribe Section */}
          <form action="" className="w-full sm:w-1/2 md:w-1/3">
            <div className="form-fields-divider">
              <label htmlFor="">Subscribe to our emails</label>
              <br />
              <div className="relative">
                <input
                  className="w-full px-5 py-2 pr-12 mt-3 border border-black focus:outline-none"
                  type="text"
                  placeholder="Email"
                />
                <FaArrowRightLong className="absolute text-sm text-black transform -translate-y-1/2 right-3 top-8" />
              </div>
            </div>
          </form>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4 text-lg sm:mt-0">
            <IoLogoFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>

      <hr />

      <div className="container px-6 py-12 mx-auto subscribtion-emails sm:px-12 md:px-24">
        {/* Country/Region Select Section */}
        <form action="">
          <div className="form-fields-divider">
            <label htmlFor="">Country/region</label>
            <br />
            <select
              name=""
              id=""
              className="w-full px-10 py-2 pr-12 mt-3 border border-black appearance-none focus:outline-none sm:w-1/2 md:w-1/3"
            >
              <option value="">PKR Rs | Pakistan</option>
            </select>
          </div>
        </form>
      </div>

      <div className="py-4 text-center">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
