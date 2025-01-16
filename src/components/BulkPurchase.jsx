import React from "react";
import { FaTruck, FaBoxOpen, FaHandshake } from "react-icons/fa";

const BulkPurchase = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bulk Purchase Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer competitive prices and reliable delivery for bulk orders.
            Perfect for businesses, events, and large organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaBoxOpen />}
            title="Wholesale Pricing"
            description="Get the best prices on bulk orders with our competitive wholesale rates"
          />
          <FeatureCard
            icon={<FaTruck />}
            title="Delivery Service"
            description="Free delivery for bulk orders within the city limits"
          />
          <FeatureCard
            icon={<FaHandshake />}
            title="Business Account"
            description="Special accounts for regular bulk purchasers with added benefits"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="text-4xl text-orange-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default BulkPurchase;