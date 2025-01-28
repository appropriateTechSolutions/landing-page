import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import React, { useState } from "react";

export const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 text-center">
          {/* Social Icons Section */}
          <div className="col-span-1">
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Ready to Transform Your Business? Contact Us Today!
            </p>

            <ul className="flex justify-center items-center space-x-3 mt-7">
              <li>
                <a href="#" title="" className="">
                  <TwitterIcon />
                </a>
              </li>

              <li>
                <a href="#" title="" className="">
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a href="#" title="" className="">
                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a href="#" title="" className="">
                  <GithubIcon />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#about" title="" className="text-base text-black transition-all duration-200">
                  About
                </a>
              </li>

              <li>
                <a href="#features" title="" className="text-base text-black transition-all duration-200">
                  Features
                </a>
              </li>

              <li>
                <a href="#plans" title="" className="text-base text-black transition-all duration-200">
                  Plans
                </a>
              </li>

              <li>
                <a href="#" title="" className="text-base text-black transition-all duration-200">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" title="" className="text-base text-black transition-all duration-200">
                  Customer Support
                </a>
              </li>

              <li>
                <a href="#" title="" className="text-base text-black transition-all duration-200">
                  Delivery Details
                </a>
              </li>

              <li>
                <a href="#" title="" className="text-base text-black transition-all duration-200">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" title="" className="text-base text-black transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-16 mb-10 border-gray-200" />
        
        {/* Copyright Text */}
        <p className="text-sm text-center text-gray-600">
          © Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </section>
  );
};
