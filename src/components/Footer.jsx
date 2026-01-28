import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white mb-0  py-20 px-5  md:px-8 md:py-24 lg:px-20 bg-[#001412]">
      {/* CTA Section */}
      <div className="py-20 mx-auto">
        <div className=" flex items-center">
          <h1
            className="
             font-normal
            text-6xl md:text-7xl
            tracking-[-0.02em]
          "
          >
            Have an idea?
            <span className="underline underline-offset-4 decoration-2 whitespace-nowrap">
              Let’s Talk
            </span>
          </h1>
        </div>
      </div>

      {/* Footer Content */}
      <div className=" mx-auto pt-10 md:pt-15  pb-5 md:pb-8">
        <div className="grid gap-4 ld:gap-5 lg:grid-cols-4">
          {/* Contact */}
          <div className="space-y-3">
            <h5 className="text-xl font-medium  tracking-[-0.02em]">
              Get in touch
            </h5>
            <h3 className="text-xl font-bold tracking-[-0.02em]">
              info@template.com
            </h3>
            <h3 className="text-xl font-medium  tracking-[-0.02em]">Phone</h3>
            <p className="text-base font-medium  tracking-[-0.02em]">
              +000 111 222 3333 <br />
              +444 555 666 7777
            </p>
            <h3 className="text-xl font-medium  tracking-[-0.02em]">Address</h3>
            <p className="text-base font-medium  tracking-[-0.02em] ">
              2352 Middlefield Rd, <br />
              Markham Ontario, Canada
            </p>
          </div>

          {/* Pages */}
          <div className="space-y-3">
            <h5 className="text-xl font-medium  tracking-[-0.02em]">Pages</h5>
            {[
              "Home",
              "Services",
              "Case Study",
              "About Us",
              "Blog",
              "Contact",
            ].map((item) => (
              <p
                key={item}
                className="text-base font-normal tracking-[-0.02em]  hover: cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Admin */}
          <div className="space-y-3">
            <h5 className="text-xl font-medium  tracking-[-0.02em] ">Admin</h5>
            {["404", "Login", "Licenses", "Instructions", "Changelog"].map(
              (item) => (
                <p
                  key={item}
                  className="text-base font-normal tracking-[-0.02em]  cursor-pointer"
                >
                  {item}
                </p>
              ),
            )}
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-medium  tracking-[-0.02em]">
              Reach out to us
            </h4>

            {/* Social Media */}
            <div className="grid grid-cols-3 gap-6">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaInstagram,
                FaWhatsapp,
                FaWhatsapp,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
                >
                  <Icon className="text-black" />
                </div>
              ))}
            </div>
            <p className="text-xl font-normal tracking-[-0.02em]">
              Join our mailing list and get to know exciting stuff at first hand
            </p>

            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white px-4 py-5 text-base text-[#9CA6C1] outline-none focus:border-white"
              />

              <div className="absolute right-0  top-1/2 -translate-y-1/2 w-16 h-16 bg-[#00A693]  flex items-center justify-center hover:opacity-90 transition">
                <FaTelegramPlane className="text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className=" mx-auto px-4 py-6 flex flex-col gap-5 sm:flex-row justify-between  text-base ">
          <p>Made it with love by Hexwaave. Powered by Webflow.</p>
          <Link to="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
