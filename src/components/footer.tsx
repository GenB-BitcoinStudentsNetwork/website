"use client";
import { grandisBold } from "@/font/grandis";
import Image from "next/image";
import NavMenu from "./navMenu";
import SocialLink from "./socialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col py-16 items-center justify-center bg-dark-green border-t-[1px] border-solid border-white">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2 lg:hidden">
            <Image
              src={"/student-network.svg"}
              alt={"Student Network"}
              height={0}
              width={0}
              sizes="100vw"
              className="w-[12.25rem] h-[0.74119rem]"
            />
            <p className="text-white text-center text-sm leading-[150%]">
              An initiative of Generation Bitcoin 501(c)(3)
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1.21994rem]">
            <Image
              src={"/genb.png"}
              alt="GenB"
              height={0}
              width={0}
              sizes="100vw"
              className="w-[5.48963rem] h-[2.389rem] lg:hidden"
            />
            <Image
              src={"/btrust.svg"}
              alt={"Student Network"}
              height={0}
              width={0}
              sizes="100vw"
              className="w-[5.54044rem] h-[2.389rem] lg:hidden"
            />
          </div>
          <Image
            src={"/genb.png"}
            alt="GenB"
            height={0}
            width={0}
            sizes="100vw"
            className="w-[6.75rem] h-[2.9375rem] hidden lg:flex"
          />
          <div className="flex-col items-center justify-center gap-2 hidden lg:flex">
            <Image
              src={"/student-network.svg"}
              alt={"Student Network"}
              height={0}
              width={0}
              sizes="100vw"
              className="w-[14.75581rem] h-[0.89281rem]"
            />
            <p className="text-white text-center text-base leading-[150%]">
              An initiative of Generation Bitcoin 501(c)(3)
            </p>
          </div>
          <Image
            src={"/btrust.svg"}
            alt="Btrust"
            height={0}
            width={0}
            sizes="100vw"
            className="w-[6.8125rem] h-[2.9375rem] hidden lg:flex"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-[6rem] h-[0.125rem] bg-primary rounded"></div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
            <NavMenu
              name="About Us"
              sectionName="about"
              className="text-white text-sm"
            />
            <NavMenu
              name="Our Founders"
              sectionName="founders"
              className="text-white text-sm"
            />
            <NavMenu
              name="Advisory Board"
              sectionName="board"
              className="text-white text-sm"
            />
            <NavMenu
              name="Resources"
              sectionName="resources"
              className="text-white text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <SocialLink
              imagePath="/dark_twitter.svg"
              link="https://twitter.com/genbitcoiners"
              name="twitter"
            />
            <SocialLink
              imagePath="/blue_linkedin.svg"
              link=""
              name="linkedin"
            />
            <SocialLink
              imagePath="/tree.svg"
              link="https://linktr.ee/btcstudents"
              name="tree"
            />
          </div>
          <p className="text-white text-center text-base leading-[150%]">
            ©BSN {currentYear} | Built by GADA Studios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
