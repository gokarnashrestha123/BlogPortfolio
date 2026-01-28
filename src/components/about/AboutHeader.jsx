import React from "react";

const AboutHeader = () => {
  return (
    <section className="text-[#008576] w-full  px-5 md:px-8 lg:px-20 py-20 md:py-24 desktop:py-35 desktop:px-24 flex flex-col gap-2.5 bg-[#E5F6F4] ">
      <div className="  flex gap-12 flex-col">
        {/* Title */}
        <h2
          className="font-semibold  text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em]
        "
        >
          Designers, Developers <br /> and Home Sapiens.
        </h2>

        {/* Paragraph */}
        <div className="flex xl:justify-end">
          <p
            className="
     font-normal  text-2xl md:text-3xl tracking-[-0.02em]
    max-w-full xl:max-w-[700px] 
  "
          >
            We are a small team but a force of nature. We are determined, we
            work non-stop and build relationships that our clients return to. We
            enjoy making our client’s businesses a success and go the extra mile
            to provide a service that creates a memorable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
