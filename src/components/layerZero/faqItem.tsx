import { useState } from "react";
import Image from "next/image";

export default function FaqList({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="rounded-2xl bg-white py-6 px-5 gap-4 mb-4 border"
      style={{ border: "solid 1px rgba(184, 96, 172, 0.2)" }}
    >
      <div
        className="flex justify-between items-center py-4 cursor-pointer w-full gap-12"
        onClick={toggleFAQ}
      >
        <h3 className="font-sans font-semibold text-xl text-[#001735]">
          {question}
        </h3>
        <div className="flex flex-col justify-center items-center h-8 w-8">
          <Image
            src={`${isOpen ? "/minus.svg" : "/plus.svg"}`}
            alt={"sign"}
            sizes={"100vw"}
            height={0}
            width={0}
            className={"w-full h-full"}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out flex flex-col lg:w-[43rem] ${
          isOpen ? "max-h-[200px] py-2" : "max-h-0"
        }`}
      >
        <p className="text-[#001735] text-sm font-sans">{answer}</p>
      </div>
    </div>
  );
}
