"use client";

interface Props {
  text: string;
}

const SecondaryButton = ({ text }: Props) => {
  return (
    <button className="bg-white text-primary gap-[0.5rem] py-[1.5rem] px-[2rem] rounded-lg border-[1px] border-solid border-primary text-base font-sans font-semibold leading-normal">
      {text}
    </button>
  );
};

export default SecondaryButton;
