import Heading2 from "../heading2";
import LeftTimeline from "../leftTimeline";
import RightTimeline from "../rightTimeline";

export default function Timeline() {
  return (
    <div className="flex justify-center items-center py-[4rem]">
      <div className="lg:w-[41rem] gap-12 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <Heading2 text="Project Timeline" />
          <p className="text-base text-black font-sans leading-[1.2rem]">
            Here are the key dates that will mark important milestones for the
            project.
          </p>
        </div>
        <div className="flex flex-col relative items-center justify-center">
          <LeftTimeline
            date="Dec 23, 2024"
            description="Begin outreach to communities."
          />
          <RightTimeline date="Jan 3, 2025" description="Launch application" />
          <LeftTimeline date="Feb 1, 2025" description="Application cutoff" />
          <RightTimeline
            date="Feb 1 - 10, 2025"
            description="Screen and interview applicants"
          />
          <LeftTimeline date="Feb 15, 2025" description="Send out approvals" />
          <RightTimeline date="Jun 1, 2025" description="Depart (flexible)" />
          <LeftTimeline
            date="Aug 15, 2025"
            description="Return (flexible)"
            last={true}
          />
        </div>
      </div>
    </div>
  );
}
