import React from "react";
import ServiceCard from "./ServiceCard";
import SERVICES from "../data/service";

const Services = () => {
  return (
    <>
      <div className="section text-center w-full h-full bg-gray-300 pt-10">
        <h1 className="text-7xl leading-none font-semibold text-center text-gray-800 mt-5 mb-10">
          What We Do
        </h1>
        <div className="text-xl leading-7 font-normal text-center text-gray-400 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
          <br />
          sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
        </div>

        <div className="flex justify-center w-full flex-wrap">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
          <ServiceCard
            title="Launchpad"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            ipsum viverra etiam."
            icon={""}
          />
        </div>
      </div>
    </>
  );
};
export default Services;
