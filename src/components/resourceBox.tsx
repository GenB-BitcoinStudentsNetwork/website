"use client";
interface Props {
  heading: string;
  items: string[];
}

const ResourceBox = ({ heading, items }: Props) => {
  return (
    <div className="flex w-full lg:h-[7.1875rem] p-4 flex-col items-start gap-2 bg-[#263D2D] rounded-lg">
      <div className="flex w-full lg:w-[16.25rem] flex-col items-start gap-2">
        <h3 className="text-white text-lg font-semibold leading-[150%]">
          {heading}
        </h3>
        <ul className="list-disc text-white text-base font-normal leading-[150%] ml-[1.5rem]">
          {items.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourceBox;
