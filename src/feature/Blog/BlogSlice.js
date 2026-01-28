import { createSlice } from "@reduxjs/toolkit";

import blog1 from "../../assets/images/blogs/blog1.jpg";
import blog2 from "../../assets/images/blogs//blog2.jpg";
import blog3 from "../../assets/images/blogs//blog3.jpg";
import blogDetailImage1 from "../../assets/images/blogs/blogDetailsImage.jpg";
import profile from "../../assets/images/member/member1.png";

const initialState = {
  blogs: [
    {
      id: 1,
      image: blog1,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "BRAND IDENTITY",
      readTime: "5 MIN READ",
      title: "The importance of a strong brand identity",
      description:
        "How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success \n\n How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success",
      image2: blogDetailImage1,
      secondDescription:
        "How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.\n\n How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.",
    },
    {
      id: 2,
      image: blog2,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "UI/UX",
      readTime: "5 MIN READ",
      title: "Top 10 UI and UX design mistakes to avoid",
      description:
        "This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...",
    },
    {
      id: 3,
      image: blog3,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "WEB DEVELOPMENT",
      readTime: "5 MIN READ",
      title: "The benefits of using a web framework",
      description:
        "This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...",
    },
    {
      id: 4,
      image: blog1,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "BRAND IDENTITY",
      readTime: "5 MIN READ",
      title: "The importance of a strong brand identity",
      description:
        "This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...",
    },
    {
      id: 5,
      image: blog2,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "UI/UX",
      readTime: "5 MIN READ",
      title: "Top 10 UI and UX design mistakes to avoid",
      description:
        "This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...",
    },
    {
      id: 6,
      image: blog3,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "WEB DEVELOPMENT",
      readTime: "5 MIN READ",
      title: "The benefits of using a web framework",
      description:
        "This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...",
    },
    {
      id: 7,
      image: blog2,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "UI/UX",
      readTime: "5 MIN READ",
      title: "Top 10 UI and UX design mistakes to avoid",
      description:
        "This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...",
    },
    {
      id: 8,
      image: blog3,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "WEB DEVELOPMENT",
      readTime: "5 MIN READ",
      title: "The benefits of using a web framework",
      description:
        "This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...",
    },
    {
      id: 9,
      image: blog2,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "UI/UX",
      readTime: "5 MIN READ",
      title: "Top 10 UI and UX design mistakes to avoid",
      description:
        "This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...",
    },
    {
      id: 10,
      image: blog3,
      name: "gokarna shrestha",
      dob: "jun 17 2001",
      profilePhoto: profile,
      category: "WEB DEVELOPMENT",
      readTime: "5 MIN READ",
      title: "The benefits of using a web framework",
      description:
        "This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...",
    },
  ],
};

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

export default BlogSlice.reducer;
