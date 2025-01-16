import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsHero = () => {
  return (
    <div className="bg-darkBlue text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Have questions? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ContactCard
            icon={<FaPhone />}
            title="Phone"
            info="+1 (234) 567-8900"
            subInfo="Mon-Fri from 8am to 5pm"
          />
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            info="info@company.com"
            subInfo="Online support"
          />
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Office"
            info="123 Business Avenue"
            subInfo="New York, NY 10001"
          />
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, info, subInfo }) => (
  <div className="bg-white/5 p-8 rounded-lg text-center hover:bg-white/10 transition-colors">
    <div className="text-3xl text-orange-500 mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-1">{info}</p>
    <p className="text-gray-400 text-sm">{subInfo}</p>
  </div>
);

export default ContactUsHero;