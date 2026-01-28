import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import member1 from "../../assets/images/member/member1.png";
import member2 from "../../assets/images/member/member2.png";
import member3 from "../../assets/images/member/member3.png";
import member4 from "../../assets/images/member/member4.png";
import member5 from "../../assets/images/member/member5.png";
import member6 from "../../assets/images/member/member6.png";

const details = [
  { photo: member1, name: "Gokarna Shrestha", post: "CEO" },
  { photo: member2, name: "Jane Doe", post: "Designer" },
  { photo: member3, name: "John Smith", post: "Developer" },
  { photo: member4, name: "Mary Jane", post: "Marketing" },
  { photo: member5, name: "Paul Lee", post: "Support" },
  { photo: member6, name: "Sara Khan", post: "HR" },
];

const TeamPage = () => {
  return (
    <section className="w-full py-20 px-5 md:py-24 md:px-8 sm:px-6 lg:px-20 flex flex-col gap-1">
      <div className=" flex flex-col gap-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
          Meet Our Team
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {details.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden flex flex-col"
            >
              {/* Image with hover overlay */}
              <div className="relative w-full h-80 md:h-96 lg:h-80 overflow-hidden ">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100"
                />

                {/* Social overlay */}
                <div className="absolute inset-0 bg-[#09ADA8E5] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 ">
                  <div className="flex gap-4 text-xl text-[#09ADA8E5]">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#09ADA8E5] hover:text-white transition"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#09ADA8E5] hover:text-white  transition"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center  hover:bg-[#09ADA8E5] hover:text-white transition"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>

              {/* Name & Post */}
              <h3 className="font-medium  text-3xl  tracking-[-0.02em]">
                {member.name}
              </h3>
              <p className=" font-normal text-xl  tracking-[-0.02em]">
                {member.post}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
