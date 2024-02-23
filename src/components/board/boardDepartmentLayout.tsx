"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}
const BoardDepartment = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="text-black text-2xl font-bold leading-[150%]">{title}</h3>
      <div className="flex items-start gap-6">{children}</div>
    </div>
  );
};

export default BoardDepartment;
