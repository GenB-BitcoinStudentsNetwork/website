"use client";

import PrimaryButton from "./buttons/primary";
import Heading2 from "./heading2";
import ResourceBox from "./resourceBox";

const Resources = () => {
  return (
    <div className="flex py-16 px-[6.5rem] flex-col justify-center items-center gap-2 bg-dark-green">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <Heading2 text="Our Resources" className="text-center" />
          <p className="text-white text-center text-base font-normal leading-[150%] w-[37.75rem]">
            Rest-easy! The Bitcoin Students Network aims to knock-down barriers
            to creating student Bitcoiner communities, and we’ve done the heavy
            lifting. Soon to be added will be resources under the following
            categories:
          </p>
        </div>
        <div className="flex items-center gap-6">
          <ResourceBox
            heading="Logistical"
            items={["Club start-up guides & best practices"]}
          />
          <ResourceBox
            heading="Educational"
            items={["Meeting plans & slides", "Recommended learning"]}
          />
          <ResourceBox
            heading="Partnerships"
            items={["Industry", "Individuals"]}
          />
          <ResourceBox heading="Financial" items={[]} />
        </div>
        <PrimaryButton text="Get Resources" />
      </div>
    </div>
  );
};

export default Resources;
