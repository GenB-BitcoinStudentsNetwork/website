import Heading2 from "../heading2";
import LeftTimeline from "../leftTimeline";
import RightTimeline from "../rightTimeline";

export default function Timeline() {
  return (
    <div className="flex justify-center items-center py-[4rem] px-8 lg:px-0">
      <div className="lg:w-[41rem] gap-12 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <Heading2 text="Project Timeline" />
          <p className="text-base text-black font-sans leading-[1.2rem]">
            Here are the key dates that will mark important milestones for the
            project.
          </p>
        </div>
        <div className="flex flex-col relative items-center justify-center">
          <LeftTimeline date="Jan 9, 2025" description="Application launches" />
          <RightTimeline date="Feb 15, 2025" description="Application Closes" />
          <LeftTimeline date="Mar 1, 2025" description="Decisions Released" />
          <RightTimeline date="Beginning of June" description="Depatures" />
          <LeftTimeline date="Mid August" description="Return" last={true} />
        </div>
      </div>
    </div>
  );
}
