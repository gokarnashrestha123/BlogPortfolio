import React from "react";
import {
  FaPaintBrush,
  FaPalette,
  FaLaptopCode,
  FaSearch,
  FaCode,
} from "react-icons/fa";

const Services = () => {
  const serviceItems = [
    {
      icon: <FaPaintBrush />,
      service: "UI/UX Design",
      description:
        "Designing intuitive, user-friendly interfaces with a focus on usability and visual appeal.",
    },
    {
      icon: <FaPalette />,
      service: "Brand Identity",
      description:
        "Creating a consistent brand image including logos, colors, typography, and visual guidelines.",
    },
    {
      icon: <FaLaptopCode />,
      service: "Web Design",
      description:
        "Modern, responsive website designs that look great on all devices.",
    },
    {
      icon: <FaSearch />,
      service: "SEO",
      description:
        "Optimizing websites to rank higher on search engines and increase organic traffic.",
    },
    {
      icon: <FaCode />,
      service: "Web Development",
      description:
        "Building fast, secure, and scalable websites using modern web technologies.",
    },
    {
      icon: <FaCode />,
      service: "App Development",
      description:
        "Building fast, secure, and scalable apps using modern web technologies.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h5 className="font-bold text-xl text-[#33B8A9]">
            Our Delightful Services
          </h5>

          <h1
            className="
              text-white font-semibold
              text-4xl tracking-[-0.02em]
               md:text-5xl
              lg:text-[54px] lg:leading-[70px]
           
            
            "
          >
            We are a group of passionate people working closely with clients so
            their business can grow.
          </h1>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#00211D] py-10 px-8 flex flex-col gap-6  rounded-lg
                hover:shadow-xl transition duration-300
              "
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#004B49] text-white text-3xl">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-3xl tracking-[-0.02em] ">
                {item.service}
              </h3>

              <p className="text-white text-lg  font-normal tracking-[-0.02em] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
