import React from "react";
import services2 from "../../assets/images/service/service2.png";

const stages = [
  {
    step: "1",
    title: "Strategy",
    description:
      "We define business goals, understand the brand mission, analyze competitors, and align user needs with business objectives.",
  },
  {
    step: "2",
    title: "Research",
    description:
      "Conducting thorough research is the second most integral aspect of the UX design process. Research is primarily done to understand more about the users, their goals, behaviors, motivations, and needs. Good research informs design decisions that will lays the foundation of the entire project and can save a lot of time and money down the road.",
  },
  {
    step: "3",
    title: "Analyze",
    description:
      "Research insights are transformed into user personas, journey maps, and problem statements.",
  },
  {
    step: "4",
    title: "Design",
    description:
      "We create wireframes, UI designs, and interaction flows that are intuitive, accessible, and visually engaging.",
  },
  {
    step: "5",
    title: "Prototype",
    description:
      "Interactive prototypes are built and tested to validate usability and gather feedback before development.",
  },
];

const OurUIUXProcessPage = () => {
  return (
    <section className="w-full py-10 px-5 md:px-8 lg:py-20 lg:px-20 ">
      <div
        className="  bg-[#E5F6F4] px-5 py-10 md:px-8 md:py-20 lg:py-10 text-[#006458] flex flex-col gap-10 "
      >
        {/* Header */}
        <div className=" max-w-full flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Text */}
          <div className="flex-1 flex  flex-col gap-10">
            <span className="text-[#006458] text-sm font-bold tracking-[-0,02em]">
              Our UX Design Process
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0,02em] ">
              User Experience
            </h1>
            <div className="flex flex-col lg:flex-row gap-5">
              <p className=" flex gap-7 text-xl font-normal tracking-[-0,02em] ">
                UX refers to the value that you offer to your users when they
                are using your product. It primarily depends on enhancing user
                satisfaction by improving the accessibility, usability and
                convenience when a user interacts with your product. <br />{" "}
                <br /> A well-executed UX process requires you to follow a
                user-centric approach and a defined strategy that enables you to
                develop simple, engaging and intuitive experiences to wow the
                end-users.
                <br /> <br />
                Additionally, a meaningful user experience allows you to define
                customer journeys on your product that are most conducive to{" "}
                <br /> <br />
                <br />
                business success. Here are the UX design Process in 5 Stages :
              </p>
              {/* Image */}

              <img
                src={services2}
                alt="UX process"
                className="w-full max-w-xs md:max-w-sm lg:max-w-96 object-contain"
              />
            </div>
            <ol className="list-decimal font-medium text-4xl  tracking-[-0.02em] pl-10">
              <li>Strategy</li>
              <li>Research</li>
              <li>Analyz</li>
              <li>Design</li>
              <li>Prototype</li>
            </ol>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 max-w-[768px]">
          {stages.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-center gap-5 ">
                <span className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
                  {item.step}.
                </span>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] ">
                  {item.title}
                </h3>
              </div>

              <p className="text-lg md:text-xl  font-normal tracking-[-0.02em] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurUIUXProcessPage;
