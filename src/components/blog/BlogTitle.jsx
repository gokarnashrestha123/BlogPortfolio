import React from 'react'
import BlogCart from '../BlogCart';

const BlogTitle = () => {
  const categories = ["UI/UX", "Web Development", "SEO", "Marketing"];
  return (
    <div className="w-full py-10 px-5 md:py-20 md:px-8 lg:py-24 lg:px-20 desktop:px-35 flex flex-col gap-13 text-[#004B49]">
      <div className="flex flex-col gap-6 ">
        <h1 className="test-4xl md:text-5xl lg:test-6xl font-semibold tracking-[-0.02em] ">
          Blogs
        </h1>
        <p className="font-normal text-lg md:test-2xl tracking-[-0.02em] ">
          Discover the latest news, tips and user research insights from Nitro.
        </p>
      </div>
      <div className="">
        <div className="flex  flex-col md:flex-row justify-between ">
          <p className="font-semibold test-3xl tracking-[0.02em]">All Post</p>
          <select className=" w-70 md:w-36 h-12 px-5 py-3 rounded bg-[#CCEDE9]">
            <option value="" className="font-normal text-xl tracking-[0.02em] ">
              category
            </option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <BlogCart showTitle={false} variant="light" />
      </div>
    </div>
  );
}

export default BlogTitle
