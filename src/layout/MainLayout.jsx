import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  // Pages with black background
  const blackPages = ["/", "/works"];
  const isBlackPage = blackPages.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <div
        className={`min-h-screen ${
          isBlackPage ? "bg-[#001412] text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Navbar always visible */}
        <Navbar />

        {/* Page content */}
        <main className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
