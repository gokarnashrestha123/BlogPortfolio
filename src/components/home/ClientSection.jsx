import React from "react";
import logo1 from "../../assets/images/client/logo1.png";
import logo2 from "../../assets/images/client/logo2.png";
import logo3 from "../../assets/images/client/logo3.png";
import logo4 from "../../assets/images/client/logo4.png";
import logo5 from "../../assets/images/client/logo5.png";
import logo6 from "../../assets/images/client/logo6.png";
import logo7 from "../../assets/images/client/logo7.png";
import logo8 from "../../assets/images/client/logo8.png";
import logo9 from "../../assets/images/client/logo9.png";
import logo10 from "../../assets/images/client/logo10.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo2,
  logo6,
];

const ClientSection = () => {
  return (
    <div className="w-full py-20 px-5 flex flex-col gap-15 md:py-24 md:px-8 md:gap-35 lg:px-20 desktop:px-35 desktop:py-35 bg-[#001412] text-white">
      {/* Heading */}
      <div>
        <h1 className="font-semibold text-5xl md:text-6xl tracking-[-0.02em] text-center">
          Some of our awesome clients that we are proud to work with
        </h1>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-15 md:gap-24 items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`
        flex items-center justify-center
        ${index >= 4 ? "hidden md:flex" : ""}
        ${index >= 6 ? "md:hidden lg:flex" : ""}
      `}
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-14 md:max-h-16 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
