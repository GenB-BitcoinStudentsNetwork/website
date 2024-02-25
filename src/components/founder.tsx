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
            imagePath="/ash.png"
            name="Arsh Molu"
            info="Promoting Financial Freedom at HRF | Co-founder of Generation Bitcoin"
            twitterLink="https://twitter.com/arshmolu?lang=en"
            linkedinLink="https://www.linkedin.com/in/arsh-molu-b35783206/"
            npub="npub1wlkfvm7dvnusz9fv44wuwucu0jp3lc3wqt36ax0lz33hukjga7wq6hqwhy"
          />
          <BioCard
            founder
            imagePath="/ella.png"
            name="Ella Hough"
            info="Bitcoin @ Cornell - Robert S. Harrison College Scholar Program | Founder @ Cornell Bitcoin Club | Project Lead @ GenB"
            twitterLink="https://twitter.com/21MMforthe21st"
            linkedinLink="https://www.linkedin.com/in/ella-hough/"
            npub="npub1z5umqa38xfv94y3fpver2khw2qar2v54jetl24939j4f0yyhggdqrh5lwd "
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
