export default function TimelineDate({ date }: { date: string }) {
  return (
    <div className="bg-[#FCF5FB] px-4 py-[0.75rem] rounded-[0.625rem]">
      <h3 className="text-[#54274D] font-bold text-base leading-[1.5rem] font-sans">
        {date}
      </h3>
    </div>
  );
}
