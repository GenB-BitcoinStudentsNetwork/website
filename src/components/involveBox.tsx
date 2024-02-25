"use client";
import Image from "next/image";
import PrimaryButton from "./buttons/primary";

interface Props {
  text: string;
  className: string;
  imagePath: string;
  heading: string;
  buttonText: string;
}

const InvolveBox = ({
  buttonText,
  imagePath,
  heading,
  text,
  className,
}: Props) => {
  return (
    <div className="flex p-6 flex-col justify-between items-start gap-2 bg-[#FCF5FB] h-[27.0625rem]">
      <div className="flex flex-col items-start gap-4">
        <div className="display items-center justify-center h-[4.5rem] w-[4.5rem]">
          <Image
            src={imagePath}
            height={0}
            width={0}
            alt={heading}
            className="h-[4.5rem] w-[4.5rem]"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-black text-xl font-semibold leading-[150%]">
            {heading}
          </h3>
          <p
            className={`text-black text-base text-justify font-normal leadind-[150%] ${className}`}
          >
            {text}
          </p>
        </div>
      </div>
      <PrimaryButton text={buttonText} />
    </div>
  );
};

export default InvolveBox;
