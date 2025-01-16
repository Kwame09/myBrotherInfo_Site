import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import image1 from "../assets/images/homeImg/image1.jpeg";
import image2 from "../assets/images/homeImg/img2.jpg";

const images = [
  {
    src: image1,
    text: "We Are <strong>Leading</strong> Supermarket of In Town",
  },
  { src: image2, text: "We have <strong>High</strong> Quality Product" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="relative w-full flex-shrink-0" key={index}>
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-[80vh] object-cover"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl lg:text-6xl w-full text-center px-4 py-2 "
              dangerouslySetInnerHTML={{ __html: image.text }}
            ></h1>
          </div>
        ))}
      </div>

      <button
        className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-5 hover:text-white text-2xl md:text-3xl lg:text-3xl hover:bg-orange-500"
        onClick={prevSlide}
      >
        <IoArrowBack />
      </button>
      <button
        className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-5 hover:text-white text-2xl md:text-3xl lg:text-3xl hover:bg-orange-500"
        onClick={nextSlide}
      >
        <IoArrowForward />
      </button>

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 lg:space-x-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-1 md:w-8 lg:w-10 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-white"
            } cursor-pointer`}
            onClick={() => setSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
