import React from "react";
import Logo from "../icons/Logo";
export default function Footer() {
  return (
    <>
      <footer class="p-4 bg-gray-100  md:px-6 md:py-8 ">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 mx-20" />

        <div class="sm:flex flex flex-row justify-between sm:items-center sm:justify-between">
          <a
            href="https://gamiworld.io/"
            class="flex items-center mb-4 sm:mb-0 sm:flex-col"
          >
            <Logo />
          </a>
          {/* <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#!" class="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#!" class="mr-4 hover:underline md:mr-6">
                What We Do
              </a>
            </li>
            <li>
              <a href="#!" class="mr-4 hover:underline md:mr-6 ">
                GAMI Statistics
              </a>
            </li>
            <li>
              <a href="#!" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul> */}
          <ul className="flex-row items-start gap-[60px] p-0  hidden lg:flex md:flex sm:hidden">
            <li>
              <a
                href="#!"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                What We Do
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                GAMI Statistics
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mb-6 flex flex-row md:flex-row lg:flex-row sm:flex-row justify-end items-end ">
            <a
              href="#!"
              className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.59638 0 0 5.37252 0 12C0 18.6275 5.59638 24 12.5 24C19.4036 24 25 18.6275 25 12C25 5.37252 19.4036 0 12.5 0ZM18.2868 8.1532C18.0995 10.0516 17.2877 14.6578 16.8714 16.776C16.6944 17.6753 16.351 17.975 16.0179 18.005C15.2893 18.0649 14.7377 17.5454 14.0404 17.1057C12.9371 16.4163 12.3231 15.9867 11.251 15.3072C10.0125 14.5279 10.8139 14.0983 11.5216 13.3988C11.709 13.219 14.9042 10.4213 14.9667 10.1715C14.9771 10.1415 14.9771 10.0216 14.9042 9.9617C14.8314 9.90175 14.7273 9.92173 14.644 9.94172C14.5296 9.9617 12.781 11.0808 9.3776 13.2889C8.87802 13.6187 8.43047 13.7785 8.02456 13.7685C7.57702 13.7585 6.72356 13.5287 6.07827 13.3289C5.29767 13.0891 4.67319 12.9592 4.72523 12.5395C4.75645 12.3197 5.06869 12.0999 5.65154 11.8701C9.29434 10.3514 11.7194 9.34221 12.9371 8.85262C16.403 7.46378 17.1316 7.22398 17.5999 7.21399C17.704 7.21399 17.933 7.23397 18.0891 7.35387C18.214 7.45379 18.2452 7.58368 18.266 7.6836C18.2868 7.78351 18.3077 7.99334 18.2868 8.1532Z"
                  fill="#1E293B"
                />
              </svg>
            </a>
            <a
              href="#!"
              className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.59638 0 0 5.37252 0 12C0 18.6275 5.59638 24 12.5 24C19.4036 24 25 18.6275 25 12C25 5.37252 19.4036 0 12.5 0ZM17.9704 9.30525C17.9788 9.42215 17.9788 9.53805 17.9788 9.65595C17.9788 13.237 15.1395 17.3655 9.94796 17.3655V17.3635C8.41382 17.3655 6.91195 16.9439 5.62136 16.1485C5.84409 16.1745 6.0689 16.1875 6.29267 16.1875C7.56349 16.1885 8.79788 15.7789 9.79808 15.0255C8.58972 15.0035 7.53122 14.2471 7.1607 13.144C7.5843 13.222 8.01936 13.206 8.43464 13.0971C7.11803 12.8413 6.1709 11.7312 6.1709 10.4413V10.4073C6.56328 10.6172 7.0025 10.7341 7.45212 10.746C6.21149 9.95071 5.82952 8.36603 6.57889 7.12806C8.01207 8.82065 10.1259 9.84979 12.3959 9.9587C12.168 9.01748 12.4792 8.03131 13.2129 7.36986C14.3495 6.34371 16.1376 6.39667 17.2065 7.48776C17.8383 7.36786 18.445 7.14505 18.9988 6.83031C18.7885 7.45779 18.3472 7.99034 17.7581 8.32906C18.3181 8.26611 18.8645 8.12223 19.3786 7.90241C18.9998 8.44796 18.5221 8.92256 17.9704 9.30624V9.30525Z"
                  fill="#1E293B"
                />
              </svg>
            </a>
            <a
              href="#!"
              className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.59638 0 0 5.37252 0 12C0 18.6275 5.59638 24 12.5 24C19.4036 24 25 18.6275 25 12C25 5.37252 19.4036 0 12.5 0ZM20.5735 16.0586C20.3861 16.7311 19.8376 17.2556 19.1372 17.4375C17.1597 17.9071 8.30246 17.8491 6.43943 17.4375C5.73897 17.2576 5.19255 16.7311 5.00312 16.0586C4.5358 14.2301 4.56807 10.3634 4.99271 8.57485C5.18006 7.90241 5.72856 7.37785 6.42902 7.196C9.07265 6.66644 18.1859 6.8373 19.1268 7.18601C19.8272 7.36586 20.3736 7.89242 20.5631 8.56486C21.0585 10.4833 21.0262 14.1102 20.5735 16.0586Z"
                  fill="#1E293B"
                />
                <path
                  d="M11.2167 14.6498L15.4632 12.3117L11.2167 9.97369V14.6498Z"
                  fill="#1E293B"
                />
              </svg>
            </a>
            <a
              href="#!"
              className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0C5.59638 0 0 5.37252 0 12C0 18.6275 5.59638 24 12.5 24C19.4036 24 25 18.6275 25 12C25 5.37252 19.4036 0 12.5 0ZM8.6761 16.783C5.94296 16.783 3.72814 14.6418 3.72814 12C3.72814 9.3582 5.94401 7.21699 8.6761 7.21699C11.4082 7.21699 13.6241 9.3582 13.6241 12C13.6241 14.6418 11.4082 16.783 8.6761 16.783ZM16.5779 16.5032C15.2113 16.5032 14.1039 14.4869 14.1039 12.001C14.1039 9.51507 15.2113 7.49875 16.5779 7.49875C17.9444 7.49875 19.0518 9.51407 19.0518 12.001C19.0518 14.4869 17.9444 16.5032 16.5779 16.5032ZM20.4017 16.0346C19.9209 16.0346 19.5316 14.2281 19.5316 12.001C19.5316 9.77386 19.9209 7.96736 20.4017 7.96736C20.8826 7.96736 21.2719 9.77286 21.2719 12.001C21.2719 14.2291 20.8826 16.0346 20.4017 16.0346Z"
                  fill="#1E293B"
                />
              </svg>
            </a>
          </div>
        </div>

        <span class="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://gamiworld.io/" class="hover:underline">
            GAMI.
          </a>
          All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
