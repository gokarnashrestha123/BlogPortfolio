import React from "react";
import { Link } from "react-router-dom";
import leftarrow from "../../assets/images/icons/left.png";
import WorkDetails from "./WorkDetails";
import WorkImage from "./WorkImage";
import SelectedWorks from "../home/SelectedWork";

const WorkHeaderPage = ({ work }) => {
  return (
    <section className="w-full flex gap-15 flex-col md:gap-20 text-white px-5 py-10 md:px-8 md:py-24 lg:px-20 desktop:px-35">
      {/* Back link */}
      <Link
        to="/works"
        className="flex items-center font-medium gap-2 text-lg hover:opacity-100 transition"
      >
        <img src={leftarrow} alt="Back" className="w-4 h-4" />
        Back to work page
      </Link>

      {/* Content */}

      <div className=" flex flex-col md:flex-row justify-between">
        {/* Title & tag */}
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em]">
            {work.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            {(Array.isArray(work.tag) ? work.tag : work.tag.split("•")).map(
              (tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 font-bold bg-[#006458] rounded-full text-sm uppercase"
                >
                  {tag.trim()}
                </span>
              ),
            )}
          </div>
          {/* Description */}
          <p className="max-w-xl text-lg font-medium tracking-[-0.02em]">
            {work.description}
          </p>
        </div>

        {/* year & Website */}
        <div className="flex flex-col gap-4">
          {work.year && (
            <h3 className="text-3xl font-medium tracking-[-0.02em] ">
              {work.year}
            </h3>
          )}
          {work.website && (
            <a
              href={work.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-80 tracking-[-0.02em]"
            >
              Visit website →
            </a>
          )}
        </div>
      </div>

      {/* Header Image */}
      <div className="">
        <img
          src={work.image}
          alt={work.title}
          className="w-full aspect-[16/8] object-cover"
        />
      </div>

      <WorkDetails />
      <WorkImage />
      <SelectedWorks limit={2} />
    </section>
  );
};

export default WorkHeaderPage;
