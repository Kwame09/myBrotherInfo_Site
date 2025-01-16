import React from "react";

const SubscribeNewsLetter = () => {
    return (
      <div className="w-full bg-orange-500 py-8 md:py-10 px-4 md:px-8">
      
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white text-center md:text-left mb-6 md:mb-8">
            SUBSCRIBE TO NEWSLETTER
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:justify-between md:gap-8">
            <p className="text-white font-light text-base md:text-lg max-w-2xl text-center md:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
              atque excepturi, aut placeat eius quod quaerat commodi natus veritatis
              deleniti, doloribus ullam ratione.
            </p>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-2 border-white text-white px-4 py-2 w-full md:w-64 focus:outline-none placeholder-white/70 text-sm md:text-base"
              />
              <button className="bg-black text-white px-4 md:px-6 py-2 font-light hover:bg-black/80 transition-colors whitespace-nowrap text-sm md:text-base">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SubscribeNewsLetter;