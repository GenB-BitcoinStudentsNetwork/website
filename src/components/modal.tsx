"use client";
import React, { ReactNode } from "react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="bg-white flex flex-col items-start gap-2 p-8 shadow-md relative rounded-2xl border-[1px] border-solid border-[#E3BFDE]">
            <button
              onClick={closeModal}
              className="absolute top-[-2rem] right-[-2rem] flex items-center justify-center p-6 bg-primary rounded-[50%] h-[4rem] w-[4rem]"
            >
              <Image
                src={"/close.svg"}
                alt="close"
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-[1rem] h-[1rem]"
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
