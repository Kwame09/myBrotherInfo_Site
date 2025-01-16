import React from "react";
import Card from "./Card";
import Person6Img from "../assets/images/homeImg/person6.jpg";
import Person2Img from "../assets/images/homeImg/person2.jpg";
import Person3Img from "../assets/images/homeImg/person3.jpg";
import Person4Img from "../assets/images/homeImg/person4.jpeg";

const teamMembers = [
  {
    image: Person6Img,
    name: "John Doe",
    position: "CEO & Founder"
  },
  {
    image: Person2Img,
    name: "Jane Smith",
    position: "Marketing Manager"
  },
  {
    image: Person3Img,
    name: "Mike Johnson",
    position: "Lead Developer"
  },
  {
    image: Person4Img,
    name: "Sarah Williams",
    position: "Product Designer"
  }
];

const OuTeam = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h3 className="text-lg md:text-xl text-orange-500 mb-2">Our Team</h3>
        <h2 className="text-2xl md:text-4xl font-bold">
          We have a <strong>Good and Expert Team</strong>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default OuTeam;