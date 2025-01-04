import TimelineDate from "./timelineDate";
import TimelineDescription from "./timelineDescription";

export default function LeftTimeline({
  date,
  description,
  last,
}: {
  date: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 lg:w-[41rem] mb-10">
      <div className="flex items-center gap-12 w-full relative">
        <div className="lg:w-[17.0625rem] mr-12 flex flex-col gap-2 items-end">
          <TimelineDate date={date} />
          <TimelineDescription description={description} />
        </div>
        <div
          className="absolute h-[0.875rem] right-0 -mr-[0.4375rem] w-[0.875rem] bg-primary rounded-full"
          style={{ boxShadow: "0px 0px 0px 6px #FFD9E780" }}
        >
          {!last && (
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[7rem] w-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) -5.91%, #B860AC 50%)",
              }}
            ></div>
          )}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
