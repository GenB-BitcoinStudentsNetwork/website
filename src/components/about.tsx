"use client";
import { grandisBold } from "@/font/grandis";
import Image from "next/image";
import OutlineBox from "./outlineBox";
import StepCount from "./stepCount";

const About = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-center gap-2 justify-center py-16 px-2 bg-dark-green">
        <Image
          alt="Qoutation Mark"
          src={"/quoteLeft.svg"}
          width={42}
          height={40}
        />
        <p className="text-center text-white text-[1.75rem] font-sans font-normal leading-[2.625rem] w-[63.8125rem] py-6">
          Our mission is to foster a global network of Bitcoin students and
          clubs, connecting students with opportunities and resources within the
          Bitcoin ecosystem, and promoting education, collaboration, and
          participation.
        </p>
        <Image
          alt="Qoutation Mark"
          src={"/quoteRight.svg"}
          width={42}
          height={40}
        />
      </div>
      <div className="flex w-full py-16 px-[6.5rem] flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-16">
          <p className="text-black text-center text-base font-sans font-normal leading-[1.5rem] w-[35.75rem]">
            The Bitcoin Students Network is a “one-stop shop” for students
            interested in learning about Bitcoin and contributing to the space.
            We aim to connect students to resources (logistical, educational &
            financial), opportunities (educational, job & skills-based), and
            importantly, to each other.
          </p>
          <div className="flex flex-col items-center gap-4">
            <h2
              className={`text-primary text-center text-2xl font-bold leading-normal ${grandisBold.className}`}
            >
              The network acts internationally to
            </h2>
            <div className="flex items-start gap-[2.187rem]">
              <OutlineBox
                height="h-[14rem]"
                text="Coordinate & support the creation of student clubs dedicated to Bitcoin"
                className="w-[9.9375rem]"
              >
                <Image
                  src={"/house.svg"}
                  height={68}
                  width={68}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Provide strategic support to scale existing clubs"
                className="w-[8.5rem]"
              >
                <Image
                  src={"/strategic.svg"}
                  height={68}
                  width={68}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Foster communication and exchange of resources between different clubs and Bitcoin educational initiatives"
                className="w-[14rem]"
              >
                <Image
                  src={"/foster.svg"}
                  height={68}
                  width={68}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Act as a bridge between students/universities and Bitcoiners/companies in the Bitcoin industry"
                className="w-[12.5rem]"
              >
                <Image
                  src={"/bridge.svg"}
                  height={68}
                  width={68}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Provide financial support to BSN associated clubs"
                className="w-[8.125rem]"
              >
                <Image
                  src={"/support.svg"}
                  height={68}
                  width={68}
                  alt="Coordinate"
                />
              </OutlineBox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-16 px-[6.5rem] flex-col justify-center items-center gap-2">
        <div className="flex items-end gap-[3.875rem]">
          <div className="flex flex-col items-start gap-5">
            <h2
              className={`text-primary text-[2.5rem] font-bold leading-normal ${grandisBold.className}`}
            >
              Our Vision
            </h2>
            <div className="flex flex-col w-[28.8125rem]">
              <p className="text-black text-base text-justify leading-[150%] font-normal">
                We aim to strengthen Layer 0, the social/human layer of bitcoin.
                This network of students and clubs will act as a point of
                contact between students and the Bitcoin industry (developers,
                companies, evangelists/educators, investors, etc.) and will
                enhance the foundation of new student groups and clubs across
                the world. It will be beneficial not only for students who will
                more easily find contacts in the space for advisory, but also
                for companies and projects in the space as they’ll have a pool
                of talented, educated students to recruit from and be able to
                offer opportunities to.
              </p>
              <p className="text-black text-base text-justify leading-[150%] font-normal mt-6">
                We believe that sharing resources and knowledge can enhance the
                activities of individual clubs and make them more efficient
                while maintaining their independence. This will benefit their
                members, universities and Bitcoin companies, as well as the
                development and adoption of this technology in general. We want
                to fill the gap that plagues academic pathways concerning
                learning the skills needed to work in Bitcoin and facilitate the
                meeting between students and companies.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/vision.png"}
              alt="Vision"
              height={518.39904}
              width={692}
            />
          </div>
        </div>
      </div>
      <div className="flex py-16 px-[6.5rem] flex-col justify-center items-center gap-2">
        <div className="flex items-start gap-[3.875rem]">
          <div className="flex items-center justify-center px-[4.5rem] py-[0.25rem]">
            <Image
              src={"/values.png"}
              alt="Vision"
              height={564.65008}
              width={514}
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h2
              className={`text-primary text-[2.5rem] font-bold leading-normal ${grandisBold.className}`}
            >
              Core Values
            </h2>
            <p className="text-black text-base text-justify leading-[150%] font-normal w-[28.8125rem]">
              We are a peer-to-peer network that is decentralized, but not
              disorganized. We have a founding team, an (industry) Board of
              Advisors, and a (student) Board of Advisors.
            </p>
            <div className="flex flex-col w-[28.8125rem]">
              <h3 className="text-black text-xl font-semibold leading-[150%] mb-2">
                We believe in: 
              </h3>
              <ul className="list-disc ml-[1rem] text-black text-justify text-base font-normal leading-[150%]">
                <li>
                  Freedom through knowledge:
                  <ul className="list-disc ml-[1rem]">
                    <li>
                      Individuals' freedom is the most important thing and we
                      believe that to obtain freedom, knowledge is essential.
                      Based on this consideration we focus on Bitcoin education
                      in order to teach young students why it's time to build a
                      more fair society.
                    </li>
                  </ul>
                </li>
                <li>
                  Open Source:
                  <ul className="list-disc ml-[1rem]">
                    <li>
                      The activities of BSN and all BSN affiliated clubs take
                      place in an open-source and non-profit logic
                    </li>
                  </ul>
                </li>
                <li>Proof of Work</li>
                <li>First Principles Thinking; Don’t Trust, Verify</li>
                <li>Low Time Preference</li>
                <li>Cypherpunk Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-16 px-[6.5rem] flex-col justify-center items-center gap-2">
        <div className="flex flex-col items-start gap-[1.8125rem]">
          <div className="flex items-center gap-[3.9375rem]">
            <h2
              className={`${grandisBold.className} text-primary text-[2.5rem] font-bold leading-normal w-[15.6875rem]`}
            >
              Our steps to run the network
            </h2>
            <div className="flex items-start gap-6">
              <OutlineBox
                text="New resources & opportunities are broadcast to all nodes"
                className="w-[15.125rem]"
              >
                <StepCount step="1" />
              </OutlineBox>
              <OutlineBox
                text="Each node collects new resources & opportunities into their club/community"
                className="w-[15.125rem]"
              >
                <StepCount step="2" />
              </OutlineBox>
              <OutlineBox
                text="Each node works on doing their proof-of-work for its club/community"
                className="w-[15.125rem]"
              >
                <StepCount step="3" />
              </OutlineBox>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <OutlineBox
              text="When a node does their proof-of-work, it broadcasts their efforts to all nodes"
              className="w-[15.125rem]"
            >
              <StepCount step="4" />
            </OutlineBox>
            <OutlineBox
              text="Nodes accept the work only if all resources & opportunities in it are valid and useful to them"
              className="w-[15.125rem]"
            >
              <StepCount step="5" />
            </OutlineBox>
            <OutlineBox
              text="The founders & board express their acceptance of the nodes’ work by providing funding to them and continuing to work] on creating the next club/community in the network and growing the it’s resources for all. "
              className="w-[34.75rem]"
            >
              <StepCount step="6" />
            </OutlineBox>
          </div>
        </div>
      </div>
    </div>
  );
};

// color: #B860AC;
// text-align: center;
// leading-trim: both;
// text-edge: cap;
// font-family: Grandis;
// font-size: 4rem;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
export default About;
