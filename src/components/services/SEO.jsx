import React from "react";
import service5 from "../../assets/images/service/service5.png";
import bullet from "../../assets/images/icons/Icon Bullet Point.png";

const SEO = () => {
  const seoItems = [
    "On Page SEO",
    "Off Page SEO",
    "Technical SEO",
    "Local SEO",
  ];
  return (
    <div className="px-4 md:px-8 pb-20 md:pb-24 lg:px-16 lg:py-10 text-[#006458]">
      <div className="flex flex-col xl:flex-row  py-10 px-5 md:py-24 md:px-8 items-center gap-15 bg-[#CCEDE9]">
        {/* Content Section */}
        <div className="w-full lg:w-3/4 text-center lg:text-left flex gap-9 flex-col">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]">
            SEO
          </h1>
          <p className=" font-normal text-lg md:text-xl tracking-[-0.02em]">
            SEO allows you to climb the search engine results page rankings by
            improving on-page and off-page elements of your website that work
            together to make it more beneficial to your target audience. Higher
            rankings mean more site traffic and it’s no secret that more site
            traffic leads to more conversions and revenue over time.
          </p>
          <ol className="space-y-4 font-medium text-2xl tracking-[-0.02em] text-[#004B49]">
            {seoItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
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

        {/* Image Section */}
        <div className="w-full lg:w-3/4">
          <img
            src={service5}
            alt="SEO Service"
            className=" w-full max-w-[484px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SEO;
