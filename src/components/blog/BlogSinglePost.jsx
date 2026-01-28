import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogSideBar from "./BlogSideBar";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const BlogSinglePost = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs);

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return <p className="text-center mt-10">No blog selected</p>;
  }

  return (
    <div className="w-full flex gap-5 md:gap-8 flex-col lg:flex-row">
      {/* Sidebar */}
      <BlogSideBar />

      {/* Blog Content */}
      <div className="flex-1 flex gap-4 flex-col text-[#323B50]">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.02em]">
          {blog.title}
        </h2>

        {/* Author */}
        <div className="flex items-center gap-4 ">
          <img
            src={blog.profilePhoto}
            alt={blog.name}
            className="w-12 h-12 p-1 rounded-full object-cover"
          />
          <div className=" ">
            <p className="font-bold tracking-[0.02em] capitalize text-xl">
              {blog.name}
            </p>
            <div className="flex gap-2 font-normal text-base tracking-[0.02em] text-[#818EB0] ">
              <p>{blog.dob}</p>
              <ul className="list-disc pl-4">
                <li>{blog.readTime}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex flex-col gap-4 pb-5">
          <img src={blog.image} alt="" className="h-[400px] w-full py-1 pl-1" />
          <p className=" font-normal text-base text-[#818EB0] text-right">
            Photo Credit : Unsplash
          </p>
          {blog.description && typeof blog.description === "string" ? (
            blog.description.split("\n\n ").map((sentence, idx) => (
              <p
                key={idx}
                className="font-normal text-lg text-[#323B50] tracking-[0.02em]  "
              >
                {sentence.trim()}.
              </p>
            ))
          ) : (
            <p className="font-normal text-lg text-[#323B50] tracking-[0.02em]">
              {blog.description}
            </p>
          )}
        </div>

        {/* Secondary Image */}
        {blog.image2 && (
          <div className="mt-8">
            <img
              src={blog.image2}
              alt=""
              className="h-[400px] w-full  py-1 pl-1"
            />
            <p className=" font-normal text-base text-[#818EB0] text-right">
              Photo Credit : Unsplash
            </p>
            {blog.secondDescription &&
            typeof blog.secondDescription === "string" ? (
              blog.secondDescription.split("\n\n ").map((sentence, idx) => (
                <p
                  key={idx}
                  className="font-normal text-lg text-[#323B50] tracking-[0.02em]"
                >
                  {sentence.trim()}.
                </p>
              ))
            ) : (
              <p className="font-normal text-lg text-[#323B50] tracking-[0.02em]">
                {blog.secondDescription}
              </p>
            )}
          </div>
        )}
        <div className="flex justify-center lg:justify-end gap-2 p-1 h-10 ">
          <p className="font-normal text-base text-[#818EB0] tracking-[0.02em] ">
            Share With:
          </p>

          {/* Social Media */}

          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-[#008576] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00A693] transition"
              >
                <Icon className="text-white" />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePost;
