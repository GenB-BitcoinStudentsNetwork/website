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
    <div className="flex p-6 flex-col justify-between items-start gap-2 bg-[#FCF5FB] h-[27rem]">
      <div className="flex flex-col items-start gap-4">
        <Image src={imagePath} height={72} width={72} alt={heading} />
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-black text-xl font-semibold leading-[150%]">
            {heading}
          </h3>
          <p
            className={`text-black text-base font-normal leadind-[150%] mb-6 ${className}`}
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
