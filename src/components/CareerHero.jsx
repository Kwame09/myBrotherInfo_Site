import React from "react";

const CareerHero = () => {
  return (
    <div className="bg-darkBlue text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Growing Team
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Be part of our mission to provide exceptional service and quality
            products to our customers.
          </p>
          <div className="flex gap-4">
            <a
              href="#positions"
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              View Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
