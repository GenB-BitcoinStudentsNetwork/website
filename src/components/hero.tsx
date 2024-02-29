"use client";
import localFont from "next/font/local";
import PrimaryButton from "./buttons/primary";
import SecondaryButton from "./buttons/secondary";
import Image from "next/image";

// Font files can be colocated inside of `pages`
const grandis = localFont({ src: "../../static-font/Grandis-Bold.woff2" });
const Hero = () => {
  return (
    <div className="flex pt-8 md:pt-12 lg:pt-[8rem] w-full flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center p-4 lg:p-0 lg:w-[67rem] gap-12">
        <div className="flex flex-col items-center gap-4 lg:gap-[1.5rem]">
          <h1
            className={`text-black font-bold text-[2rem] lg:text-[4rem] text-center leading-[115%] lg:leading-[4.6rem] w-[19.75rem]  lg:w-[39.4375rem] ${grandis.className}`}
          >
            A Network of Student Bitcoiners 
          </h1>
          <div className="flex justify-center items-start gap-[1.5rem]">
            <PrimaryButton text="Get Involved" link="#get-involved" />
            <SecondaryButton text="See Our Resources" link="resources" />
          </div>
        </div>
        <div>
          <Image
            src={"/bitcoin_student.png"}
            width={1072}
            height={639}
            alt="Bitcoin Student"
            priority={true}
          />
        </div>
        <div id="about" />
      </div>
    </div>
  );
};

export default Hero;
