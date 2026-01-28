import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full bg-white py-15 px-5 md:px-8 lg:py-24 lg:px-20 desktop:px-35">
      <div className=" flex flex-col gap-10 md:gap-15 lg:gap-20">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl  lg:text-6xl font-normal  text-[#004B49]  tracking-[0.02em]">
          Hey! Tell us about your project
        </h1>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left Column: Form */}
          <div className=" flex flex-col gap-10 md:gap-15 text-[#818EB0]">
            <div>
              <h3 className="heading-secondary">Full Name</h3>
              <input
                type="text"
                placeholder="Full Name"
                className="input-primary"
              />
            </div>

            <div>
              <h3 className="heading-secondary ">Email</h3>
              <input
                type="email"
                placeholder="Email"
                className="input-primary"
              />
            </div>

            <div>
              <h3 className="heading-secondary ">Company Name</h3>
              <input
                type="text"
                placeholder="Company Name"
                className="input-primary"
              />
            </div>

            <div>
              <h3 className="heading-secondary">Project Budget (USD)</h3>
              <input
                type="text"
                placeholder="Project Budget"
                className="input-primary"
              />
            </div>

            <div>
              <h3 className="heading-secondary">
                Please tell us a bit about your project
              </h3>
              <textarea
                placeholder="Your project details..."
                className="input-primary h-[200px]"
              />
            </div>

            <button className="bg-[#00A693] submit-btn hover:bg-[#008f7f] text-white h-[48px] w-full rounded-md transition">
              Submit
            </button>
          </div>

          {/* Right Column: Contact Info */}
          <div className="text-[#008576] flex flex-col gap-10 text-center lg:text-right">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg md:text-xl font-regular tracking-[0.02em] ">
                Or write us an email directly
              </h4>
              <h2 className="text-2xl md:test-4xl font-semibold tracking-[0.02em] ">
                info@underrrated.com
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:test-3xl font-semibold tracking-[0.02em] ">
                Phone
              </h3>
              <p className="text-lg md:test-xl font-normal tracking-[0.02em]">
                +880 130 3478 950 <br />
                +880 177 5963 777
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:test-3xl font-semibold tracking-[0.02em]">
                Address
              </h3>
              <p className="text-lg md:test-xl font-normal tracking-[0.02em]">
                Panchakanya-2, Nuwakot
              </p>
            </div>

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
  );
};

export default ContactUs;
