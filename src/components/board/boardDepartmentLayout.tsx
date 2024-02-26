"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}
const BoardDepartment = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 w-full">
      <h3 className="text-black text-lg lg:text-2xl font-bold leading-[150%]">
        {title}
      </h3>
      <div className="flex items-start gap-[0.94rem] lg:gap-6 w-full">
        {children}
      </div>
    </div>
  );
};

export default BoardDepartment;
