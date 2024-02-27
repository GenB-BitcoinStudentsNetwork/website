"use client";
import { grandisBold } from "@/font/grandis";
import Image from "next/image";
import Heading2 from "./heading2";
import OutlineBox from "./outlineBox";
import StepCount from "./stepCount";
import Value from "./value";

const About = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-center gap-2 justify-center py-8 lg:py-16 px-2 bg-dark-green">
        <Image
          alt="Qoutation Mark"
          src={"/quoteLeft.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className={`w-[1.575rem] h-[1.5rem] lg:w-[2.625] lg:h-[2.5rem]`}
        />
        <p className="text-center text-white text-base lg:text-[1.75rem] font-sans font-normal leading-[150%] w-[21.4375rem] lg:w-[63.8125rem] py-6">
          Our mission is to foster a global network of Bitcoin students and
          clubs, connecting students with opportunities and resources within the
          Bitcoin ecosystem, and promoting education, collaboration, and
          participation.
        </p>
        <Image
          alt="Qoutation Mark"
          src={"/quoteRight.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className={`w-[1.575rem] h-[1.5rem] lg:w-[2.625] lg:h-[2.5rem]`}
        />
      </div>
      <div className="flex w-full py-8 lg:py-16 px-4 lg:px-[6.5rem] flex-col items-center justify-center gap-2 bg-dark-green">
        <div className="flex flex-col items-center gap-16">
          <p className="text-white text-center text-sm lg:text-base font-sans font-normal leading-[150%] w-[21.4375rem] lg:w-[35.75rem]">
            The Bitcoin Students Network is a{" "}
            <span className="font-bold">“one-stop shop”</span> for students
            interested in learning about Bitcoin and contributing to the space.
            We aim to <span className="font-bold">connect students</span> to
            resources (logistical, educational & financial), opportunities
            (educational, job & skills-based), and importantly,{" "}
            <span className="font-bold">to each other</span>.
          </p>
          <div className="flex flex-col items-center gap-4">
            <h2
              className={`text-primary text-center text-base lg:text-2xl font-bold leading-normal ${grandisBold.className}`}
            >
              The network acts internationally to
            </h2>
            <div className="flex items-start gap-[2.187rem] flex-col lg:flex-row">
              <OutlineBox
                height="h-[14rem]"
                text="Coordinate & support the creation of student clubs dedicated to Bitcoin"
                className="w-full lg:w-[9.9375rem]"
              >
                <Image
                  src={"/house.svg"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className={`w-[4.26669rem] h-[4.26669rem]`}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Provide strategic support to scale existing clubs"
                className="w-full lg:w-[8.5rem]"
              >
                <Image
                  src={"/strategic.svg"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className={`w-[4.26669rem] h-[4.26669rem]`}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Foster communication and exchange of resources between different clubs and Bitcoin educational initiatives"
                className="w-full lg:w-[14rem]"
              >
                <Image
                  src={"/foster.svg"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className={`w-[4.26669rem] h-[4.26669rem]`}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Act as a bridge between students/universities and Bitcoiners/companies in the Bitcoin industry"
                className="w-full lg:w-[12.5rem]"
              >
                <Image
                  src={"/bridge.svg"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className={`w-[4.26669rem] h-[4.26669rem]`}
                  alt="Coordinate"
                />
              </OutlineBox>
              <OutlineBox
                height="h-[14rem]"
                text="Provide financial support to BSN-associated clubs"
                className="w-full lg:w-[8.125rem]"
              >
                <Image
                  src={"/support.svg"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className={`w-[4.26669rem] h-[4.26669rem]`}
                  alt="Coordinate"
                />
              </OutlineBox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-8 lg:py-16 px-4 lg:px-[6.5rem] flex-col justify-center items-center gap-2">
        <div className="flex flex-col-reverse lg:flex-row items-end gap-[3.875rem]">
          <div className="flex flex-col items-start gap-5">
            <Heading2 text="Our Vision" />
            <div className="flex flex-col w-full lg:w-[28.8125rem]">
              <p className="text-black text-sm lg:text-base text-justify leading-[150%] font-normal">
                We aim to strengthen Layer 0, the social/human layer of Bitcoin.
                This Network of students and clubs will act as a point of
                contact between students and the Bitcoin industry (developers,
                companies, evangelists/educators, investors, etc.), and it will
                enhance the foundation of new student groups and clubs
                worldwide. It will be beneficial not only for students who will
                more easily find contacts in the space for connection and
                advisory, but also for companies and projects in the space as
                they'll have a pool of talented, educated students to recruit
                from and be able to offer opportunities to.
              </p>
              <p className="text-black text-base text-justify leading-[150%] font-normal mt-6">
                We believe that sharing resources and knowledge can enhance the
                activities of individual clubs and make them more efficient
                while maintaining their independence. These resources will
                benefit their members, universities, and Bitcoin companies, as
                well as the development and adoption of this technology in
                general. We want to fill the gap that plagues academic pathways
                concerning learning the skills needed to work in Bitcoin and
                facilitate meetings between students and companies.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <Image
              src={"/vision.png"}
              alt="Vision"
              height={0}
              width={0}
              sizes={"100vw"}
              className={`w-[21.4375rem] h-[16.02738rem] lg:w-[44.3125rem;] lg:h-[33.1875rem]`}
            />
          </div>
        </div>
      </div>
      <div className="flex py-8 px-4 lg:py-16 lg:px-[6.5rem] flex-col justify-center items-center gap-2">
        <div className="flex flex-col lg:flex-row items-start gap-[3.875rem]">
          <div className="flex items-start flex-col gap-[6.125rem]">
            <div className="flex flex-col items-start gap-6">
              <Heading2 text="Core Values" />
              <p className="text-black text-base text-justify leading-[150%] font-normal w-full lg:w-[35.3125rem]">
                We are a peer-to-peer network that is decentralized but not
                disorganized. We have a founding team, an (industry) Board of
                Advisors, and a (student) Board of Advisors.
              </p>
            </div>
            <Image
              src={"/values.png"}
              alt="Vision"
              height={564.65008}
              width={514}
            />
          </div>

          <div className="flex flex-col items-start gap-4 w-full lg:w-[37.8125rem]">
            <h3 className="text-black text-xl font-semibold leading-[150%] mb-2">
              We believe in: 
            </h3>
            <div className="flex flex-col items-start gap-6">
              <Value
                heading="Freedom through knowledge"
                text="Individuals' freedom is the most important thing and we believe that to obtain freedom, knowledge is essential. Based on this consideration, we focus on Bitcoin education to teach students why it's time to build a more inclusive, truthful, and honest world."
              />
              <Value
                heading="Open Source"
                text="The activities of BSN and all BSN-affiliated nodes take place in an open-source and non-profit logic. "
              />
              <Value
                heading="Proof of Work"
                text="Exert energy to do your own work; protect your integrity. Don't stake your worth/ability on another's words or actions. "
              />
              <Value
                heading="First Principles Thinking: Don't Trust, Verify"
                text="Bitcoin restores your agency. Don't rent out your decision-making and thought-forming abilities; form your own opinions and do your own research. "
              />
              <Value
                heading="Low Time Preference"
                text="Commit to thinking long-term, to resisting short-term gratification, and to your curiosity. "
              />
              <Value
                heading="Cypherpunk Vision"
                text="Awareness about the totalitarian drift of the fiat system unites nodes, fighting against mass surveillance and the abuse of power by governments in defense of individual freedoms and human rights. “We know that…a widely dispersed system can't be shut down” (h/t A Cypherpunk's Manifesto). "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-8 lg:py-16 px-4 lg:px-[6.5rem] flex-col justify-center items-center gap-2">
        <div className="flex flex-col items-start gap-6 lg:gap-[1.8125rem]">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[3.9375rem]">
            <h2
              className={`${grandisBold.className} text-primary text-[1.5rem] lg:text-[2.5rem] font-bold leading-[120%] lg:leading-normal w-full lg:w-[15.6875rem]`}
            >
              Our steps to run the Network (h/t Satoshi)
            </h2>
            <div className="flex items-start flex-col lg:flex-row gap-6">
              <OutlineBox
                text="New resources & opportunities are broadcast to all nodes"
                className="w-full lg:w-[15.125rem]"
              >
                <StepCount step="1" />
              </OutlineBox>
              <OutlineBox
                text="Each node collects new resources & opportunities into their club/community"
                className="w-full lg:w-[15.125rem]"
              >
                <StepCount step="2" />
              </OutlineBox>
              <OutlineBox
                text="Each node works on doing its proof-of-work for its club/community"
                className="w-full lg:w-[15.125rem]"
              >
                <StepCount step="3" />
              </OutlineBox>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            <OutlineBox
              text="When a node does its proof-of-work, it broadcasts its efforts to all nodes."
              className="w-full lg:w-[15.125rem]"
              height="14rem"
              network={true}
            >
              <StepCount step="4" />
            </OutlineBox>
            <OutlineBox
              text="Nodes accept the work only if all resources & opportunities in it are valid and valuable to them. "
              className="w-full lg:w-[15.125rem]"
              height="14rem"
              network={true}
            >
              <StepCount step="5" />
            </OutlineBox>
            <OutlineBox
              text="The founders & board express their acceptance of the nodes' work by providing funding to them and continuing to work on creating the next club/ community in the Network and growing the Network's resources for all. "
              className="w-full lg:w-[34.75rem]"
              height="14rem"
              network={true}
            >
              <StepCount step="6" />
            </OutlineBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
