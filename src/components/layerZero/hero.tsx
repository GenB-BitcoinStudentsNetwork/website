import PrimaryButton from "../buttons/primary";
import H1 from "../h1";
import localFont from "next/font/local";
const grandis = localFont({ src: "../../../static-font/Grandis-Bold.woff2" });

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-[50rem] flex items-center justify-center flex-col gap-6 my-[8rem]">
        <button
          className={`text-[1.125rem] font-bold text-primary px-6 py-[1.125rem] border-primary border rounded-[2.8125rem] ${grandis.className}`}
        >
          LAYER ZERO
        </button>
        <H1
          text="Building the Foundation for Global Collaboration and Innovation"
          className="!w-[50rem]"
        />
        <PrimaryButton text="Apply Now" link="#get-involved" />
      </div>
    </div>
  );
}
