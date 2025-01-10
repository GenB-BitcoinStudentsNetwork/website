"use client";

import Heading2 from "./heading2";
import InvolveBox from "./involveBox";

const GetInvolved = () => {
  return (
    <div className="flex py-8 lg:py-16 px-4 lg:px-[6.5rem] flex-col justify-center items-center gap-2 w-full">
      <div className="flex flex-col items-center gap-[1.5rem]">
        <Heading2 text="Ways to Get Involved" className="text-center" />
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <InvolveBox
            heading="Industry"
            imagePath="/industry.svg"
            text="Organize/speak on a panel, host a Twitter space, provide financial sponsorship, donate books, equipment, resources, etc., offer mentorship and expertise, share internship and job opportunities, lead workshops and training, offer networking opportunities, brainstorm collaborative projects…anything you can think of"
            className="w-full lg:w-[24.25rem]"
            buttonText="Get Started"
            href="https://form.typeform.com/to/mb4HufnC"
          />
          <InvolveBox
            heading="Students"
            imagePath="/student.svg"
            text="Join the Network! Fill out the form below to become a node, receive support in starting or growing your University's Bitcoin Club, and access educational/ job opportunities. Or, to simply connect with other Bitcoiners"
            className="w-full lg:w-[18.75rem]"
            buttonText="Join Us"
            href="https://form.typeform.com/to/D36UrIs8"
          />
          <InvolveBox
            heading="Donate"
            imagePath="/donation.svg"
            text="Your contribution, no matter the size, is most appreciated. Bitcoin Student Network is a 501(c)(4), and funds will be used to support our nodes and operational expenses. We will be sharing reports of how the sats are used"
            className="w-full lg:w-[18.75rem]"
            buttonText="Donate with BTCPAY"
            donation
          />
        </div>
      </div>
      <div id="resources" />
    </div>
  );
};

export default GetInvolved;
