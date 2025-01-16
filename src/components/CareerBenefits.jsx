import React from "react";
import { FaHeartbeat, FaGraduationCap, FaClock, FaUsers } from "react-icons/fa";

const CareerBenefits = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={<FaHeartbeat />}
            title="Health Benefits"
            description="Comprehensive health, dental, and vision coverage for you and your family"
          />
          <BenefitCard
            icon={<FaGraduationCap />}
            title="Growth & Development"
            description="Continuous learning opportunities and career advancement"
          />
          <BenefitCard
            icon={<FaClock />}
            title="Work-Life Balance"
            description="Flexible scheduling and paid time off"
          />
          <BenefitCard
            icon={<FaUsers />}
            title="Great Culture"
            description="Inclusive workplace with team-building activities"
          />
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="text-4xl text-orange-500 mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CareerBenefits;
