"use client";
interface Props {
  text: string;
  disabled?: boolean;
}
const PrimaryButton = ({ text, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`py-[1.5rem] px-[2rem] ${
        disabled ? "bg-[#4E444D;]" : "bg-primary"
      } text-white rounded-lg text-base font-semibold font-sans leading-normal gap-[0.5rem]`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
