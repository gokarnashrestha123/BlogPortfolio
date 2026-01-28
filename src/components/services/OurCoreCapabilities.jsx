import React from "react";
import Image1 from "../../assets/images/capability/coding-language 1.svg";
import Image2 from "../../assets/images/capability/icon2.svg";
import Image3 from "../../assets/images/capability/document 1.svg";
import Image4 from "../../assets/images/capability/coding 1.svg";
import Image5 from "../../assets/images/capability/interaction 1.svg";
import Image6 from "../../assets/images/capability/pen-tool 1.svg";

const OurCoreCapabilities = () => {
  const capabilities = [
    {
      image: Image1,
      title: "Frontend Development",
      list: [
        "React & Next.js",
        "Responsive UI",
        "Tailwind CSS",
        "Performance Optimization",
      ],
    },
    {
      image: Image2,
      title: "Backend Development",
      list: [
        "Node.js & Express",
        "REST APIs",
        "Authentication",
        "Database Integration",
      ],
    },
    {
      image: Image3,
      title: "Documentation & Planning",
      list: [
        "Technical Documentation",
        "Project Planning",
        "System Architecture",
        "Requirement Analysis",
      ],
    },
    {
      image: Image4,
      title: "Technology & Tools",
      list: [
        "Modern Tech Stack",
        "Cloud Services",
        "DevOps Tools",
        "Version Control",
      ],
    },
    {
      image: Image5,
      title: "UI / UX Design",
      list: [
        "User Research",
        "Wireframing",
        "Design Systems",
        "Figma Prototypes",
      ],
    },
    {
      image: Image6,
      title: "Interaction Design",
      list: [
        "Micro Interactions",
        "Animations",
        "User Flow Design",
        "Accessibility",
      ],
    },
  ];

  return (
    <div className=" h-full py-10 px-5 md:px-8 lg:pt-10 lg:pb-25 lg:px-20">
      <div className="mx-auto flex flex-col gap-20">
        {/* Heading */}
        <div className="text-center">
          <h5 className="text-xl font-bold text-[#33B8A9] tracking-[-0.02em]">
            Our Core Capabilities
          </h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] font-medium text-[#006458]">
            Our capabilities and expertise make us stand out from the noise
          </h1>
        </div>
        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#E5F6F4] p-10 "
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-[#CCEDE9] flex items-center justify-center z-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-7 h-7 object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-3xl font-semibold tracking-[-0.02em] text-[#006458] ">
                {item.title}
              </h3>

              {/* List */}
              <ul className="space-y-2">
                {item.list.map((point, i) => (
                  <li
                    key={i}
                    className="text-[#006458]/80 text-lg font-normal tracking-[-0.02em]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoreCapabilities;
