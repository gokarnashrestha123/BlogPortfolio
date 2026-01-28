import React from "react";
import Privacy from "../assets/images/privacyPolicy.jpg";

const PrivacyPolicy = () => {
  return (
    <div className=" bg-white w-full  text-[#004B49] py-10 px-5 md:px-8 md:py-15 lg:py-24 lg:px-20 desktop:px-35 flex flex-col gap-10 ">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.02em]">
        Privacy Policy
      </h1>

      <div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={Privacy}
            alt="Privacy Policy"
            className="w-full h-[210px] md:h-[500px] lg:h-[600px] desktop:h-[858px]  py-1 pb-1 object-cover"
          />
        </div>

        {/* Content */}
        <div className="py-5">
          <div className=" flex flex-col gap-15">
            <h4 className="text-xl  font-normal tracking-[0.02em] text-[#33B8A9]">
              Last revised on April 21st, 2021.
            </h4>

            <p className="text-lg font-normal tracking-[0.02em]">
              This page is used to inform website visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our website. If you choose to
              visit our website, then you agree to the collection and use of
              information in relation with this policy. The Personal Information
              that we collect are used for providing and improving the website.
              We will not use or share your information with anyone except as
              described in this Privacy Policy.
            </p>

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em] ">
                Information Collection and Use
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                For a better experience while using our website, we may require
                you to provide us with certain personally identifiable
                information, including but not limited to your name, phone
                number, and postal address. The information that we collect will
                be used to contact or identify you.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em]">
                Log Data
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                Cookies are files with small amount of data that is commonly
                used as an anonymous unique identifier. These are sent to your
                browser from the website that you visit and are stored on your
                computer’s hard drive. <br />
                Our website uses these “cookies” to collect information and to
                improve our website. You have the option to either accept or
                refuse these cookies, and know when a cookie is being sent to
                your computer. If you choose to refuse our cookies, you may not
                be able to use some portions of our website.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em]">
                Service Providers
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                <ol className="list-disc pl-5">
                  <li>To facilitate our Service;</li>
                  <li> To provide the Service on our behalf;</li>
                  <li>To perform Service-related services; or</li>
                  <li>To assist us in analyzing how our Service is used.</li>
                </ol>
                We want to inform our Service users that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em]">
                Security
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                Our Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over, and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em]">
                Links to the other site
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                Our Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites, get more info. We have no control over, and assume no
                responsibility for the content, privacy policies, or practices
                of any third-party sites or services.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em] ">
                Changes to the Privacy Policy
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                We may update our Privacy Policy from time to time. Thus, we
                advise you to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately after they
                are posted on this page.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-semibold tracking-[0.02em]">
                Contact Us
              </h3>
              <p className="text-lg font-normal tracking-[0.02em]">
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
