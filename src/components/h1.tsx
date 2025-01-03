"use client";
import localFont from "next/font/local";
const grandis = localFont({ src: "../../static-font/Grandis-Bold.woff2" });

interface Props {
  text: string;
  className?: string;
}
export default function H1({ text, className }: Props) {
  return (
    <h1
      className={`text-black font-bold text-[2rem] lg:text-[4rem] text-center leading-[115%] lg:leading-[4.6rem] w-[19.75rem] lg:w-[39.4375rem] ${className} ${grandis.className}`}
    >
      {text}
    </h1>
  );
}
