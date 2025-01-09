import TimelineDate from "./timelineDate";
import TimelineDescription from "./timelineDescription";

export default function RightTimeline({
  date,
  description,
}: {
  date: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-2 lg:w-[41rem] mb-10">
      <div className=""></div>
      <div className="flex items-center gap-12 w-full relative">
        <div
          className="h-[0.875rem] w-[0.875rem] bg-primary rounded-full absolute left-0 -ml-[0.4375rem]"
          style={{ boxShadow: "0px 0px 0px 6px #FFD9E780" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[7rem] w-[1px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) -5.91%, #B860AC 50%)",
            }}
          ></div>
        </div>
        <div className="lg:w-[17.0625rem] flex flex-col gap-2 ml-12">
          <TimelineDate date={date} />
          <TimelineDescription description={description} />
        </div>
      </div>
    </div>
  );
}
