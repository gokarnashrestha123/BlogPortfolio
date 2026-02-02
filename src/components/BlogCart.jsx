import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const BlogCart = ({ limit, variant = "dark" }) => {
  const blogs = useSelector((state) => state.blog.blogs);
  const isDark = variant === "dark";
  const navigate = useNavigate();

  // Pagination state (only used if no limit)
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Decide which blogs to show
  const paginatedBlogs = limit
    ? blogs.slice(0, limit) // Home page: limited blogs
    : blogs.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage); // Blog page: paginated

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // Get visible page numbers (max 6)
  const getVisiblePages = () => {
    const maxVisible = 6;
    let startPage = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisible + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className={`py-24 ${isDark ? "" : "bg-white"}`}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedBlogs.map((blog, index) => (
            <article
              key={index}
              className={`flex flex-col h-auto transition-transform duration-300 hover:scale-[1.02]
                ${isDark ? "bg-[#00211D]" : "bg-white border border-gray-200"}`}
            >
              <img
                onClick={() => navigate(`/blogs/${blog.id}`)}
                src={blog.image}
                alt={blog.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-6 flex flex-col gap-8 flex-1">
                <div className="flex justify-between items-center">
                  <p
                    className={`text-xs px-3 py-1 rounded-full text-white
    ${isDark ? "bg-[#006458]" : "bg-[#00A693] "}`}
                  >
                    {blog.category}
                  </p>

                  <p
                    className={`text-xs px-3 py-1 rounded-full text-white
    ${isDark ? "bg-[#006458]" : "bg-[#00A693] "}`}
                  >
                    {blog.readTime}
                  </p>
                </div>
                <h3
                  className={`font-semibold text-4xl  tracking-[-0.02em] ${
                    isDark ? "text-white" : "text-[#004B49]"
                  }`}
                >
                  {blog.title}
                </h3>
                <p
                  className={`text-lg  line-clamp-2 tracking-[-0.02em] ${
                    isDark ? "text-white" : "text-[#004B49]"
                  }`}
                >
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination (only if no limit prop) */}
        {!limit && totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              <GrFormPrevious />
            </button>

            {getVisiblePages().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? "bg-[#008576] text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              <MdNavigateNext />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCart;
