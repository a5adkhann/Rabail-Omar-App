import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiHandbagSimple } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchBox = () => {
    setIsSearchBoxOpen(!isSearchBoxOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='flex-wrap items-center hidden py-10 nav-topbar md:flex justify-evenly'>
        <div>
          <CiSearch className='text-2xl cursor-pointer' onClick={toggleSearchBox} />
        </div>
        <div>
          <NavLink to="/">
          <img src="./logo.png" alt="Logo" className="h-32 w-36" />
          </NavLink>
        </div>
        <div>
          <p className='flex items-center'>
            PKR RS | Pakistan <IoIosArrowDown /> <PiHandbagSimple className='text-xl' />
          </p>
        </div>
      </div>

      <div className="pb-8 navbar">
        {/* Desktop View */}
        <div className='desktop_view'>
          <ul className='justify-center hidden gap-10 md:flex'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bridals"
                className={({ isActive }) =>
                  `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                Bridals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formals"
                className={({ isActive }) =>
                  `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                Formals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mommy-and-me"
                className={({ isActive }) =>
                  `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                Mommy and Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/luxury-pret"
                className={({ isActive }) =>
                  `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                Luxury Pret
              </NavLink>
            </li>
            <li className="hover:border-b-2 hover:border-black">
              RB Kids <IoIosArrowDown className='inline' />
            </li>
            <li className="hover:border-b-2 hover:border-black">
              Gifts <IoIosArrowDown className='inline' />
            </li>
            <li className="hover:border-b-2 hover:border-black">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between px-10 mobile_view md:hidden">
          <div>
            <RxHamburgerMenu
              className='text-2xl cursor-pointer'
              onClick={toggleMobileMenu}
            />
          </div>
          <div className='navbar-img'>
            <img src="./logo.png" alt="Logo" />
          </div>
          <div>
            <CiSearch className='inline text-2xl cursor-pointer me-4' onClick={toggleSearchBox} />
            <PiHandbagSimple className='inline text-2xl' />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <button
            className="text-2xl font-bold text-gray-700"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <NavLink
              to="/"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bridals"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              Bridals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formals"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              Formals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mommy-and-me"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              Mommy and Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/luxury-pret"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              Luxury Pret
            </NavLink>
          </li>
          <li>RB Kids</li>
          <li>Gifts</li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-black ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Search Box from Top */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSearchBoxOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex items-center justify-between p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            className="text-2xl font-bold"
            onClick={toggleSearchBox}
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
