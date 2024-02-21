"use client";
interface Props {
  text: string;
}
const PrimaryButton = ({ text }: Props) => {
  return (
    <button className="py-[1.5rem] px-[2rem] bg-primary text-white rounded-lg text-base font-semibold font-sans leading-normal gap-[0.5rem]">
      {text}
    </button>
  );
};

export default PrimaryButton;
