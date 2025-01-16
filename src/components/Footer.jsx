import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-darkBlue py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="./"><img src={Logo} alt="logo" className="h-16 w-auto" /></a>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatibus, reprehenderit.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white border-b-2 border-orange-500 w-fit pb-1">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-orange-500 transition-colors">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white border-b-2 border-orange-500 w-fit pb-1">
              SERVICES
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link1">Retail Shopping</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link2">Bulk Purchase</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link3">Home Delivery</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link4">24/7 Support</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white border-b-2 border-orange-500 w-fit pb-1">
              CONTACT
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link1">Help Center</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link2">Support Community</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link3">FAQ</a>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <a href="#link4">Our Partners</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8 pt-8 border-t border-gray-800">
          <p>&copy; 2025 MyBrother. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;