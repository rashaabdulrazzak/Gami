import React from "react";
import Logo from "../icons/Logo";
export default function Menu() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://gamiworld.io/" class="flex items-center">
          <Logo />
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class=" flex flex-row justify-center items-center gap-2.5 w-[132px] h-[52px] px-7 py-3.5 text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  text-center mr-3 md:mr-0"
          >
            Buy GAMI
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-row items-start gap-[60px] p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 font-semibold text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 hover:text-gray-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 font-normal text-gray-900 rounded  md:hover:bg-transparent md:hover:text-gray-300 md:p-0  "
              >
                What We Do
              </a>
            </li>
            <li className="border-gray-500 border-3 border-solid">
              <a
                href="#!"
                class="block py-2 pl-3 pr-4 font-normal text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-300 md:p-0  "
              >
                GAMI Statistics
              </a>
            </li>
            <li>
              <a
                href="#!"
                class="block py-2 pl-3 pr-4 font-normal text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-300 md:p-0  "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
