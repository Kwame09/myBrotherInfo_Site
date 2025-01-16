import React, { useState } from "react";
import Carousel from "../components/Carousel";
import CardOne from "../components/cardOne";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { fromJSON } from "postcss";
import SmileWorker from "../assets/images/homeImg/smilingWorkers.jpg";
import CarouselSecond from "../components/CarouselSecond";
import PeopleInfo from "../components/PeopleInfo";
import PersonImg1 from "../assets/images/homeImg/person1.jpg";
import PersonImg2 from "../assets/images/homeImg/person2.jpg";
import SubscribeNewsLetter from "../components/SubscribeLetter";
import GetQuoteForm from "../components/GetQuoteForm";
import ManageImg from "../assets/images/homeImg/manager.png";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel />
      <section className="bg-white py-10 md:py-20 px-4 md:px-8 mx-4 md:mx-12 lg:mx-36">
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
      </section>
      <section className="bg-darkBlue max-lg:pt-60 lg:py-20 flex justify-center ">
        <WhyChooseUs />
      </section>
      <section className="lg:h-screen max-lg:mb-20 pt-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-5/12 lg:w-6/12 flex justify-center">
          <img src={ManageImg} className=" w-11/12 h-auto" alt="" />
        </div>
        <div className="w-full md:w-7/12 lg:w-6/12">
          <GetQuoteForm />
        </div>
      </section>
      <section className="py-10 h-[60vh] md:py-20 lg:min-h-screen bg-darkBlue relative px-4 md:px-0">
        <div className="flex flex-col items-center justify-center text-center  text-white">
          <div className="pb-8 md:pb-16">
            <h3 className="text-lg md:text-xl text-orange-500">OUR PRODUCTS</h3>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2">
              Explore Our <strong>Recent Products</strong>
            </h2>
          </div>
          <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto absolute left-1/5 bottom-up1">
            <CarouselSecond className="" />
          </div>
        </div>
      </section>
      <section className="pt-36 pb-20 mx-4 md:mx-36 bg-white flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center text-center md:text-left mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-light text-orange-500">
            TESTIMONIAL
          </h3>
          <h2 className="text-3xl md:text-4xl font-light mt-2">
            What People Says
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 p-4 md:p-10">
          <PeopleInfo
            imageSrc={PersonImg1}
            description={
              "Lorem ipsum dolor sit amet consecteturadipisicing elit. Dolorem delectus odio corporis unde placeat quam suscipit, voluptate assumenda in voluptatem sit, inventore fugiat ducimus illo nemo rerum earum quasi soluta!"
            }
            name={"Aunthie Ama"}
          />
          <PeopleInfo
            name={"Mr. Brown"}
            imageSrc={PersonImg2}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus odio corporis unde placeat quam suscipit, voluptate assumenda in voluptatem sit, inventore fugiat ducimus illo nemo rerum earum quasi soluta!"
            }
          />
        </div>
      </section>
      <section>
        <SubscribeNewsLetter />
      </section>
    </div>
  );
};

export default Home;
