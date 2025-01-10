import Link from "next/link";
import GetStartedSteps from "../getStartedSteps";
import Heading2 from "../heading2";

export default function GetStarted() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[3rem] pb-[3rem] lg:pt-[8rem] lg:pb-[4rem] gap-12 px-8 lg:px-0">
      <div className="flex flex-col items-center justify-center gap-2">
        <Heading2 text="Get Started with Layer Zero" />
        <p className="text-black text-base font-sans leading-[1.2rem]">
          Embarking on Layer Zero is simple. Here's how to get involved
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 flex-col lg:flex-row">
          <GetStartedSteps
            text="Learn about the program and its mission."
            step="01"
          />
          <GetStartedSteps
            text="Submit your application by February 15th"
            step="02"
          />
          <GetStartedSteps
            text="Join us in making a transformative impact from June 1 to August 15."
            step="03"
          />
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={"https://form.typeform.com/to/FXfttZrK"}
            className="bg-primary text-white px-[1.25rem] py-[0.875rem] rounded-lg gap-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
