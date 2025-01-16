import React, { useState } from "react";
import Logo from "../assets/images/logo/logo.png";
import { NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "white",
    };
  };

  return (
    <>
      {/* Mobile Nav */}
      <div className="md:hidden max-md:bg-white">
        <div className="flex justify-between items-center p-4 md:bg-orange-500">
          <img src={Logo} alt="logo" className="w-24 h-auto" />
          {isOpen ? (
            <FaTimes onClick={toggleMenu} className="text-darkBlue text-3xl" />
          ) : (
            <VscThreeBars
              onClick={toggleMenu}
              className="text-darkBlue text-3xl"
            />
          )}
        </div>
        {isOpen && (
          <div className="bg-orange-500 py-4">
            <NavLink
              to="/"
              style={navLinkStyles}
              className="block px-4 py-2 hover:bg-orange-600"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              style={navLinkStyles}
              className="block px-4 py-2 hover:bg-orange-600"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              style={navLinkStyles}
              className="block px-4 py-2 hover:bg-orange-600"
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/career"
              style={navLinkStyles}
              className="block px-4 py-2 hover:bg-orange-600"
              onClick={toggleMenu}
            >
              Career
            </NavLink>
            <NavLink
              to="/contact-us"
              style={navLinkStyles}
              className="block px-4 py-2 hover:bg-orange-600"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:block bg-orange-500">
        <div className="container mx-auto px-10">
          <div className="flex w-1/2 text-xl justify-around items-center py-4">
            <NavLink
              to="/"
              style={navLinkStyles}
              className="text-white hover:text-black transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              style={navLinkStyles}
              className="text-white hover:text-black transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              style={navLinkStyles}
              className="text-white hover:text-black transition-colors"
            >
              Services
            </NavLink>
            <NavLink
              to="/career"
              style={navLinkStyles}
              className="text-white hover:text-black transition-colors"
            >
              Career
            </NavLink>
            <NavLink
              to="/contact-us"
              style={navLinkStyles}
              className="text-white hover:text-black transition-colors"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
