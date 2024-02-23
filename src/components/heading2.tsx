"use client";

import { grandisBold } from "@/font/grandis";

interface Props {
  text: string;
  className?: string;
}
const Heading2 = ({ text, className }: Props) => {
  return (
    <h2
      className={`font-bold text-[2.5rem] leading-normal text-primary ${grandisBold.className} ${className}`}
    >
      {text}
    </h2>
  );
};

export default Heading2;
