import React from "react";
import image from "../../assets/images/service/service1.png";

const OurWorkProcess = () => {
  const process = [
    {
      sn: "01",
      title: "Discovery",
      description:
        "It all starts with an idea. We will listen to your idea and set goals and objectives for your business. We will then research the market for competitors, identify how we can make an impact, work with you to refine your ideas and present solutions which will help achieve your goals.",
    },
    {
      sn: "02",
      title: "Design",
      description:
        "We turn ideas into wireframes and visual designs that align with your brand and user needs.",
    },
    {
      sn: "03",
      title: "Develop",
      description:
        "Our developers bring designs to life using modern, scalable technologies.",
    },
    {
      sn: "04",
      title: "Expand",
      description:
        "We optimize, scale, and evolve your product to grow with your business.",
    },
  ];

  return (
    <section className="w-full px-5 sm:px-8 md:px-16 lg:px-20 py-10 text-white">
      <div className="bg-[#004B49] px-5  md:px-8 lg:px-10 py-20 sm:py-16 lg:py-20 flex flex-col gap-15 ">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16  ">
          {/* Text */}
          <p className="text-3xl lg:text-4xl font-medium tracking-[-0.02em]">
            If you have no idea how to make your business unique, it’s ok,
            because we don’t either, but we have a method for figuring that out.
            We are going to collaborate every step of the way to create a unique
            online identity that stands out from the noise.
          </p>

          {/* Image */}
          <img
            src={image}
            alt="Work process"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
          />
        </div>

        {/* Process List */}
        <div className="flex flex-col gap-10">
          <span className="font-medium tracking-[-0.02em] text-xl md:text-2xl ">
            Our Work Process
          </span>

          {process.map((item, index) => (
            <div
              key={index}
              className="
                grid grid-cols-1
                lg:grid-cols-[200px_1fr]
                 gap-5 lg:gap-30
              "
            >
              {/* Left */}
              
                <div className="">
                  <span className="text-sm font-medium">{item.sn}</span>
                  <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] ">
                    {item.title}
                </h3>
                
                </div>

                {/* Right */}
                <p className="max-w-[731px] text-lg md:text-xl font-normal tracking-[-0.02em]">
                  {item.description}
                </p>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcess;
