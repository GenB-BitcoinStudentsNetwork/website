"use client";

interface Props {
  text: string;
  heading: string;
}

const Value = ({ text, heading }: Props) => {
  return (
    <div className="flex flex-col w-full items-start gap-2">
      <div className="flex py-2 pl-0 pr-4 items-start gap-2 rounded-lg">
        <h4 className="text-primary text-base lg:text-lg font-semibold leading-[150%]">
          {heading}
        </h4>
      </div>
      <p className="text-black text-justify text-sm lg:text-base leading-[150%]">
        {text}
      </p>
    </div>
  );
};

export default Value;
