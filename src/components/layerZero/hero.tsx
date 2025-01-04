import PrimaryButton from "../buttons/primary";
import H1 from "../h1";
import localFont from "next/font/local";
const grandis = localFont({ src: "../../../static-font/Grandis-Bold.woff2" });

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="lg:w-[50rem] flex items-center justify-center flex-col lg:gap-6 gap-4 lg:py-[8rem] py-[3rem]">
        <button
          className={`text-[1.125rem] font-bold text-primary px-6 py-[1.125rem] border-primary border rounded-[2.8125rem] ${grandis.className}`}
        >
          LAYER ZERO
        </button>
        <h1
          className={`text-black font-bold text-[1.5rem] lg:text-[4rem] text-center leading-[115%] lg:leading-[4.6rem] w-[19.75rem] lg:w-full ${grandis.className}`}
        >
          Building the Foundation for Global Collaboration and Innovation
        </h1>
        <PrimaryButton text="Apply Now" link="#get-involved" />
      </div>
    </div>
  );
}
