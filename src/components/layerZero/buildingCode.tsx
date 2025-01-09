export default function BuildingCode({
  text,
  header,
  image,
  className,
}: {
  text: string;
  header: string;
  image: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col border border-[#B860AC4D] rounded-2xl w-full px-[1rem] py-[1rem] gap-6 bg-white ${className}`}
    >
      <div className="w-[3.75rem] h-[3.75rem] bg-[#EFEEEE]"></div>
      <div className="flex flex-col gap-4">
        <h3 className="font-sans font-semibold text-[1.25rem] leading-[1.875rem] text-[#0F0F0F]">
          {header}
        </h3>
        <p className="text-[#0F0F0F] font-sans text-base leading-[1.5rem] font-normal">
          {text}
        </p>
      </div>
    </div>
  );
}
