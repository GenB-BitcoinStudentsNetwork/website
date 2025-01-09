import StepCount from "./stepCount";

interface Props {
  step: string;
  text: string;
}
export default function GetStartedSteps({ step, text }: Props) {
  return (
    <div className="flex rounded-lg gap-2 p-6 lg:h-[13.125] bg-[#FCF5FB]">
      <div className="flex flex-col lg:w-[15.125rem] gap-6">
        <StepCount step={step} />
        <p className="text-base font-sans leading-[1.5rem] text-black">
          {text}
        </p>
      </div>
    </div>
  );
}
