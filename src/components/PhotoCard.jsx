import React from "react";
import background from "../images/pic5.png";
import background1 from "../images/pic4.png";
import background2 from "../images/pic6.png";
export default function PhotoCard() {
  return (
    <section class="bg-gray-100 mt-12">
      <div class="flex flex-col justify-center items-center px-4 py-2.5 text-center">
        <h5 class="not-italic font-semibold lg:text-7xl md:text-7xl text-4xl sm:text-4xl xs:text-4xl sm:leading-10 text-gray-800 leading-none flex flex-row lg:w-2/4 md:w-2/4 sm:max-w-full ">
          Lorem Ipsum Dolor Sit Amet
        </h5>
        <p class="not-italic  text-xl leading-7 font-normal text-center text-gray-400 flex flex-row mt-6 lg:w-2/4 md:w-2/4 sm:max-w-full mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
          sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center my-10">
          <div
            class="h-72 lg:h-72 lg:w-[522px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${background})`,
              objectFit: "cover",
              objectPosition: "center",
            }}
            title={background}
          ></div>
          <div class=" rounded-b lg:rounded-b-none lg:rounded-r p-0 lg:p-4 md:p-4 sm:p-0 flex flex-col justify-center leading-normal mx-2 sm:mx-2 lg:mx-8 md:lx-8">
            <div class="mb-8 text-left md:text-center lg:text-center ">
              <div class="text-gray-800 mb-2 not-italic font-semibold text-2xl leading-7">
                Aenean egestas libero amet vulputate.
              </div>
              <p class="text-gray-400 not-italic font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Facilisi morbi sit consectetur elit.
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center my-10">
          <div
            class="h-72 lg:h-72 lg:w-[522px] flex-none bg-cover object-center rounded-t lg:ml-10 md:ml-10 lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${background1})`,
              objectFit: "cover",
              objectPosition: "bottom",
              backgroundPosition: "center",
            }}
            title={background1}
          ></div>
          <div class=" rounded-b lg:rounded-b-none lg:rounded-r p-0 lg:p-4 md:p-4 sm:p-0 flex lg:flex-col md:flex-col flex-col-reverse sm:flex-col-reverse mx-2 sm:mx-2 lg:mx-8 md:lx-8 justify-center leading-normal order-last sm:order-last md:order-first lg:order-first">
            <div class="mb-8 text-left md:text-center lg:text-center ">
              <div class="text-gray-800 mb-2 not-italic font-semibold text-2xl leading-7">
                Aenean egestas libero amet vulputate.
              </div>
              <p class="text-gray-400 not-italic font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                Facilisi morbi sit consectetur elit.
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center my-10">
          <div
            class="h-72 lg:h-72 lg:w-[522px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${background2})` }}
            title={background2}
          ></div>
          <div class=" rounded-b mx-2 sm:mx-2 lg:mx-8 md:lx-8 lg:rounded-b-none lg:rounded-r p-0 lg:p-4 md:p-4 sm:p-0 flex flex-col justify-center leading-normal">
            <div class="mb-8 text-center">
              <div class="mb-8 text-left md:text-center lg:text-center ">
                <div class="text-gray-800 mb-2 not-italic font-semibold text-2xl leading-7">
                  Aenean egestas libero amet vulputate.
                </div>
                <p class="text-gray-400 not-italic font-normal text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Facilisi morbi sit consectetur elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
