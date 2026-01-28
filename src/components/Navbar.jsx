import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import DesktopMenu from "../assets/images/icons/Desktop.png";
// import MobileMenu from "../assets/images/icons/Desktop.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isWorkPage = location.pathname === "/works";

  const navColor = isHomePage || isWorkPage ? "text-white" : "text-[#006458]";
  const menuIconColor = isOpen
    ? "text-black" // when menu is open (white bg)
    : isHomePage || isWorkPage
      ? "text-white"
      : "text-[#006458]";

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <header className={`fixed top-0 left-0 z-50 w-full ${navColor}`}>
      <div className="flex items-center justify-between px-5 py-4 md:px-8 lg:px-20">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-normal tracking-[0.02em]">
          Nitro.
        </h1>

        <button onClick={() => setIsOpen(true)}>
          <HiOutlineMenuAlt4
            className={`w-8 h-8 transition-colors duration-200 ${menuIconColor}`}
          />
        </button>
      </div>

      {/* Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Close button at top for mobile/tablet */}
          <div className="flex justify-end px-5 py-4 lg:hidden">
            <button onClick={() => setIsOpen(false)} className="text-[#006458]">
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="flex flex-col gap-50 lg:gap-0 lg:flex-row h-full">
            {/* Left Links */}
            <div className="flex-1 flex flex-col justify-center gap-8 px-8 lg:px-24">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl lg:text-4xl font-medium tracking-[0.02em] text-[#006458]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Info */}
            <div className="flex-1 border-l border-[#006458]/30 px-8 lg:px-24 py-10 flex flex-col gap-10 ">
              {/* Close button for desktop */}
              <div className="hidden lg:flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#006458]"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* Contact & Social (column) */}
              <div className="flex flex-col  gap-96">
                {/* Contact */}
                <div>
                  <h4 className="text-lg lg:text-xl text-[#006458]">
                    Get in touch
                  </h4>
                  <p className="text-2xl lg:text-3xl font-semibold text-[#006458]">
                    info@gmail.com
                  </p>
                </div>

                {/* Social (hidden on mobile & tablet) */}
                <div className="hidden lg:flex flex-col gap-3">
                  <h4 className="text-2xl text-[#006458]">Follow Us</h4>
                  <div className="flex gap-4 text-[#006458]">
                    {/* Social Media */}
                    <div className="flex justify-center lg:justify-end gap-4">
                      {[
                        FaFacebookF,
                        FaTwitter,
                        FaLinkedinIn,
                        FaInstagram,
                        FaWhatsapp,
                      ].map((Icon, index) => (
                        <div
                          key={index}
                          className="w-10 h-10 bg-[#008576] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00A693] transition"
                        >
                          <Icon className="text-white" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
