"use client";

import PrimaryButton from "./buttons/primary";
import Heading2 from "./heading2";
import ResourceBox from "./resourceBox";

const Resources = () => {
  return (
    <div className="flex py-8 lg:py-16 px-4 lg:px-[6.5rem] flex-col justify-center items-center gap-2 bg-dark-green">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <Heading2 text="Our Resources" className="text-center" />
          <p className="text-white text-center text-base font-normal leading-[150%] w-full lg:w-[37.75rem]">
            Rest-easy! The Bitcoin Students Network aims to knock down barriers
            to creating student Bitcoiner communities, and we've done the heavy
            lifting. Coming soon will be resources under the following
            categories:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <ResourceBox
            heading="Logistical"
            items={[
              'Club "start-up" guides & best practices',
              "Partnerships w/ Industry & Individuals",
            ]}
          />
          <ResourceBox
            heading="Educational"
            items={["Meeting plans & slides", "Recommended learning"]}
          />
          <ResourceBox
            heading="Financial"
            items={[
              "Funds to support Club activities",
              "Assistance with attending Bitcoin-related events",
            ]}
          />
        </div>
        <PrimaryButton disabled={true} text="Coming soon!" />
      </div>
    </div>
  );
};

export default Resources;
