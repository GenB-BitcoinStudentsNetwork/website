import Heading2 from "../heading2";
import Link from "next/link";
import AboutCard from "./aboutCard";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document?.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col lg:py-[6rem] py-[3rem] lg:px-[6.5rem] px-[2rem] bg-dark-green gap-6 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center w-full">
          <Heading2 text="About Layer Zero" />
        </div>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col lg:grid grid-cols-3 w-full gap-6">
            <AboutCard
              header="Empowering the Social Layer of Bitcoin"
              textArray={[
                "Layer Zero is a transformative initiative designed to empower youth to engage in creating and strengthening Bitcoin’s foundational social layer and bring Bitcoin’s potential to life by focusing on its most important foundation: people.",
                'Inspired by the concept of "Layer Zero" as the human and cultural infrastructure that supports decentralized and open-source technologies such as Bitcoin and Nostr, this program offers student-aged participants an unparalleled opportunity to learn by doing, immersing themselves in communities worldwide, and contributing to shaping the future of global collaboration and innovation.',
              ]}
            />
            <AboutCard
              header="Learning, Innovating, and Driving Change"
              textArray={[
                "Picture yourself sitting with entrepreneurs as they explore Bitcoin’s potential. Imagine classrooms alive with curiosity, or communities taking bold strides toward independence - with your help making it possible.",
                'Students will dive into specialized training that spans technical skills and community engagement, preparing them to drive projects focused on financial inclusion and economic empowerment. They will gain hands-on experience, actively learning to "speak" Bitcoin - the system and language of the future - by putting their skills into practice. By working directly with communities worldwide, participants will accelerate the adoption of decentralized technologies and support innovative solutions in areas where traditional infrastructure falls short.',
              ]}
            />
            <AboutCard
              header="A Movement for Global Collaboration"
              textArray={[
                "Layer Zero is not just an initiative - it’s a movement to foster global collaboration and innovation. Students will not be behind a desk, but rather will work side-by-side, building skills while contributing to dynamic and productive teams driving meaningful change together.",
                "Layer Zero is about turning belief into action. It’s about stepping up and learning by doing. Bitcoin’s power starts with people; it’s about connection and creating a future where everyone has a chance to thrive.",
              ]}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white font-sans font-normal text-[1.5rem] leading-[2.25rem]">
              Are you ready to take the first step?
            </h3>
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
  );
}
