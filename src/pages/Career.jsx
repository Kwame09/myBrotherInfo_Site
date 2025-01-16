import React from "react";
import CareerHero from "../components/CareerHero";
import JobCard from "../components/JobCard";
import CareerBenefits from "../components/CareerBenefits";

const jobListings = [
  {
    title: "Store Manager",
    department: "Management",
    location: "New York, NY",
    type: "Full-time",
    description: "We are seeking an experienced Store Manager to oversee daily operations and lead our team."
  },
  {
    title: "Cashier",
    department: "Operations",
    location: "New York, NY",
    type: "Part-time",
    description: "Join our team as a Cashier and provide excellent customer service while handling transactions."
  },
  {
    title: "Stock Clerk",
    department: "Inventory",
    location: "New York, NY",
    type: "Full-time",
    description: "Help maintain store inventory and ensure shelves are properly stocked."
  },
  {
    title: "Department Supervisor",
    department: "Management",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead a department team while ensuring product quality and customer satisfaction."
  }
];

const Career = () => {
  return (
    <div>
      <CareerHero />
      
      <div className="py-16" id="positions">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>

      <CareerBenefits />
    </div>
  );
};

export default Career;