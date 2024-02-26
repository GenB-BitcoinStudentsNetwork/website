"use client";

import Link from "next/link";

interface Props {
  text: string;
  disabled?: boolean;
  link?: string;
}
const PrimaryButton = ({ text, disabled, link }: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
          className={`py-[1.5rem] px-[2rem] ${
            disabled ? "bg-[#4E444D;]" : "bg-primary"
          } text-white rounded-lg text-base font-semibold font-sans leading-normal gap-[0.5rem]`}
        >
          {text}
        </Link>
      ) : (
        <button
          disabled={disabled}
          className={`py-[1.5rem] px-[2rem] ${
            disabled ? "bg-[#4E444D;]" : "bg-primary"
          } text-white rounded-lg text-base font-semibold font-sans leading-normal gap-[0.5rem]`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
