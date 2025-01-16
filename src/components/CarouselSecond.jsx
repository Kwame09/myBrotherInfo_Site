import React, { useState, useEffect } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import image1 from "../assets/images/homeImg/image1.jpeg";
import image2 from "../assets/images/homeImg/img2.jpg";
import image3 from "../assets/images/homeImg/smilingWorker.jpg";
import image4 from "../assets/images/homeImg/image1.jpeg";
import image5 from "../assets/images/homeImg/img2.jpg";
import image6 from "../assets/images/homeImg/smilingWorker.jpg";

const images = [
  {
    src: image1,
    text: "We Are <strong>Leading</strong> Supermarket of In Town",
  },
  {
    src: image2,
    text: "We have <strong>High</strong> Quality Product",
  },
  {
    src: image3,
    text: "Building <strong>Factory</strong> 1",
  },
  {
    src: image4,
    text: "Building <strong>Factory</strong> 2",
  },
  {
    src: image5,
    text: "Building <strong>Factory</strong> 3",
  },
  {
    src: image6,
    text: "Building <strong>Factory</strong> 4",
  },
];

const CarouselSecond = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Math.ceil(images.length / 3)) % Math.ceil(images.length / 3)
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3)
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden bg-gray-100">
        <div
          className="flex transition-transform duration-300 ease-in-out space-x-2 md:space-x-4"
          style={{ transform: `translateX(-${currentIndex * 100 / Math.ceil(images.length / 3)}%)` }}
        >
          {images.map((image, index) => (
            <div className="relative w-full md:w-[calc(33.33%-0.5rem)] flex-shrink-0" key={index}>
              <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden group">
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-end items-start p-4 transition-opacity duration-500">
                  <h3 className="text-orange-500 text-lg">FACTORY</h3>
                  <h2 className="text-white text-xl" dangerouslySetInnerHTML={{ __html: image.text }}></h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black py-4 md:py-5 lg:py-4 px-4 md:px-5 lg:px-2 hover:text-white text-2xl md:text-3xl lg:text-xl hover:bg-orange-500"
          onClick={prevSlide}
        >
          <IoArrowBack />
        </button>
        <button
          className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black py-4 md:py-5 lg:py-4 px-4 md:px-5 lg:px-2 hover:text-white text-2xl md:text-3xl lg:text-xl hover:bg-orange-500"
          onClick={nextSlide}
        >
          <IoArrowForward />
        </button>
      </div>

      <div className="mt-4 flex justify-center space-x-1 md:space-x-2 lg:space-x-3">
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-1 md:w-6 lg:w-8 rounded-full border border-gray-300 ${
              currentIndex === index ? "bg-orange-500" : "bg-white"
            } cursor-pointer`}
            onClick={() => setSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSecond;
