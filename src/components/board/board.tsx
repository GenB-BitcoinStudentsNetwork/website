"use client";

import BioCard from "../bioCard";
import Heading2 from "../heading2";
import BoardDepartment from "./boardDepartmentLayout";
import BoardLayout from "./boardLayout";

const Board = () => {
  return (
    <div className="flex px-[6.5rem] py-16 justify-center items-center gap-2">
      <div className="flex flex-col items-center gap-8">
        <Heading2 text="Advisory Board" className="text-center" />
        <div className="flex flex-col items-start gap-24">
          <BoardLayout>
            <BoardDepartment title="General Advisors">
              <BioCard
                imagePath="/jeff.png"
                name="Jeff Booth"
                info="Lorem ipsum dolor sit amet consectetur. Nulla at at ornare scelerisque non."
                twitterLink="https://twitter.com/JeffBooth"
                linkedinLink="https://www.linkedin.com/in/jeffdbooth/?originalSubdomain=ca"
                npub="npub1s05p3ha7en49dv8429tkk07nnfa9pcwczkf5x5qrdraqshxdje9sq6eyhe"
              />
              <BioCard
                imagePath="/michael.png"
                name="Michael Rihani"
                info="Bitcoin Product Lead Cash App at Block"
                twitterLink="https://twitter.com/michaelrihani"
                linkedinLink="https://www.linkedin.com/in/michaelrihani/"
                npub="npub1zvrwm4n0rk3hftwyzl8csjaulatuvwvk2c3kc8u89mssgq7qrvks5zvf63"
              />
            </BoardDepartment>
            <BoardDepartment title="Finance & Operations">
              <BioCard
                imagePath="/abubakar.png"
                name="Abubakar Nur Khalil"
                info="Bitcoin core contributor | CEO & CTO at Recursive Capital | Board Member of ₿trust"
                twitterLink="https://twitter.com/ihate1999"
                linkedinLink="https://www.linkedin.com/in/abubakar-nur-khalil-29923b1a0/"
                npub="npub1sn0q3zptdcm8qh8ktyhwtrnr9htwpykav8qnryhusr9mcr9ustxqe4tr2x"
              />
              <BioCard
                imagePath="/lucas.png"
                name="Lucas Ferreira"
                info="Evangelist at Lightning Labs | Cofounder and Executive Director at Vinteum | Organizer of Satsconf"
                twitterLink="https://twitter.com/lucasdcf"
                linkedinLink="https://www.linkedin.com/in/ldecferreira/"
                npub="npub1pumdyz7qfu0suamv4nrl0vcg574dtl5mwazva6nyjxhpwc4ccxxqca3ane"
              />
            </BoardDepartment>
          </BoardLayout>
          <BoardLayout>
            <BoardDepartment title="University Outreach">
              <BioCard
                imagePath="/andrew.png"
                name="Andrew Bailey"
                info="Associate Professor at Yale-NUS College"
                twitterLink="https://twitter.com/resistancemoney?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                linkedinLink="https://www.linkedin.com/in/andrew-bailey-7100214/"
                npub="npub1yezu4atsdgchvlyjz5efwks8n7ze2rssq674qe04m5pp8e5y32tqfdawc7"
              />
              <BioCard
                imagePath="/burak.png"
                name="Burak Tamaç"
                info="Adjunct Professor at Montclair State University"
                twitterLink="https://twitter.com/burak_tamac"
                linkedinLink="https://www.linkedin.com/in/buraktamac/"
                npub=""
              />
            </BoardDepartment>
            <BoardDepartment title="Bitcoin Community Relationship">
              <BioCard
                imagePath="/caralie.png"
                name="Caralie Chrisco"
                info="Program Director at Wolf"
                twitterLink="https://twitter.com/Caralie_C"
                linkedinLink="https://www.linkedin.com/in/caralie-chrisco/"
                npub=""
              />
              <BioCard
                imagePath="/lisa.png"
                name="Martell Fox"
                info="Founder of Layer 4 Talent | Advisor at Librería de Satoshi | Advisor at Apollo"
                twitterLink="https://twitter.com/niftynei"
                linkedinLink="https://www.linkedin.com/in/lisaneigut/"
                npub="npub1e0z776cpe0gllgktjk54fuzv8pdfxmq6smsmh8xd7t8s7n474n9smk0txy"
              />
            </BoardDepartment>
          </BoardLayout>
          <BoardLayout>
            <BoardDepartment title="Career Development & Opportunities">
              <BioCard
                imagePath="/fox.png"
                name="Martell Fox"
                info="Founder of Layer 4 Talent | Advisor at Librería de Satoshi | Advisor at Apollo"
                twitterLink="https://twitter.com/Martellfox"
                linkedinLink="https://www.linkedin.com/in/martellfox/"
                npub="npub1jaxs73m0zadd7fkwmkef73srdpfkxs6krwdhvkp0axzefqlsrpuqcvsjkt"
              />
              <BioCard
                imagePath="/eric.png"
                name="Eric Podwojski"
                info="Co-Founder of Bitcoin Talent Co."
                twitterLink="https://twitter.com/epodrulz"
                linkedinLink="https://www.linkedin.com/in/eric-podwojski/"
                npub="npub15fyjxjaq0jpjerhfny2lz3wq9quzg4yetzdx4w98gc0jaulwcayqz937zg"
              />
            </BoardDepartment>
            <BoardDepartment title="Club Development & Support ">
              <BioCard
                imagePath="/chris.png"
                name="Chris Smith"
                info="Head of Relations at BTC Inc."
                twitterLink="https://twitter.com/ChrisSmithBTC"
                linkedinLink="https://www.linkedin.com/in/christianosmith/"
                npub="npub18evdx4jnsj03vgx95jsv25kcvp04rkstcfg6y2kcxjen9wd57v2sa7tjdt"
              />
              <BioCard
                imagePath="/d.png"
                name="D++"
                info="Bitcoin Professor | Revolutionary Cypherpunk"
                twitterLink="https://twitter.com/d_plus__plus"
                linkedinLink=""
                npub="npub1337xxyne0pw52zgd984xqqs2q7qhqpt7phhn7xp6t9yt406vrvescdpkdt"
              />
            </BoardDepartment>
          </BoardLayout>
        </div>
      </div>
    </div>
  );
};

export default Board;
