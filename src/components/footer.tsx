"use client";
import { grandisBold } from "@/font/grandis";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./navMenu";
import SocialLink from "./socialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col py-16 items-center justify-center bg-dark-green border-t-[1px] border-solid border-white">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href={"/"}>
              <Image
                src={"/logo_footer.svg"}
                alt={"Student Network"}
                height={0}
                width={0}
                sizes="100vw"
                className="w-[9.0625rem] h-[3.5rem] lg:w-[10.75rem] lg:h-[4.125rem]"
              />
            </Link>
          </div>
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
              name="Advisory Board"
              sectionName="board"
              className="text-white text-sm"
            />
            <NavMenu
              name="Our Network"
              sectionName="network"
              className="text-white text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <SocialLink
              imagePath="/dark_twitter.svg"
              link="https://x.com/btcstudents?s=21&t=IxybiNgN9ZpCC2NRLPEURQ"
              name="twitter"
            />
            <SocialLink
              imagePath="/tree.svg"
              link="https://linktr.ee/btcstudents"
              name="tree"
            />
          </div>
          <div className="flex items-center justify-center gap-1 lg:gap-2">
            <p className="text-white text-center text-base leading-[150%]">
              ©BSN {currentYear} |{" "}
              <Link href={"https://www.wearegada.com/"} target="_blank">
                Built by GADA Studios
              </Link>{" "}
              |
            </p>
            <Link href={"https://builders.btrust.tech/"} target="_blank">
              <Image
                src={"/btrust.svg"}
                alt="Btrust"
                height={0}
                width={0}
                sizes="100vw"
                className="w-[3.25rem] h-[1.375rem] lg:w-[3.25rem] lg:h-[1.375rem]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-[1.125rem] items-center px-4">
          <div className="w-[6rem] h-[0.125rem] bg-primary rounded"></div>
          <div className="flex flex-col gap-y-2 items-center justify-center w-full lg:w-[45.5rem]">
            <h3 className="font-sans font-bold text-[1.125rem] leading-[150%] tracking-[0%] text-center text-white">
              Disclaimer!!!
            </h3>
            <p className="font-sans text-white text-base leading-[150%] tracking-[0%] text-center">
              Contributions to Bitcoin Students Network are not deductible as
              charitable contributions for federal income tax purposes. Bitcoin
              Students Network is a 501(c)(4) nonprofit organization.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
