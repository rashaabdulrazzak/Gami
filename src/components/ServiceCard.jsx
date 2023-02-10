import React from "react";

export default function ServiceCard({ title, description, icon, iconFlip }) {
  return (
    <>
      <div class="w-[413px] h-72 bg-transparent cursor-pointer group perspective mx-2 mt-5 bg-gray-50">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full bg-gray-100">
            <div class="flex first-letter:items-center justify-center mt-5">
              {icon}
            </div>
            <p class="text-center text-gray-700 font-semibold text-2xl mt-3.5">
              {title}
            </p>
            <p class="text-base font-normal text-center  text-gray-400 mt-3">
              {description}
            </p>
            <p className="mt-4 text-center">
              <a
                href="#!"
                className="font-medium text-sm  text-gray-700 text-center underline "
              >
                {" "}
                visit{" "}
              </a>
            </p>
          </div>
          <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-700 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 mt-5 pb-24">
              <div class="flex first-letter:items-center justify-center mt-5">
                {iconFlip}
              </div>
              <p class="text-center text-white font-semibold text-2xl mt-3.5">
                {title}
              </p>
              <p class="text-base font-normal text-center text-white mt-3">
                {description}
              </p>
              <p className="mt-4 text-center">
                <a
                  href="#!"
                  className="font-medium text-sm text-white text-center underline "
                >
                  {" "}
                  visit{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
