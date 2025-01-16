import React from "react";

const CardOne = ({ number, icon, title, description }) => {
  return (
    <div className="relative border border-gray-300 p-6 md:p-10 mb-8">
      <p className="absolute text-gray-300 top-0 right-0 p-2 md:p-5 text-sm md:text-xl">{number}</p>
      <div className="flex flex-col items-start">
        <div className="mb-4 text-5xl md:text-7xl text-orange-500">{icon}</div>
        <h3 className="font-semibold mb-2 text-xl md:text-2xl">{title}</h3>
        <p className="w-full md:w-4/6 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardOne;
