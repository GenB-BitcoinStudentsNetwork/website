import Heading2 from "../heading2";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col py-[6rem] px-[6.5rem] bg-dark-green gap-6 w-full">
      <Heading2 text="About Layer Zero" />
      <div className="flex flex-col gap-12 lg:w-[77rem]">
        <p className="font-sans text-[1.5rem] leading-[2.25rem] text-white lg:w-[71.9375rem]">
          Layer Zero is a transformative initiative designed to empower students
          to engage in creating and strengthening the foundational social layer
          of decentralized systems. Inspired by the concept of "Layer Zero" as
          the human and cultural infrastructure that supports decentralized
          technologies, this program offers participants an unparalleled
          opportunity to learn by doing, immersing themselves in communities
          worldwide, and contributing to shaping the future of global
          collaboration.
        </p>
        <div className="flex justify-between items-center gap-8 w-full">
          <div>
            <Image
              src={"/layer_network.png"}
              alt={"Network"}
              sizes={"100vw"}
              height={0}
              width={0}
              className={"lg:h-[15.5rem] lg:w-[15.4rem]"}
            />
          </div>
          <div className="flex items-center justify-center lg:w-[33rem] gap-8 flex-col">
            <p className="text-base leading-[1.5rem] text-white font-sans">
              Participants will undergo specialized training in decentralized
              technologies and community engagement, equipping them to
              contribute to projects focused on financial inclusion, digital
              literacy, and economic empowerment. Through hands-on experience,
              participants will learn how to "speak" the language of Bitcoin—the
              system and language of the future—and acquire these skills by
              actively using them.
            </p>
            <p className="text-base leading-[1.5rem] text-white font-sans">
              By engaging with communities across the globe, participants will
              facilitate the adoption of decentralized systems, educate
              underserved populations, and provide essential support for
              innovative solutions in areas lacking traditional infrastructure.
            </p>
          </div>
          <div className="flex justify-center lg:w-[24.6rem] gap-[1.5rem] flex-col">
            <p className="text-base leading-[1.5rem] text-white font-sans">
              Layer Zero is not just an initiative—it’s a movement to foster
              global collaboration and innovation. Participants gain real-world
              experience in applying decentralized principles, develop
              cross-cultural communication skills, and play a pivotal role in
              bridging gaps between financial systems and the digital economy.
              This initiative also builds a network of passionate advocates,
              paving the way for the next generation of decentralized leaders.
            </p>
            <div className="flex">
              <Link
                href={"/"}
                className="bg-primary text-white px-[1.25rem] py-[0.875rem] rounded-lg gap-2 hidden lg:flex"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
