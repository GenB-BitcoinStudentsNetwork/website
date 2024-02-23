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
                imagePath="/michael.png"
                name="Michael Rihani"
                info="Bitcoin Product Lead Cash App at Block"
              />
              <BioCard
                imagePath="/person.png"
                name="Jeff Booth"
                info="Lorem ipsum dolor sit amet consectetur. Nulla at at ornare scelerisque non."
              />
            </BoardDepartment>
            <BoardDepartment title="Finance & Operations">
              <BioCard
                imagePath="/abubakar.png"
                name="Abubakar Nur Khalil"
                info="Bitcoin core contributor | CEO & CTO at Recursive Capital | Board Member of ₿trust"
              />
              <BioCard
                imagePath="/person.png"
                name="Lucas Ferreira"
                info="Evangelist at Lightning Labs | Cofounder and Executive Director at Vinteum | Organizer of Satsconf"
              />
            </BoardDepartment>
          </BoardLayout>
          <BoardLayout>
            <BoardDepartment title="University Outreach">
              <BioCard
                imagePath="/andrew.png"
                name="Andrew Bailey"
                info="Associate Professor at Yale-NUS College"
              />
              <BioCard
                imagePath="/burak.png"
                name="Burak Tamaç"
                info="Adjunct Professor at Montclair State University"
              />
            </BoardDepartment>
            <BoardDepartment title="Bitcoin Community Relationship">
              <BioCard
                imagePath="/person.png"
                name="Martell Fox"
                info="Founder of Layer 4 Talent | Advisor at Librería de Satoshi | Advisor at Apollo"
              />
              <BioCard
                imagePath="/caralie.png"
                name="Caralie Chrisco"
                info="Program Director at Wolf"
              />
            </BoardDepartment>
          </BoardLayout>
          <BoardLayout>
            <BoardDepartment title="Career Development & Opportunities">
              <BioCard
                imagePath="/gloria.png"
                name="Gloria Zhao"
                info="Lorem ipsum dolor sit amet consectetur. Nulla at at ornare scelerisque non."
              />
              <BioCard
                imagePath="/eric.png"
                name="Eric Podwojski"
                info="Co-Founder of Bitcoin Talent Co."
              />
            </BoardDepartment>
            <BoardDepartment title="Club Development & Support ">
              <BioCard
                imagePath="/person.png"
                name="D++"
                info="Lorem ipsum dolor sit amet consectetur. Nulla at at ornare scelerisque non."
              />
              <BioCard
                imagePath="/person.png"
                name="Chris Smith"
                info="Head of Relations at BTC Inc."
              />
            </BoardDepartment>
          </BoardLayout>
        </div>
      </div>
    </div>
  );
};

export default Board;
