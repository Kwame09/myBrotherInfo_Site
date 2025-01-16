import React from "react";
import { FaShoppingCart, FaUserClock, FaShippingFast, FaStore } from "react-icons/fa";
import ServiceHero from "../components/ServiceHero";
import ServiceCard from "../components/ServiceCard";
import BulkPurchase from "../components/BulkPurchase";

const services = [
  {
    icon: <FaShoppingCart />,
    title: "Retail Shopping",
    description: "Wide selection of quality products for your daily needs"
  },
  {
    icon: <FaUserClock />,
    title: "24/7 Service",
    description: "Always open to serve you round the clock"
  },
  {
    icon: <FaShippingFast />,
    title: "Home Delivery",
    description: "Quick and reliable delivery to your doorstep"
  },
  {
    icon: <FaStore />,
    title: "In-Store Pickup",
    description: "Order online and pickup at your convenience"
  }
];

const Services = () => {
  return (
    <div>
      <ServiceHero />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      <BulkPurchase />

      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us for specialized service packages tailored to your needs
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;