import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import member1 from "../../assets/images/member/member1.png";
import member2 from "../../assets/images/member/member2.png";
import member3 from "../../assets/images/member/member3.png";
import member4 from "../../assets/images/member/member4.png";
import member5 from "../../assets/images/member/member5.png";


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      hidden lg:flex
      absolute bottom-[-80px] left-1/2 -translate-x-[60px]
       text-white
      items-center justify-center 
      transition z-10
    "
  >
    <IoIosArrowBack />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      hidden lg:flex
      absolute bottom-[-80px] left-1/2 translate-x-[12px]
        text-white
      items-center justify-center
      
      transition z-10
    "
  >
    <IoIosArrowForward />
  </button>
);


const ClientTestimonial = () => {
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
        "Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes—along the way.",
    },
    {
      name: "Hari KC",
      location: "Bhaktapur",
      img: member5,
      description:
        "We provide the final visual guide, all assets, and documentation to the client so they can launch or continue development.",
    },
  ];

 const settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: <PrevArrow />,
   nextArrow: <NextArrow />,
   centerMode: true,
   centerPadding: "0px",
   responsive: [
     {
       breakpoint: 1280, // tablet & below
       settings: {
         slidesToShow: 2,
         centerMode: false,
         arrows: false, // 🔥 disable slick arrows internally
       },
     },
     {
       breakpoint: 768, // mobile
       settings: {
         slidesToShow: 1,
         centerMode: false,
         arrows: false,
       },
     },
   ],
 };

  return (
    <section className=" text-white py-25 px-5 lg:px-20 md:px-6 flex flex-col items-center gap-10 md:gap-13 bg-[#001412] ">
      <div className="text-center ">
        <p className=" font-semibold text-4xl  md:text-5xl lg:text-6xl tracking-[-0.02em]">
          A few words from our clients
        </p>
      </div>

      <div className="w-full  relative ">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-6  flex justify-center ">
              <div className="bg-[#00211D] p-10  relative flex flex-col justify-between  h-[357px] md:h-[382px] lg:h-[304px] w-full">
                {/* Description */}

                <p className="font-normal  text-xl flex-1 tracking-[-0.02em]  line-clamp-4 overflow-hidden">
                  {client.description}
                </p>
                {/* Client Info: Image + Name/Location in one line */}
                <div className=" flex items-center gap-3 ">
                  <img
                    src={client.img}
                    alt={client.name}
                    className=" w-12 h-12 md:w-15 md:h-15 rounded-full "
                  />
                  <div className="text-left">
                    <h3 className=" text-2xl tracking-[-0.02em] font-semibold">
                      {client.name}
                    </h3>
                    <p className=" font-normal text-lg tracking-[-0.02em]">
                      {client.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientTestimonial;
