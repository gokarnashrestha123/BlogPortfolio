import React from "react";
import HeroSection from "../components/home/HeroSection";
import Services from "@/components/home/Services";
import SelectedWorks from "@/components/home/SelectedWork";
import DesignProcessPage from "../components/home/DesignProcessPage";
import ClientTestimonial from "../components/home/ClientTestimonial";
import BlogSection from "../components/home/BlogSection";
import QuestionPage from "../components/home/QuestionPage";
import ClientSection from "@/components/home/ClientSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <SelectedWorks />
      <DesignProcessPage />
      <ClientTestimonial />
      <BlogSection />
      <ClientSection/>
      <QuestionPage/>

     
    </div>
  );
};

export default HomePage;
