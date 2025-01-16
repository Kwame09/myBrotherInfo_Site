import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobCard = ({ title, department, location, type, description }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          {department}
        </span>
        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
          {type}
        </span>
        <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
          {location}
        </span>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <Link
        to={`/career/apply/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-orange-500 hover:text-orange-600"
      >
        Apply Now <BsArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

export default JobCard;