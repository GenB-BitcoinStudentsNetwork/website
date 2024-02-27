"use client";

import React, { ReactNode, useEffect } from "react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, closeModal, children }: Props) => {
  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center cursor-pointer z-50"
          onClick={closeModal}
        >
          <div className="bg-white flex flex-col items-start gap-2 p-[1.25738rem] lg:p-8 shadow-md relative rounded-2xl border-[1px] border-solid border-[#E3BFDE] cursor-default">
            <button
              onClick={closeModal}
              className="absolute top-[-1.25738rem] right-[-1.25738rem] lg:top-[-2rem] lg:right-[-2rem] flex items-center justify-center p-[0.943rem] lg:p-6 bg-primary rounded-[50%] h-[2.51471rem] w-[2.51471rem] lg:h-[4rem] lg:w-[4rem]"
            >
              <Image
                src={"/close.svg"}
                alt="close"
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-[0.62869rem] h-[0.62869rem] lg:w-[1rem] lg:h-[1rem]"
              />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
