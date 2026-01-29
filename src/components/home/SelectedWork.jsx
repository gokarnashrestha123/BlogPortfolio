import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SelectedWorks = ({ limit }) => {
  const works = useSelector((state) => state.works.items);
  const navigate = useNavigate();

  const visibleWorks = limit ? works.slice(0, limit) : works;

  return (
    <section className="w-full px-4 py-25">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-14">
        <h1 className="text-white font-medium lg:font-semibold text-3xl sm:text-4xl lg:text-6xl tracking-[-0.02em]">
          Selected works
        </h1>
        <p className="text-white/80 font-medium text-base sm:text-lg mt-2 tracking-[-0.02em]">
          See our featured works here
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visibleWorks.map((item) => (
          <div key={item.id} className="group">
            {/* Image */}
            <div
              onClick={() => navigate(`/Works/${item.id}`)}
              className="relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full aspect-[16/8] object-cover transition-transform duration-500 group-hover:scale-105
                "
              />

              {/* Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#008576] text-white rounded-full flex items-center justify-center text-xl">
                  View
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 md:gap-8 mt-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-white font-semibold text-4xl tracking-[-0.02em]">
                  {item.title}
                </h3>

                <div className="flex gap-4 flex-wrap">
                  {item.tag.map((tag, index) => (
                    <p
                      key={index}
                      className="text-sm uppercase tracking-wide bg-[#006458] text-white px-3 py-1 rounded-full"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>

              <p className="text-white font-medium lg:font-normal text-lg tracking-wide">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
