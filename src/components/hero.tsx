"use client";
import localFont from "next/font/local";
import PrimaryButton from "./buttons/primary";
import SecondaryButton from "./buttons/secondary";
import Image from "next/image";

// Font files can be colocated inside of `pages`
const grandis = localFont({ src: "../../static-font/Grandis-Bold.woff2" });
const Hero = () => {
  return (
    <div className="flex pt-[8rem] w-full flex-col items-center justify-center gap-2">
      <div className="w-[67rem]">
        <div className="flex flex-col items-center gap-[1.5rem]">
          <h1
            className={`text-black font-bold text-[4rem] text-center leading-[4.6rem] ${grandis.className}`}
          >
            A Network of Student Bitcoiners 
          </h1>
          <div className="flex justify-center items-start gap-[1.5rem]">
            <PrimaryButton text="Get Involved" />
            <SecondaryButton text="See Our Network" />
          </div>
        </div>
        <div>
          <Image
            src={"/students.png"}
            width={1072}
            height={639}
            alt="Bitcoin Student"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
