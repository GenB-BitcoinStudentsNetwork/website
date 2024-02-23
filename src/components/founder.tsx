"use client";

import BioCard from "./bioCard";
import Heading2 from "./heading2";

const Founders = () => {
  return (
    <div className="flex py-16 px-2 flex-col justify-center items-center gap-2">
      <div className="flex flex-col items-center gap-8">
        <Heading2 text="Meet Our Founders" className="text-center" />
        <div className="flex items-start gap-[4.5rem]">
          <BioCard
            founder
            imagePath="/person.png"
            name="Arsh Molu"
            info="Promoting Financial Freedom at HRF | Co-founder of Generation Bitcoin"
          />
          <BioCard
            founder
            imagePath="/person.png"
            name="Ella Hough"
            info="Bitcoin @ Cornell - Robert S. Harrison College Scholar Program | Founder @ Cornell Bitcoin Club | Project Lead @ GenB"
          />
        </div>
      </div>
    </div>
  );
};

// display: flex;
// align-items: flex-start;
// gap: 4.5rem;

export default Founders;
