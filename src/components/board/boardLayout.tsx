"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BoardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-[4rem] lg:gap-[4.5rem] w-full">
      {children}
    </div>
  );
};

export default BoardLayout;
