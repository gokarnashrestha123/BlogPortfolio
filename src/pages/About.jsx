import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import TeamPage from "../components/about/TeamPage";
import ClientTestimonial from "../components/home/ClientTestimonial";
import ClientSection from "@/components/home/ClientSection";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <AboutHeader />
      <TeamPage />
      <ClientTestimonial />
      <ClientSection/>
    </div>
  );
};

export default About;
