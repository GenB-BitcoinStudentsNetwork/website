"use client";

import Link from "next/link";

interface Props {
  text: string;
  disabled?: boolean;
  link?: string;
}
const PrimaryButton = ({ text, disabled, link }: Props) => {
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
            if (link.startsWith("#")) {
              e.preventDefault();
              scrollToSection(link.substring(1));
            }
          }}
          target={`${link.startsWith("#") ? "" : "_blank"}`}
          href={`${link}`}
          className={`py-4 px-6 lg:py-[1.5rem] lg:px-[2rem] ${
            disabled ? "bg-[#4E444D;]" : "bg-primary hover:bg-dark-green"
          } text-white rounded-lg text-sm lg:text-base font-semibold font-sans leading-normal gap-[0.5rem]`}
        >
          {text}
        </Link>
      ) : (
        <button
          disabled={disabled}
          className={`py-4 px-6 lg:py-[1.5rem] lg:px-[2rem] ${
            disabled ? "bg-[#4E444D;]" : "bg-primary hover:bg-dark-green"
          } text-white rounded-lg text-base font-semibold font-sans leading-normal gap-[0.5rem]`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
