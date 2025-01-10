"use client";

import BioCard from "./bioCard";
import Heading2 from "./heading2";

const Founders = () => {
  return (
    <div className="flex py-8 lg:py-16 px-4 lg:px-2 flex-col justify-center items-center gap-2">
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <Heading2 text="Meet Our Founders" className="text-center" />
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-start lg:gap-[4.5rem]">
          <BioCard
            founder
            imagePath="/ash.png"
            name="Arsh Molu"
            info="Promoting Financial Freedom at HRF | Co-founder of Generation Bitcoin"
            twitterLink="https://twitter.com/arshmolu?lang=en"
            linkedinLink="https://www.linkedin.com/in/arsh-molu-b35783206/"
            npub="npub1wlkfvm7dvnusz9fv44wuwucu0jp3lc3wqt36ax0lz33hukjga7wq6hqwhy"
            bio={[
              [
                "Arsh works at the Human Rights Foundation and is also the co-founder of Generation Bitcoin and the Bitcoin Students Network. Arsh is passionate about freedom, economics, and philosophy.",
              ],
            ]}
          />
          <BioCard
            founder
            imagePath="/ella.png"
            name="Ella Hough"
            info="Bitcoin @ Cornell - Robert S. Harrison College Scholar Program | Founder @ Cornell Bitcoin Club | Project Lead @ GenB"
            twitterLink="https://twitter.com/21MMforthe21st"
            linkedinLink="https://www.linkedin.com/in/ella-hough/"
            npub="npub1z5umqa38xfv94y3fpver2khw2qar2v54jetl24939j4f0yyhggdqrh5lwd"
            bio={[
              [
                "Ella believes the 21,000,000 bitcoin are humanity’s tools for the 21st century. Pursuing a Bitcoin-focused study at Cornell University, she studies the dynamics of Bitcoin’s diffusion through society.",
              ],
              [
                "Ellas is the founder of the Cornell Bitcoin Club, Project Lead at Generation Bitcoin, co-founder of the Bitcoin Students Network, author of the Bitcoin “quick start” blog, Sats Chats, and contributor to Bitcoin Magazine. Previously, Ella worked at IBM, where she managed STEM learning experiences for 75k+ students.",
              ],
            ]}
          />
        </div>
        <div id="board" />
      </div>
    </div>
  );
};

export default Founders;
