import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import member1 from "../../assets/images/member/member1.png";
import member2 from "../../assets/images/member/member2.png";
import member3 from "../../assets/images/member/member3.png";
import member4 from "../../assets/images/member/member4.png";
import member5 from "../../assets/images/member/member5.png";

const ClientTestimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const clients = [
    {
      name: "Gokarna Shrestha",
      location: "Kathmandu",
      img: member1,
      description:
        "Before starting anything, we work with the client to collect detailed information about the business, digital product, its users and explore every aspect of the project.",
    },
    {
      name: "Sita Lama",
      location: "Pokhara",
      img: member2,
      description:
        "The steps included in a UX audit will vary depending on the time and budget allotted to a project.",
    },
    {
      name: "Ram Thapa",
      location: "Biratnagar",
      img: member3,
      description:
        "We typically start with user personas, key use cases, competitive analysis, moodboards and with a well defined scope we can then start to build sitemaps, information architecture and proceed with wireframes.",
    },
    {
      name: "Mina Shrestha",
      location: "Lalitpur",
      img: member4,
      description:
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind.",
    },
    {
      name: "Hari KC",
      location: "Bhaktapur",
      img: member5,
      description:
        "We provide the final visual guide, all assets, and documentation to the client so they can launch or continue development.",
    },
  ];

  return (
    <section className="text-white py-24 px-5 md:px-6 lg:px-20 bg-[#001412] flex flex-col items-center gap-10">
      {/* Heading */}
      <div className="text-center">
        <p className="font-semibold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em]">
          A few words from our clients
        </p>
      </div>

      <div className="w-full relative">
        {/* Custom arrows (desktop only) */}
        <button
          ref={prevRef}
          className="hidden lg:flex absolute bottom-[-80px] left-1/2 -translate-x-[60px] text-white z-10"
        >
          <IoIosArrowBack />
        </button>

        <button
          ref={nextRef}
          className="hidden lg:flex absolute bottom-[-80px] left-1/2 translate-x-[12px] text-white z-10"
        >
          <IoIosArrowForward />
        </button>

        <Swiper
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 flex justify-center w-full">
                {/* CARD */}
                <div
                  className="
                  bg-[#00211D]
                  p-6 md:p-10
                  flex flex-col  gap-24
                  h-[400px]
                "
                >
                  {/* Description */}
                  <p
                    className="
                    font-normal text-xl tracking-[-0.02em]
                    line-clamp-4
                  "
                  >
                    {client.description}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-12 h-12 md:w-15 md:h-15 rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                        {client.name}
                      </h3>
                      <p className="text-lg tracking-[-0.02em]">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientTestimonial;
