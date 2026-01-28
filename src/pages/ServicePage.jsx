import React from "react";
import OurServicesPage from "../components/services/OurServicesPage";
import OurCoreCapabilities from "../components/services/OurCoreCapabilities";
import OurWorkProcess from "../components/services/OurWorkProcess";
import OurUIUXProcessPage from "../components/services/OurUIUXProcessPage";
import Design from "../components/services/Design";
import WebDevelopment from "../components/services/WebDevelopment";
import SEO from "../components/services/SEO.JSX";

const Services = () => {
  return (
    <div className="bg-white">
      <OurServicesPage />
      <OurCoreCapabilities />
      <OurWorkProcess />
      <OurUIUXProcessPage />
      <Design />
      <WebDevelopment />
      <SEO/>
    </div>
  );
};

export default Services;
