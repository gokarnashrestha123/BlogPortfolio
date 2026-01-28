import { createSlice } from "@reduxjs/toolkit";
import title1image1 from "../../assets/images/workpageImage/worktitle1.jpg";
import title1image2 from "../../assets/images/workpageImage/worktitle2.jpg";
import title1image3 from "../../assets/images/workpageImage/worktitle3.jpg";
import title1image4 from "../../assets/images/workpageImage/worktitle4.jpg";
// import blog5 from "../../assets/images/blogs/blog5.jpg";
// import blog6 from "../../assets/images/blogs/blog6.jpg";

const initialState = {
  items: [
    {
      id: 1,
      slug: "xooltech",
      image: title1image1,
      title: "XoolTech",
      year: "2026",
      tag: ["Brand Identity", "Web Design"],
      description:
        "We partnered with Rainfalls amazing team to create a website that tells their unique story and reflects on their values.",
      website: "https://xooltech.com",
    },
    {
      id: 2,
      slug: "flinkerk",
      image: title1image2,
      title: "Flinkerk",
      year: "2025",
      tag: ["Web Design"],
      description:
        "Flinkerk helps streamline your projects to develop and deploy software for the web in a fully automated way.",
      website: "https://flinkerk.com",
    },
    {
      id: 3,
      slug: "alberto-maya",
      image: title1image3,
      title: "Alberto Maya",
      year: "2025",
      tag: ["Design", "Web Development"],
      description: "High-performance websites built using modern technologies.",
      website: "https://albertomaya.com",
    },
    {
      id: 4,
      slug: "flickerd",
      image: title1image4,
      title: "Flickerd",
      year: "2024",
      tag: ["Graphic Design"],
      description:
        "Creative visuals and branding strategies for modern businesses.",
      website: "https://flickerd.com",
    },
  ],
};

const worksSlice = createSlice({
  name: ["works"],
  initialState,
  reducers: {},
});

export default worksSlice.reducer;
