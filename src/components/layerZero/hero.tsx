import PrimaryButton from "../buttons/primary";
import localFont from "next/font/local";
const grandis = localFont({ src: "../../../static-font/Grandis-Bold.woff2" });
const grandisNormal = localFont({
  src: "../../../static-font/Grandis-Regular.woff2",
});

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="lg:w-[50rem] flex items-center justify-center flex-col lg:gap-6 gap-4 lg:py-[8rem] py-[3rem]">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1
            className={`text-black font-bold text-[1.5rem] lg:text-[3.5rem] text-center leading-[115%] lg:leading-[4.6rem] w-[19.75rem] lg:w-full ${grandis.className}`}
          >
            Layer Zero
          </h1>
          <p
            className={`text-black text-[1.5rem] font-normal text-center leading-[1.8rem] w-[19.75rem] lg:w-[40.75rem] ${grandisNormal.className}`}
          >
            Building the Foundation for Global Collaboration and Innovation
            Through Community Immersion
          </p>
        </div>
        <PrimaryButton text="Apply Now" link="#get-involved" />
      </div>
    </div>
  );
}
