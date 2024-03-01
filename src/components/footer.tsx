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
                src={"/logo_footer.png"}
                alt={"Student Network"}
                height={0}
                width={0}
                sizes="100vw"
                className="w-[9.0625rem] h-[3.5rem] lg:w-[10.75rem] lg:h-[4.125rem]"
              />
            </Link>
            <p className="text-white text-center text-sm lg:text-base leading-[150%]">
              An initiative of Generation Bitcoin 501(c)(3)
            </p>
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
              imagePath="/blue_linkedin.svg"
              link="https://www.linkedin.com/company/generation-bitcoin/"
              name="linkedin"
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
      </div>
    </footer>
  );
};

export default Footer;
