"use client";
import React, { ReactNode } from "react";

interface Props {
  height?: string;
  text: string;
  children: ReactNode;
  className: string;
  network?: boolean;
}
const OutlineBox = ({ height, children, text, className, network }: Props) => {
  return (
    <div
      className={` w-full lg:w-auto flex p-4 lg:p-6 flex-col items-start gap-2 rounded-lg bg-transparent border-[1px] border-solid border-[#E3BFDE] ${
        height ? "lg:h-[14rem]" : "lg:h-[12.5rem]"
      }`}
    >
      <div className="flex flex-col gap-4 items-start">
        {children}
        <p
          className={`text-black text-base font-normal leading-[1.5rem] ${
            height && network ? "text-black" : height ? "text-white" : ""
          } ${className}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default OutlineBox;
