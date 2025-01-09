"use client";

import Link from "next/link";

interface Props {
  text: string;
  link?: string;
}

const SecondaryButton = ({ text, link }: Props) => {
  const scrollToSection = (id: string) => {
    const element = document?.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {link ? (
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link);
          }}
          href={`#${link}`}
          className="bg-white text-primary gap-[0.5rem] py-4 px-6 lg:py-[1.5rem] lg:px-[2rem] rounded-lg border-[1px] border-solid border-primary text-sm lg:text-base font-sans font-semibold leading-normal hover:bg-dark-green hover:text-white hover:border-dark-green"
        >
          {text}
        </Link>
      ) : (
        <button className="bg-white text-primary gap-[0.5rem] py-4 px-6 lg:py-[1.5rem] lg:px-[2rem] rounded-lg border-[1px] border-solid border-primary text-sm lg:text-base font-sans font-semibold leading-normal hover:bg-dark-green hover:text-white hover:border-dark-green">
          {text}
        </button>
      )}
    </>
  );
};

export default SecondaryButton;
