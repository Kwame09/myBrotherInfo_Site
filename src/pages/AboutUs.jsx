import React from "react";
import OuTeam from "../components/OuTeam";
import WhatweDo from "../components/WhatweDo";
import WhyChooseUs from "../components/WhyChooseUs";
import SubscribeNewsLetter from "../components/SubscribeLetter";
import Map from "../components/map";

const AboutUs = () => {
  return (
    <div className=" md:pt-20 ">
      <div className="bg-white px-4 md:px-8 mx-4 md:mx-12 lg:mx-36">
        <OuTeam />
      </div>
      <div>
        <Map/>
      </div>
      <div className="bg-white px-4 md:px-8 mx-4 md:mx-12 lg:mx-36 max-md:pb-10 lg:pb-32">
        <WhatweDo />
      </div>

      <div className="bg-darkBlue  lg:py-20 flex justify-center max-md:pt-60">
        <WhyChooseUs />
      </div>
      <div>
        <SubscribeNewsLetter/>
      </div>
    </div>
  );
};

export default AboutUs;
