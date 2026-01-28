import React from "react";

const services = [
  "UI/UX Design",
  "App Design",
  "Web Design",
  "SEO",
  "App Development",
  "Web Development",
];

const OurServicesPage = () => {
  return (
    <div className="w-full py-20 px-10 md:px-8 lg:px-20 ">
      <div className="bg-[#E5F6F4] pt-10 pb-15 md:pt-10  px-5 md:px-20">
        {/* Heading */}
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#006458]">
            Our Services
          </h1>
        </div>

        <div className="max-w-5xl  grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className=" ">
              <h3 className=" test-2xl md:text-3xl font-normal tracking-[-0.02em] text-[#006458]">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
