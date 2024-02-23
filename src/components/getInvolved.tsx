"use client";

import PrimaryButton from "./buttons/primary";
import Heading2 from "./heading2";
import InvolveBox from "./involveBox";

const GetInvolved = () => {
  return (
    <div className="flex py-16 px-[6.5rem] flex-col justify-center items-center gap-2 w-full">
      <div className="flex flex-col items-center gap-[1.5rem]">
        <Heading2 text="Ways to Get Involved" className="text-center" />
        <div className="flex items-start gap-6">
          <InvolveBox
            heading="Students"
            imagePath="/student.svg"
            text="Join the network! Fill out the form below to receive support in starting or growing your University's Bitcoin Club, receiving access to educational/ job opportunities, or just connecting with other Bitcoin students."
            className="w-[18.1875rem]"
            buttonText="Join Here!"
          />
          <InvolveBox
            heading="Industry"
            imagePath="/industry.svg"
            text="Organize/speak on a panel, Host a Twitter space, Financial Sponsorship (goes through GenB), Donating Books, Equipment, Resources, etc., Mentorship and Expertise, Internship and Job Opportunities, Workshops and Training, Networking Opportunities, Collaborative Projects, Event Sponsorship, Brand Promotion and Marketing Support…anything you can think of!"
            className="w-[34.0625rem]"
            buttonText="Get Started"
          />
          <InvolveBox
            heading="Donate"
            imagePath="/donation.svg"
            text="Donate to help the network grow and foster a great community of students bitcoiners."
            className="w-[12.75rem]"
            buttonText="Donate via Bitcoin"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
