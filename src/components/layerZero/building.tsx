import Link from "next/link";
import PrimaryButton from "../buttons/primary";
import SecondaryButton from "../buttons/secondary";
import Heading2 from "../heading2";
import BuildingCode from "./buildingCode";

export default function Building() {
  return (
    <div className="py-[2rem] lg:py-[6rem] px-[2rem] lg:px-[6.5rem] flex flex-col gap-12">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center lg:w-[43rem] w-full gap-2">
          <Heading2 text="Building Layer Zero" />
          <div className="w-full flex flex-col gap-5">
            <p className="text-base font-sans font-normal text-center leading-[1.5rem] text-[#0F0F0F]">
              Layer Zero is the heartbeat of the Bitcoin ecosystem - the human
              connections and peer-to-peer (P2P) network that bring the
              technology to life.
            </p>
            <p className="text-base font-sans font-normal text-center leading-[1.5rem] text-[#0F0F0F]">
              While Bitcoin itself is a protocol for transmitting and securing
              value, Layer Zero focuses on improving the social, educational,
              and cultural infrastructure that supports the technology. Rather
              than just imagining the future or reading about it, you have the
              opportunity to not only live it but also take an active role in
              shaping and building it.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid-cols-3 gap-6 lg:grid lg:gap-y-8 lg:gap-x-6">
        <BuildingCode
          text="By fostering global dialogue about Bitcoin’s potential, Layer Zero enables more effective collaboration among developers, educators, and adopters."
          header="Better Communication"
          image=""
        />
        <BuildingCode
          text="Bitcoin can only thrive when people, nodes in the human sense, connect, share knowledge, and build trust in the system's design and purpose."
          header="Stronger Communities"
          image=""
        />
        <BuildingCode
          text="Layer Zero supports cross-cultural, cross-disciplinary cooperation, where the focus is on shared goals like financial inclusion, economic empowerment, and decentralized innovation."
          header="Empowering Collaboration"
          image=""
        />
        <BuildingCode
          text="Building Layer Zero means creating systems of communication & coordination, empowerment, and resilience that complement Bitcoin’s technical layers, ensuring that people have the tools and relationships they need to shape and support the spontaneous order of the present and future."
          header="Human Protocols for a Decentralized World"
          image=""
          className="col-span-2"
        />
        <div className="flex flex-col gap-6 justify-end">
          <p className="text-[1.25rem] leading-[1.875rem] font-sans font-normal text-[#0F0F0F]">
            Layer Zero isn’t just a layer in the ecosystem, it’s the foundation.
            The stronger it is, the more Bitcoin can fulfill its promise to the
            world.
          </p>
          <div className="flex">
            <Link
              href={"https://form.typeform.com/to/FXfttZrK"}
              className="bg-primary text-white px-[1.25rem] py-[0.875rem] rounded-lg gap-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
