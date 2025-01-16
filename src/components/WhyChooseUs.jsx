import React from "react";
import SmileWorker from "../assets/images/homeImg/happyWorker.jpg";
import { RiCustomerService2Line } from "react-icons/ri";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto relative ">
      <div className="flex flex-col md:flex-row justify-between py-10 md:px-0">
        {/* Image Section */}
        <div className="hidden md:block absolute lg:top-up2 left-44 vh-full">
          <img
            src={SmileWorker}
            alt="Smiling Person Image"
            className="w-full h-full "
          />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden  mb-10 absolute w-56 left-11 top-up5">
          <img
            src={SmileWorker}
            alt="Smiling Person Image"
            className="w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 lg:w-5/12 md:ml-auto">
          <div className="flex flex-col items-start">
            <h3 className="text-orange-500 text-xl md:text-2xl mb-4">
              WHY CHOOSE US
            </h3>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              We <strong>Think</strong> About Your Comfort
            </h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              illum natus, laborum, voluptatibus animi quia alias dicta delectus
              nostrum ratione assumenda libero? Fugiat nulla voluptas laudantium
              repellendus ut ea natus!
            </p>

            <div className="space-y-6">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <RiCustomerService2Line className="text-4xl md:text-5xl text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-white">
                      Expert in Customer Care
                    </h3>
                    <p className="text-gray-400">We care for our customers.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
