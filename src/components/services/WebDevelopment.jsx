import React from "react";
import service from "../../assets/images/service/service4.png";
import bullet from "../../assets/images/icons/Icon Bullet Point.png";

const WebDevelopment = () => {
  const leftItems = [
    "Front-End Development",
    "Back-end Development",
    "QA",
    "CMS / CRM",
  ];

  const rightItems = [
    "E-commerce Website",
    "Webflow Website",
    "WordPress Website",
    "Shopify Website",
  ];
  return (
    <div className=" w-full py-10 md:py-8 lg:py-10 px-5 md:px-8 lg:px-20 text-[#006458]">
      <div className="flex flex-col lg:flex-row items-center py-10 px-5 md:py-20 md:px-8  lg:py-24 gap-2.5 bg-[#E5F6F4]">
        {/* Image Section */}
        <div className="">
          <img
            src={service}
            alt="Web Development"
            className="w-full min-w-96"
          />
        </div>

        {/* Content Section */}
        <div className=" flex flex-col gap-9">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-[#006458]">
            Web Development
          </h1>

          <p className=" font-normal text-lg md:text-xl tracking-[-0.02em] text-[#006458]">
            Our expert developers solve complex problems on the web. When we
            hand-over the design assets to them, they make sure the codes are
            efficient, highly organized and readable. From creating custom
            websites to using industry-leading platforms such as Webflow,
            Wordpress and Shopify to build powerful solutions to keep your
            website fast, secure and seamlessly integrated.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* Left column */}
            <ol className="space-y-4 font-medium text-2xl tracking-[-0.02em] text-[#004B49]">
              {leftItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={bullet}
                    alt=""
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            {/* Right column */}
            <ol className="space-y-4 font-medium text-2xl tracking-[-0.02em] text-[#004B49]">
              {rightItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={bullet}
                    alt=""
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
