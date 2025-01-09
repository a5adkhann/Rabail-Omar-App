import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiHandbagSimple } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
        <div className='nav-topbar flex justify-evenly items-center py-10'>
            <div>
                <CiSearch className='text-2xl'/>
            </div>
            <div>
                <img src="./assets/logo.png" alt="" />
            </div>
            <div>
                <p className='flex items-center'>PKR RS | Pakistan <IoIosArrowDown /> <PiHandbagSimple className='text-xl'/></p>
            </div>
        </div>

        <div className="navbar pb-8">
            <div>
                <ul className='flex justify-center gap-10'>
                    <li>Home</li>
                    <li>Bridals</li>
                    <li>Formals</li>
                    <li>Mommy and Me</li>
                    <li>Luxury Pret</li>
                    <li>RB Kids <IoIosArrowDown className='inline'/></li>
                    <li>Gifts <IoIosArrowDown className='inline'/></li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar