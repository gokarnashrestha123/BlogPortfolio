import React from "react";
import service3 from "../../assets/images/service/service3.png";
import bullet from "../../assets/images/icons/Icon Bullet Point.png";

const Design = () => {
   const items = ["App design", "Web design", "User interface design"];
  return (
    <section className="w-full lg:py-10 px-5 md:px-8 lg:px-20 ">
      <div
        className="
          flex flex-col
          lg:flex-row
          items-center
          gap-2.5
          py-10 md:py-20 lg:py-24
          px-5 md:px-8 lg:px-25
          bg-[#CCEDE9]
        "
      >
        {/* Content */}
        <div className="flex-1 flex flex-col gap-9">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-[#004B49] ">
            Design
          </h1>
          <p className="font-normal text-lg md:text-xl tracking-[-0.02em] text-[#004B49]">
            Designing digital products has been primary focus and a crucial part
            of our agency. With the business goals in mind we go in-depth to
            draw user’s attention, presenting your business in a meaningful way
            to be functional that will generate more leads.
          </p>

          <ol className="space-y-4 font-medium text-2xl tracking-[-0.02em] text-[#004B49]">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <img src={bullet} alt="" className="w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Image */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={service3}
            alt="Design service"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Design;
