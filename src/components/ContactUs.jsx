import React from "react";

export default function ContactUs() {
  return (
    <div className="container my-4 px-4 mx-auto">
      <section className="mb-2 text-gray-800 text-center">
        <div className="flex justify-center flex-wrap items-center lg:px-6 md:px-6 sm:px-0 py-12 max-w-6xl mx-auto">
          <div className="md:w-[67%] lg:w-[50%] justify-center md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div className="block rounded-lg px-3 py-12 sm:px-0 ">
              <p className="text-4xl font-semibold leading-10 text-gray-800 mb-2 text-left">
                Lorem Ipsum Dolor Sit Amet
              </p>
              <p className="text-xl font-normal leading-7 text-gray-400 mb-2 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                orci sapien, malesuada sollicitudin mi vel, tristique eleifend
                metus.
              </p>
              <div className="bg-white mt-8 p-5">
                <form>
                  <div className="form-group mb-8 mt-3 lg:mr-2 md:mr-0 sm:mr-0">
                    <input
                      type="text"
                      className="form-control block w-full lg:px-3 md:px-3 sm:mx-0 py-1.5 text-base font-normal text-gray-400 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Full Name*"
                    />
                  </div>
                  <div className="form-group mb-6 mr-2">
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group mb-6 mr-2">
                    <p className="text-left text-base leading-6 font-medium text-gray-800 mb-2">
                      {" "}
                      Tell us more about your project*
                    </p>
                    <textarea
                      className="form-control block w-full mb-5 mr-2 px-3 py-1.5 text-base font-normal text-gray-400 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleFormControlTextarea13"
                      rows="7"
                    ></textarea>
                  </div>
                </form>
              </div>
              <button
                type="submit"
                className="flex flex-row justify-center items-center mx-auto mt-5 gap-2.5 px-7 py-3.5 bg-gray-800  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </div>

          <div class="w-full md:w-[67%] lg:w-[50%]  justify-center items-center md:mb-12 lg:mb-16">
            <div class="shadow-lg rounded-lg google-map-code sm:ml-0 lg:ml-20 md:ml-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.60596766684!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1676053077263!5m2!1sen!2str"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                height="560"
                width="100%"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
