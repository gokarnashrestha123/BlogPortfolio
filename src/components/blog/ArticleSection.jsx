import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const ArticlesSection = ({ limit }) => {
  const blogs = useSelector((state) => state.blog.blogs);
  const navigate = useNavigate();

  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <div className="w-full px-5 my-15 md:px-8 ld:py-24 lg:px-20 desktop:px-35">
      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <h1 className="text-3xl md:test-4xl lg:text-5xl font-semibold tracking-[0.02em] text-[#00211D]">
            Other articles you might be interested
          </h1>
        </div>

        <div className="flex flex-col  gap-10 lg:gap-20 ">
          {displayedBlogs.map((blog, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 lg:gap-6 sm:flex-row h-full overflow-hidden "
            >
              {/* Image */}
              <img
                onClick={() => navigate(`/blogs/${blog.id}`)}
                src={blog.image}
                alt={blog.title}
                className="w-70 h-52 object-cover cursor-pointer"
              />

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1 ">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[#818EB0] mb-3">
                  <div className="flex flex-col md:flex-row gap-3 text-base font-normal tracking-[0.02em]">
                    <span className="">{blog.dob}</span>
                    <span className="">{blog.name}</span>
                  </div>
                  <span className="">{blog.readTime}</span>
                </div>

                <h3 className=" font-bold text-2xl tracking-[0.02em]  text-[#323B50]">
                  {blog.title}
                </h3>

                <p className="text-lg font-normal line-clamp-2 text-[#818EB0]">
                  {blog.description}
                </p>

                <span className="text-lg font-bold flex items-center gap-2 text-[#323B50] cursor-pointer">
                  
                  Read more
                  <FiArrowUpRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
