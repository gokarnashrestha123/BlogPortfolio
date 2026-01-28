import React from "react";

const WorkDetails = () => {
  return (
    <section className="w-full text-white flex flex-col gap-20">
      {/* Overview */}
      <div className="flex flex-col lg:flex-row gap-10">
        <h2 className="lg:w-1/5 text-4xl md:text-5xl lg:text-2xl font-semibold tracking-[0.02em]">
          Overview
        </h2>
        <p className="lg:w-4/5 text-lg font-medium tracking-[0.02em]">
          Usability waste of resources, for can we jump on a zoom, so red flag,
          for get in the driver's seat we just need to put these last issues to
          bed, so idea shower. Out of the loop have bandwidth.
        </p>
      </div>

      {/* Process */}
      <div className="flex flex-col lg:flex-row gap-10">
        <h2 className="lg:w-1/5 text-4xl md:text-5xl lg:text-2xl font-semibold tracking-[0.02em]">
          Process
        </h2>

        <div className="lg:w-4/5 flex flex-col gap-5">
          <div>
            <h3 className="text-[28px] md:text-[30px] font-semibold tracking-[0.02em]">
              Nam sed aspernatur non.
            </h3>
            <p className="text-lg font-medium tracking-[0.02em]">
              Usability waste of resources, for can we jump on a zoom, so red
              flag, for get in the driver's seat we just need to put these last
              issues to bed.
            </p>
          </div>

          <div>
            <h3 className="text-[28px] md:text-[30px] font-semibold tracking-[0.02em]">
              Velit officia et voluptatibus nisi
            </h3>
            <p className="text-lg font-medium tracking-[0.02em]">
              Usability waste of resources, for can we jump on a zoom, so red
              flag, for get in the driver's seat we just need to put these last
              issues to bed. Out of the loop have bandwidth.
            </p>
          </div>
        </div>
      </div>

      {/* Goals & Objectives */}
      <div className="flex flex-col lg:flex-row gap-10">
        <h2 className="lg:w-1/5 text-4xl md:text-5xl lg:text-2xl font-semibold tracking-[0.02em]">
          Goals & Objectives
        </h2>

        <ol className="lg:w-4/5 list-disc  text-lg font-medium tracking-[0.02em] flex gap-5 flex-col">
          <li>
            Usability waste of resources, for can we jump on a zoom, so red
            flag, for get in the driver's seat we just need to put these last
            issues to bed.
          </li>
          <li>
            Out of the loop have bandwidth, yet we need a recap by eod, cob or
            whatever comes first, feed the algorithm beef up.
          </li>
          <li>
            Idea shower, usability optimization, and aligning business goals
            with user needs.
          </li>
        </ol>
      </div>

      {/* Challenges */}
      <div className="flex flex-col lg:flex-row gap-10">
        <h2 className="lg:w-1/5 text-4xl md:text-5xl lg:text-2xl font-semibold tracking-[0.02em]">
          Challenges
        </h2>

        <ol className="lg:w-4/5 list-disc flex flex-col gap-5 text-lg font-medium tracking-[0.02em] ">
          <li>Limited development time</li>
          <li>Complex user flows</li>
          <li>Performance optimization</li>
        </ol>
      </div>

      {/* Result */}
      <div className="flex flex-col lg:flex-row gap-10">
        <h2 className="lg:w-1/5 text-4xl md:text-5xl lg:text-2xl font-semibold tracking-[0.02em]">
          Result
        </h2>

        <div className="lg:w-4/5 grid grid-cols-1 gap-5">
          
            <div className="flex gap-5">
              <h1 className="text-3xl md:test-5xl font-semibold tracking-[0.02em]">
                120%
              </h1>
              <p className=" text-lg font-medium tracking-[0.02em]">
                Increase in Conversions
              </p>
            </div>

            <div className="flex gap-5">
              <h1 className="text-3xl md:test-5xl font-semibold tracking-[0.02em]">
                100%
              </h1>
              <p className=" text-lg font-medium tracking-[0.02em]">
                User Engagement
              </p>
            </div>

            <div className="flex gap-5">
              <h1 className="text-3xl md:test-5xl font-semibold tracking-[0.02em]">
                200%
              </h1>
              <p className=" text-lg font-medium tracking-[0.02em]">
                Web Traffic
              </p>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default WorkDetails;
