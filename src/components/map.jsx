import React from "react";

const Map = () => {
  return (
    <section className="bg-darkBlue py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl text-orange-500 mb-4">
            Find Us Here
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-base md:text-lg">
            Located in the heart of Takoradi, MyBrother Supermarket is easily accessible 
            to serve all your shopping needs. Visit us today and experience our 
            exceptional service firsthand.
          </p>
        </div>
        
        <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.76318494472547!2d-1.7627894999999998!3d4.8976503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe779004eef80e9%3A0x2f1ac0245ad39d3!2sNyilale%20my%20brother%20supermarket!5e0!3m2!1sen!2sgh!4v1704825869345!5m2!1sen!2sgh"
            className="absolute inset-0 w-full h-full border-0 hover:opacity-95 transition-opacity"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Brother Supermarket Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;