import GetStartedSteps from "../getStartedSteps";
import Heading2 from "../heading2";

export default function GetStarted() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[8rem] pb-[4rem] gap-12">
      <div className="flex flex-col items-center justify-center">
        <Heading2 text="Get Started with Layer Zero" />
        <p className="text-black text-base font-sans leading-[1.2rem]">
          Embarking on Layer Zero is simple. Here's how to get involved
        </p>
      </div>
      <div className="flex gap-6">
        <GetStartedSteps
          text="Learn about the program and its mission."
          step="01"
        />
        <GetStartedSteps
          text="Submit your application by February 1st"
          step="02"
        />
        <GetStartedSteps
          text="Join us in making a transformative impact from June 1 to August 15."
          step="03"
        />
      </div>
    </div>
  );
}
