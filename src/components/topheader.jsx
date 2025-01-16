import React from "react";
import Logo from "../assets/images/logo/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="hidden md:block w-full">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <a href="./"><img src={Logo} alt="logo" className="h-16 w-auto" /></a>
          
          <div className="flex items-center space-x-2">
            <IoLocationOutline className="text-orange-500 text-3xl md:text-4xl flex-shrink-0" />
            <div>
              <p className="font-medium text-base md:text-lg">Takoradi</p>
              <p className="text-sm md:text-base">Sekondi-Takoradi Western Region</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <FiPhoneCall className="text-orange-500 text-3xl md:text-4xl flex-shrink-0" />
            <div>
              <p className="font-medium text-base md:text-lg">00204362233</p>
              <p className="text-sm md:text-base">Toll Free</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <HiOutlineMailOpen className="text-orange-500 text-3xl md:text-4xl flex-shrink-0" />
            <div>
              <p className="font-medium text-base md:text-lg">info@company.com</p>
              <p className="text-sm md:text-base">Online Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;