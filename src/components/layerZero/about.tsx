import Heading2 from "../heading2";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col lg:py-[6rem] py-[3rem] lg:px-[6.5rem] px-[2rem] bg-dark-green gap-6 w-full">
      <div className="flex flex-col gap-6">
        <Heading2 text="About Layer Zero" />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full lg:w-[64rem]">
              Layer Zero is a transformative initiative designed to empower
              youth to engage in creating and strengthening Bitcoin’s
              foundational social layer and bring Bitcoin’s potential to life by
              focusing on its most important foundation: people.
            </p>
            <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full lg:w-[64rem]">
              Inspired by the concept of "Layer Zero" as the human and cultural
              infrastructure that supports decentralized and open-source
              technologies such as Bitcoin and Nostr, this program offers
              student-aged participants an unparalleled opportunity to learn by
              doing, immersing themselves in communities worldwide, and
              contributing to shaping the future of global collaboration and
              innovation.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[2rem]">
            <div className="flex items-center justify-center w-full lg:min-w-[35.5rem]">
              <Image
                src={"/network.png"}
                alt={"Network"}
                sizes={"100vw"}
                height={0}
                width={0}
                className={"h-full w-full lg:h-[35.5rem] lg:w-[33rem]"}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-full gap-6">
                <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full">
                  Picture yourself sitting with entrepreneurs as they explore
                  Bitcoin’s potential. Imagine classrooms alive with curiosity,
                  or communities taking bold strides toward independence—with
                  your help making it possible.
                </p>
                <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full">
                  Students will dive into specialized training that spans
                  technical skills and community engagement, preparing them to
                  drive projects focused on financial inclusion and economic
                  empowerment. They will gain hands-on experience, actively
                  learning to "speak" Bitcoin—the system and language of the
                  future—by putting their skills into practice. By working
                  directly with communities worldwide, participants accelerate
                  the adoption of decentralized technologies and support
                  innovative solutions in areas where traditional infrastructure
                  falls short.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full">
                  Layer Zero is not just an initiative—it’s a movement to foster
                  global collaboration and innovation. Students will not be
                  behind a desk, but rather will work side-by-side, building
                  skills while contributing to dynamic and productive teams
                  driving meaningful change together.
                </p>
                <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full">
                  Layer Zero is about turning belief into action. It’s about
                  stepping up and learning by doing. Bitcoin’s power starts with
                  people; it’s about connection and creating a future where
                  everyone has a chance to thrive.
                </p>
                <p className="text-base font-sans text-white leading-[1.5rem] font-normal w-full">
                  Are you ready to take the first step?
                </p>
              </div>
              <div className="flex w-full">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faq");
                  }}
                  href={"#faq"}
                  className="bg-primary text-white px-[1.25rem] py-[0.875rem] rounded-lg gap-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
