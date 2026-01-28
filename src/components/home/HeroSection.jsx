import React from "react";
import heroImage from "../../assets/images/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero Section"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute top-1/2 left-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   flex flex-col items-center justify-center
                   gap-10   w-full h-screen"
      >
        {/* Heading */}
        <h1
          className="
     font-bold text-white text-center 
    text-[40px] leading-[52px] tracking-[-0.02em]
    md:font-semibold md:text-[64px] md:leading-[83px] md:tracking-[-0.02em]
    "
        >
          We Build High-converting Websites
          <span className="block">That Deliver Results</span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Book a Call */}
          <button
            className="bg-[#00A693] text-white w-52 h-18 px-9 py-6 gap-3
                       hover:bg-teal-600 transition"
          >
            <p
              className=" font-bold text-[18px] tracking-[-0.02em]
                     leading-[23px]"
            >
              Book a Call
            </p>
          </button>

          {/* See Our Works */}
          <button
            className="bg-[#004B49] text-white w-52 h-18 px-9 py-6 gap-3
                       hover:bg-teal-600 transition"
          >
            <p
              className=" font-bold text-[18px] tracking-[-0.02em]
                     leading-[23px]"
            >
              See Our Works
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
