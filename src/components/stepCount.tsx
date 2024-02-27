import { grandisBold, grandisRegular } from "@/font/grandis";

interface Props {
  step: string;
}
const StepCount = ({ step }: Props) => {
  return (
    <div className="flex items-center w-[4rem] h-[4rem]">
      <h2
        className={`text-primary text-[2.5rem] lg:text-[4rem] ${grandisRegular.className} text-center font-normal leading-normal`}
      >
        {step}
      </h2>
    </div>
  );
};

export default StepCount;
