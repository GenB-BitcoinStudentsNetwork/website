"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BoardLayout = ({ children }: Props) => {
  return <div className="flex items-start gap-[4.5rem]">{children}</div>;
};

export default BoardLayout;
