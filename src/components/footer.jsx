import React from "react";
import blog from "../assets/Icons/blog.png";

const Footer = () => {
  return (
    <div className="bg-customColor1 mt-12">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-4/12">
          <div className="flex items-center mb-4">
            <h3 className="font-bold text-xl text-customColor2">
              YamukelwaBlogs
            </h3>
            <img src={blog} alt="Blog Icon" className="ml-2 h-6 w-6" />
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Track, share, measure—you have full control.
          </p>
          <div className="flex-row flex">
            <span className="w-6 mx-1">
              <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-customColor4"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
              >
                {/* SVG content */}
              </svg>
            </span>
            {/* Repeat for other SVG elements */}
          </div>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-customColor2 font-medium mb-6">
            Links
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            FAQ
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Help
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Support
          </span>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-customColor2 font-medium mb-6">
            Legal
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Terms
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Privacy
          </span>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-customColor2 font-medium mb-6">
            Social
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Facebook
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Linkedin
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Twitter
          </span>
        </div>
        <div className="p-5 sm:w-1/5">
          <div className="text-xs uppercase text-customColor2 font-medium mb-6">
            Company
          </div>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Official Blog
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            About Us
          </span>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contact
          </span>
        </div>
      </div>
      <div className="py-6 text-sm text-customColor2 border-t border-customColor2 text-center">
        © 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
