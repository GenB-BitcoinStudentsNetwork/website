import Heading2 from "../heading2";
import Image from "next/image";

export default function Background() {
  return (
    <div className="flex flex-col w-full py-[2rem] px-[2rem] lg:px-[6.5rem] lg:py-[6rem] gap-12">
      <div className="flex items-center justify-center w-full">
        <Heading2 text="Background Inspiration" className="text-center" />
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
          <div className="flex w-full lg:min-w-[44rem] items-center justify-center">
            <div className="w-full">
              <Image
                src={"/community.svg"}
                alt={"Network"}
                sizes={"100vw"}
                height={0}
                width={0}
                className={"h-full w-full lg:h-[27rem] lg:w-full object-cover"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base font-normal leading-[1.5rem] font-sans text-[#0F0F0F]">
              Bitcoin fundamentally solves a communications channel problem by
              establishing a trustless system for transferring value and
              information without relying on intermediaries. At its core,
              Bitcoin addresses the challenge of ensuring agreement in a
              decentralized network, which is essentially a problem of
              communication and consensus among participants who may not trust
              each other.
            </p>
            <p className="text-base font-normal leading-[1.5rem] font-sans text-[#0F0F0F]">
              Layer Zero launches on January 9th, honoring the day the Bitcoin
              network first came alive in 2009. This date isn’t just history;
              it’s a reminder of what’s possible when a network of individuals
              unites around shared principles. With every new connection, the
              network grows stronger, amplifying its ability to create, protect,
              and inspire.
            </p>
            <p className="text-base font-normal leading-[1.5rem] font-sans text-[#0F0F0F]">
              The word “Bitcoin” appears twice in Satoshi Nakamoto’s white
              paper. The word “network”? Twenty-one times. A network isn’t just
              nodes and transactions - it’s people. With just two individuals, a
              network begins. With a shared mission, it thrives.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row w-full gap-8 items-center flex-col-reverse">
          <div className="flex flex-col gap-5">
            <p className="text-base font-normal leading-[1.5rem] font-sans text-[#0F0F0F]">
              The Bitcoin network holds immense power to foster connections
              worldwide. Through Bitcoin, we can communicate with people
              worldwide whom we’ve never even met, whose language we don’t
              speak, whose stories we don’t know and say, “I see you, I hear
              you, I value you, what you do means something to me - I respect
              you” in a way never before possible.
            </p>
            <p className="text-base font-normal leading-[1.5rem] font-sans text-[#0F0F0F]">
              It was a network that brought us Bitcoin, and it’s a network who
              are and will continue the mission to protect freedom, human
              flourishing, property rights, privacy, energy, agency, critical
              thinking, community, and much more.
            </p>
            <p className="text-base font-normal leading-[1.5rem] font-sans text-[#0F0F0F]">
              Layer Zero exists to strengthen that network. To empower those who
              believe in its potential. To ensure that the principles Bitcoin
              was built on continue to guide its future.
            </p>
          </div>
          <div className="flex w-full lg:min-w-[44rem] items-center justify-center">
            <Image
              src={"/work.svg"}
              alt={"Network"}
              sizes={"100vw"}
              height={0}
              width={0}
              className={
                "h-full w-full lg:h-[27.875rem] lg:w-full object-cover"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
