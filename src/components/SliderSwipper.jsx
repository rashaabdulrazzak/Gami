import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import client from "../images/client.png";

// import required modules
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation } from "swiper";

export default function SliderSwipper() {
  return (
    <Swiper
      // slidesPerView={2}
      // spaceBetween={20}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Pagination]}
      // className="mySwiper"
      style={{
        "--swiper-navigation-color": "#1E293B",
        "--swiper-navigation-size": "6.5px",
      }}
      slidesPerView={2}
      centeredSlides={false}
      slidesPerGroupSkip={2}
      spaceBetween={10}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }}
      scrollbar={false}
      navigation={true}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="mb-12 md:mb-0 bg-gray-200 w-[340px]">
          <ul className="flex justify-center mt-5 mb-4">
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
          </ul>
          <p className="mb-4 text-2xl text-center font-semibold text-gray-800 px-8">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
          </p>
          <div className="flex justify-center mb-6">
            <img
              src={client}
              className="rounded-full shadow-lg w-16 h-16 border-1 border-white border-solid"
              alt="d"
            />
          </div>
          <p className="text-base font-semibold text-gray-800 mb-4">
            Lorem Ipsum
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mb-12 md:mb-0 bg-gray-200 w-[340px]">
          <ul className="flex justify-center mt-5 mb-4">
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
          </ul>
          <p className="mb-4 text-2xl text-center font-semibold text-gray-800 px-8">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
          </p>
          <div className="flex justify-center mb-6">
            <img
              src={client}
              className="rounded-full shadow-lg w-16 h-16 border-1 border-white border-solid"
              alt="d"
            />
          </div>
          <p className="text-base font-semibold text-gray-800 mb-4">
            Lorem Ipsum
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mb-12 md:mb-0 bg-gray-200 w-[340px]">
          <ul className="flex justify-center mt-5 mb-4">
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
          </ul>
          <p className="mb-4 text-2xl text-center font-semibold text-gray-800 px-8">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
          </p>
          <div className="flex justify-center mb-6">
            <img
              src={client}
              className="rounded-full shadow-lg w-16 h-16 border-1 border-white border-solid"
              alt="d"
            />
          </div>
          <p className="text-base font-semibold text-gray-800 mb-4">
            Lorem Ipsum
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mb-12 md:mb-0 bg-gray-200 w-[340px]">
          <ul className="flex justify-center mt-5 mb-4">
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
            <li>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#1E293B"
                />
              </svg>
            </li>
          </ul>
          <p className="mb-4 text-2xl text-center font-semibold text-gray-800 px-8">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
          </p>
          <div className="flex justify-center mb-6">
            <img
              src={client}
              className="rounded-full shadow-lg w-16 h-16 border-1 border-white border-solid"
              alt="d"
            />
          </div>
          <p className="text-base font-semibold text-gray-800 mb-4">
            Lorem Ipsum
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
