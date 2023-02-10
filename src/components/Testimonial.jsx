import React from "react";
import Heading from "./Heading";
import SliderSwipper from "./SliderSwipper";

export default function Testimonial() {
  return (
    <div className="section text-center w-full h-full ">
      <Heading />
      <div className="pr-60 pl-40">
        <SliderSwipper />
      </div>
    </div>
  );
}
