export default function AboutCard({
  header,
  textArray,
}: {
  header: string;
  textArray: string[];
}) {
  return (
    <div
      className="flex flex-col py-[1.5rem] px-[1rem] gap-[2rem] rounded-2xl"
      style={{ backgroundColor: "rgba(0, 69, 20, 0.4)" }}
    >
      <h3 className="text-[1.75rem] font-sans font-normal leading-[2.625rem] text-white">
        {header}
      </h3>
      <div className="flex flex-col gap-6">
        {textArray.map((value: string, index: number) => (
          <p
            className="font-sans font-normal text-base leading-[1.5rem] text-[#E4E4E4]"
            key={index}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
}
