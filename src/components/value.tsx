"use client";

interface Props {
  text: string;
  heading: string;
}

const Value = ({ text, heading }: Props) => {
  return (
    <div className="flex flex-col w-full items-start gap-2">
      <div className="flex py-2 px-4 items-start gap-2 bg-[#FCF5FB] rounded-lg">
        <h4 className="text-primary text-lg font-semibold leading-[150%]">
          {heading}
        </h4>
      </div>
      <p className="text-black text-justify text-base leading-[150%]">{text}</p>
    </div>
  );
};

export default Value;
