import React, { useEffect, useState } from "react";
import BlogCart from "../BlogCart";

const BlogSection = () => {
    const [limit, setLimit] = useState(3);

    useEffect(() => {
      const updateLimit = () => {
        if (window.innerWidth < 768) {
          setLimit(1); // mobile
        } else if (window.innerWidth < 1024) {
          setLimit(2); // tablet
        } else {
          setLimit(3); // desktop
        }
      };

      updateLimit(); // initial run
      window.addEventListener("resize", updateLimit);

      return () => window.removeEventListener("resize", updateLimit);
    }, []);
  return (
    <div className="w-full px-5 py-20  md:px-8 md:py-24 lg:px-20">
      {/* Header */}
      <div className=" flex flex-col sm:flex-row gap-5 px-6 md:justify-between items-center">
        <h2 className="text-white  font-semibold text-5xl md:text-6xl tracking-[-0.02em]">
          Latest Articles
        </h2>

        <button className="border border-[#008576] text-white py-4 px-12 rounded hover:bg-[#008576] transition">
          <p className="font-bold text-lg tracking-[-0.02em]">View All</p>
        </button>
      </div>

      {/* ✅ Limit to 3 cards */}
      <BlogCart limit={limit} />
    </div>
  );
};

export default BlogSection;
