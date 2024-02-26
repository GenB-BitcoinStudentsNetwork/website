"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./navMenu";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const Navigation = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash.substring(1));
    }
  }, []);

  return (
    <nav
      className="w-full flex justify-between items-center px-[6.5rem] pt-[1.5625rem] pb-[1.5rem] bg-white shadow-md"
      style={{ boxShadow: "0px 2px 0px 0px rgba(0, 7, 47, 0.10)" }}
    >
      <Link
        className="flex items-center justify-center cursor-pointer"
        onClick={() => scrollToSection("home")}
        href="/"
      >
        <Image src={"/logo.svg"} width={83} height={47} alt={"Logo"} />
      </Link>
      <div className=" inline-flex items-start gap-[2.5rem]">
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
        className="bg-primary text-white px-[1.2rem] py-[0.875rem] rounded-lg gap-2"
      >
        Get Involved
      </Link>
    </nav>
  );
};

export default Navigation;
