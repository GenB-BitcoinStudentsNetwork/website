"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  centerTitle?: boolean;
}

const BoardDepartment = ({ children, title, centerTitle = false }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-between gap-4 w-full">
      <h3
        className={`text-black text-lg lg:text-2xl font-bold leading-[150%] ${centerTitle ? "text-center w-full" : "text-left"
          }`}
      >
        {title}
      </h3>

      <div className="flex items-start gap-[0.94rem] lg:gap-6 w-full justify-center">
        {children}
      </div>
    </div>
  );
};

export default BoardDepartment;

