import React from "react";

const PeopleInfo = ({ imageSrc, description, name }) => {
    return (
      <div className="flex flex-col items-center p-4 max-w-md mx-auto">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 object-cover"
        />
        <p className="text-base md:text-lg text-center md:text-left font-medium mb-4">
          {description}
        </p>
        <h2 className="text-xl md:text-2xl font-light text-orange-500">{name}</h2>
      </div>
    );
  };

export default PeopleInfo;
