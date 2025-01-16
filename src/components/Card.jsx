import React from "react";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Card = ({ image, name, position }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
          <a href="#" className="bg-white text-orange-500 p-2 rounded-sm hover:bg-orange-500 hover:text-white transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white text-orange-500 p-2 rounded-sm hover:bg-orange-500 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="bg-white text-orange-500 p-2 rounded-sm hover:bg-orange-500 hover:text-white transition-colors">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-black text-xl font-bold">{name}</h2>
        <p className="text-orange-500">{position}</p>
      </div>
    </div>
  );
};

export default Card;