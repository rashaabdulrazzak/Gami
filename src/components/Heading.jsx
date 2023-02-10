import React from "react";

export default function Heading() {
  return (
    <div class="flex flex-col justify-center items-center px-3 py-2.5 text-center">
      <h5 class="not-italic text-center font-semibold lg:text-7xl md:text-5xl text-4xl sm:text-4xl xs:text-4xl sm:leading-10 text-gray-800 leading-none flex flex-row lg:w-2/4 md:w-2/4 sm:w-full ">
        Lorem Ipsum Dolor Sit Amet
      </h5>
      <p class="not-italic  text-xl leading-7 font-normal text-center text-gray-400 flex flex-row mt-6 lg:w-2/4 md:w-2/4 sm:w-full mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
        sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
      </p>
    </div>
  );
}
