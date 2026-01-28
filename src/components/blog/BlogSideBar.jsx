import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const BlogSideBar = () => {
  const [open, setOpen] = useState(false);

  const topics = [
    "User Research",
    "Portfolio Tips",
    "Interview Tips",
    "Website Optimization",
    "Webflow",
    "Design Strategy",
    "Design Systems",
    "UI Design",
    "UX Design",
  ];

  return (
    <aside className="w-full lg:w-72 flex flex-col gap-5 ">
      {/* Back to all blogs (clickable on mobile) */}
      <Link to="/blog">
        <div className="flex items-center gap-3 bg-[#E5F6F4] text-[#323B50] cursor-pointer font-[Supreme] p-4 text-lg tracking-[0.02em]">
          <BiLeftArrowAlt size={20} />
          <span>All Blogs</span>
        </div>
      </Link>

      {/* Topics header */}
      <div className="bg-[#E5F6F4] p-8 flex flex-col gap-7">
        <span
          onClick={() => setOpen(!open)}
          className="text- lg  text-[#004B49] font-bold tracking-[0.02em]"
        >
          All Topics
        </span>

        {/* Topic list */}
        <ul
          className={`
          
          ${open ? "block" : "hidden"}  
          md:block                     
          space-y-7
        `}
        >
          {topics.map((topic, index) => (
            <li
              key={index}
              className="text-[#004B49] text-base cursor-pointer transition  tracking-[0.02em]"
              onClick={() => setOpen(false)} // close on mobile after click
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSideBar;
