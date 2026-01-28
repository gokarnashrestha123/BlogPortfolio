import React from "react";
import BlogSinglePost from "@/components/blog/BlogSinglePost";
import ArticlesSection from "@/components/blog/ArticleSection";

const BlogDetailsPage = () => {
  return (
    <div className="w-full py-10 px-5 md:py-15 md:px-8 lg:py-24 lg:px-20">
      <div>
        <BlogSinglePost />
        <ArticlesSection limit={4}/>
        
      </div>
    </div>
  );
};

export default BlogDetailsPage;
