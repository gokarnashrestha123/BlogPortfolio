import React from "react";

const DesignProcessPage = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "Before starting anything, we work with the client to collect detailed information about the business, digital product, its users and explore every aspect of the project.",
    },
    {
      title: "Scope",
      description:
        "The steps included in a UX audit will vary depending on the time and budget allotted to a project.",
    },
    {
      title: "Web Structure",
      description:
        "We typically start with user personas, key use cases, competitive analysis, moodboards and with a well defined scope we can then start to build sitemaps, information architecture and proceed with wireframes.",
    },
    {
      title: "Design Concept to Layout Design",
      description:
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes—along the way.",
    },
    {
      title: "Visual Design",
      description:
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes—along the way.",
    },
    {
      title: "Site Development",
      description:
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes—along the way.",
    },
    {
      title: "Site Testing",
      description:
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes—along the way.",
    },
    {
      title: "Site Maintance",
      description:
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes—along the way.",
    },
  ];

  return (
    <section className="min-h-screen  text-white  py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto  flex  flex-col gap-25 ">
        {/* Header */}
        <div className="flex justify-center ">
          <div className="flex flex-col items-center gap-3 w-full text-center">
            <p className="text-[#33B8A9] text-xl font-bold  tracking-[-0.02em]">
              Our Design Process
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold  tracking-[-0.02em]">
              What is your web design process? How do you start?
            </h2>

            <p className=" text-xl font-medium xl:font-normal tracking-[-0.02em]">
              Our main web design process is divided into the following steps:
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-start  lg:items-center">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2  h-full border border-[#006458] " />

          <div className="space-y-12 w-full max-w-4xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row gap-8"
              >
                {/* Dot */}
                <div
                  className={`absolute  transform -translate-y-2 
                      left-4 lg:left-1/2 lg:-translate-x-1/2`}
                >
                  <div className="w-4 h-4 rounded-full bg-[#006458] z-10"></div>
                </div>

                {/* Content */}
                <div className=" flex flex-col  w-full lg:flex-row lg:items-start lg:gap-4 gap-6">
                  {/* Desktop: title left, description right */}
                  <h3 className=" lg:text-4xl font-semibold flex-1 hidden lg:block   tracking-[-0.02em]">
                    {step.title}
                  </h3>

                  {/* Card */}
                  <div
                    className="bg-[#008576]   py-7 px-5 md:py-10 md:px-8  flex-1 flex flex-col gap-4 md:gap-3 ml-9 lg:ml-20"
                  >
                    {/* Mobile/Tablet: title inside card */}
                    <h3 className="text-3xl font-semibold lg:hidden  text-left  tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="text-lg lg:text-xl  font-normal  text-left  tracking-[-0.02em]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessPage;
