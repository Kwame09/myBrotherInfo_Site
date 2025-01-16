import React from "react";
import ContactForm from "../components/ContactForm";
import ContactUsHero from "../components/ContactUsHero";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <ContactUsHero />
      </div>
      <div className="py-10 max-md:pb-44 lg:px-56">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
