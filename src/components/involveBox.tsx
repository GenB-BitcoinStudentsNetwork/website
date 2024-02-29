"use client";
import Image from "next/image";
import BtcPayButton from "./btcpay/btcpayButton";
import PrimaryButton from "./buttons/primary";

interface Props {
  text: string;
  className: string;
  imagePath: string;
  heading: string;
  buttonText: string;
  donation?: boolean;
  href?: string;
}

const InvolveBox = ({
  buttonText,
  imagePath,
  heading,
  text,
  className,
  donation,
  href,
}: Props) => {
  return (
    <div className="flex p-6 flex-col justify-between items-start gap-2 bg-[#FCF5FB] lg:h-[27.0625rem]">
      <div className="flex flex-col items-start gap-4 mb-6 lg:mb-0">
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
      {donation ? (
        <BtcPayButton />
      ) : (
        <PrimaryButton link={href} text={buttonText} />
      )}
    </div>
  );
};

export default InvolveBox;
