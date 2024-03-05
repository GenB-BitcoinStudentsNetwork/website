"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./navMenu";
import { grandisBold } from "@/font/grandis";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const openNav = () => {
    setIsActive(true);
    document.querySelector("body")?.classList.toggle("no-scroll");
  };

  const closeNav = () => {
    setIsActive(false);
    document.querySelector("body")?.classList.remove("no-scroll");
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash.substring(1));
    }
  }, []);

  return (
    <nav
      className={`w-full flex-col p-4 md:p-8 lg:px-[6.5rem] lg:pt-[1.5625rem] top-0 lg:pb-[1.5rem] bg-white z-50 flex relative ${
        isActive ? "" : "h-auto sticky"
      }`}
      style={{ boxShadow: "0px 2px 0px 0px rgba(0, 7, 47, 0.10)" }}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1 lg:gap-3">
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            href="/"
          >
            <Image
              src={"/logo.svg"}
              height={0}
              width={0}
              sizes="100vw"
              alt={"Logo"}
              className="w-[4.37994rem] h-[1.6875rem] lg:w-[7.62431rem] lg:h-[2.9375rem]"
            />
          </Link>
          <div className="bg-black w-[0.0625rem] h-[1.6875rem]  lg:w-[0.0625rem] lg:h-[2.9375rem]" />
          <Link target="_blank" href="https://www.genbitcoin.org/">
            <Image
              src={"/genb_logo.png"}
              height={0}
              width={0}
              sizes="100vw"
              alt={"Logo"}
              className="w-[2.97144rem] h-[1.375rem] lg:w-[5.0625rem] lg:h-[2.1875rem]"
            />
          </Link>
        </div>

        <div className="items-start gap-[2.5rem] hidden lg:inline-flex">
          <NavMenu name="About Us" sectionName="about" />
          <NavMenu name="Advisory Board" sectionName="board" />
          <NavMenu name="Our Network" sectionName="network" />
        </div>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("get-involved");
          }}
          href={"#get-involved"}
          className="bg-primary hover:bg-dark-green text-white px-[1.2rem] py-[0.875rem] rounded-lg gap-2 hidden lg:flex"
        >
          Get Involved
        </Link>
        <div className="flex lg:hidden items-center justify-center h-8 w-8">
          {isActive ? (
            <Image
              src={"/cancel.svg"}
              alt={"Menu"}
              sizes={"100vw"}
              height={0}
              width={0}
              className={"h-8 w-8"}
              onClick={closeNav}
            />
          ) : (
            <Image
              src={"/hambuger.svg"}
              alt={"Menu"}
              sizes={"100vw"}
              height={0}
              width={0}
              className={"h-8 w-8"}
              onClick={openNav}
            />
          )}
        </div>
      </div>
      {isActive && (
        <div
          className="flex flex-col items-center w-full h-screen mt-16 top-0 left-0 absolute"
          style={{ background: "rgba(0, 0, 0, 0.50)" }}
        >
          <div className="flex items-center w-full flex-col gap-6 py-10 bg-white">
            <NavMenu
              name="About Us"
              sectionName="about"
              className={`text-base leading-[115%]`}
              mobile={true}
              closeNav={closeNav}
            />
            <NavMenu
              name="Advisory Board"
              sectionName="board"
              className={`text-base leading-[115%]`}
              mobile={true}
              closeNav={closeNav}
            />
            <NavMenu
              name="Our Network"
              sectionName="network"
              className={`text-base leading-[115%]`}
              mobile={true}
              closeNav={closeNav}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
