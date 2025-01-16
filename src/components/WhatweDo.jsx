import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import CardOne from "./cardOne";

const WhatweDo = () => {
  return (
    <div>
      <div className="text-center py-10 md:py-20 flex flex-col items-center">
        <h3 className="text-lg md:text-xl text-orange-500">WHAT WE DO</h3>
        <h2 className="text-2xl md:text-3xl w-full md:w-4/6 lg:w-2/6">
          We Are <strong>Leading Supermarket</strong> in town. We Love What We
          do
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
        <CardOne
          number="01"
          icon={<FaPeopleGroup />}
          title="Professional Team"
          description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
        />
        <CardOne
          number="02"
          icon={<GiPriceTag />}
          title="Grear Prices"
          description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
        />
        <CardOne
          number="03"
          icon={<RiCustomerService2Line />}
          title="Quality Customer Service"
          description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
        />
        <CardOne
          number="04"
          icon={<MdOutlineProductionQuantityLimits />}
          title="Quality Products"
          description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
        />
      </div>
    </div>
  );
};

export default WhatweDo;
