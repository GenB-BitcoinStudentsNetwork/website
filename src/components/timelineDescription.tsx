export default function TimelineDescription({
  description,
}: {
  description: string;
}) {
  return (
    <p className="font-sans text-base leading-[1.5rem] text-[#0F0F0F]">
      {description}
    </p>
  );
}
