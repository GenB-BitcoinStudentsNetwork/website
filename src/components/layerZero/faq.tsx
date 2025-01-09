import Heading2 from "../heading2";
import FaqList from "./faqItem";

export default function Faq() {
  const FaqQuestions = [
    {
      question: "What is Layer Zero?",
      answer:
        "Layer Zero connects students with global communities to build the foundational social layer supporting decentralized open-source technology protocols. Participants engage in promoting education, innovation, and collaboration for financial, technological, and educational empowerment.",
    },
    {
      question: "Who can apply to Layer Zero?",
      answer:
        "The program is open to all undergraduate-aged students with a passion for Bitcoin. Applicants must be 18 or older, motivated to learn, and committed to the program’s mission.",
    },
    {
      question: "What is the duration of the program?",
      answer:
        "The program lasts approximately 2.5 months, from June 1 to August 15, depending on the project, location, and student’s (academic) schedule.",
    },
    {
      question: "Is this an all-expenses-paid program?",
      answer:
        "Yes! All expenses for travel, accommodation, food, and other potential logistics costs are fully covered, allowing participants to focus entirely on their internship without financial burden. This is a unique opportunity for students to immerse themselves in the Bitcoin ecosystem while receiving full financial support. ",
    },
    {
      question: "Where will I be working?",
      answer:
        "Participants will work in global locations where Bitcoin adoption and financial inclusion can have the most impact. These locations may include emerging markets or areas with limited access to traditional banking services. Specific locations will be assigned based on the needs of local Bitcoin communities and participant preferences, ranging from circular economies to operational, technical and infrastructure-related projects.",
    },
    {
      question: "What kind of projects will I be working on?",
      answer:
        "These are not behind desk jobs. You will be furthering Bitcoin adoption through in the field operational initiatives which could include teaching local communities about Bitcoin, helping set up local Bitcoin payment systems,  and contributing to real world applications powered by Bitcoin. The specific project you’ll be involved in will depend on the community’s needs.",
    },
    {
      question: "Do I need to speak another language?",
      answer:
        "Multilingual skills are a plus, but basic English (or the local language) and translation tools are sufficient for most assignments.",
    },
    {
      question: "What kind of skills do I need?",
      answer:
        "Participants should demonstrate open-mindedness, a willingness to take on any task, and the ability to leave their ego at the door. A strong team-player attitude, a commitment to proof of work, and adaptability are key. Additionally, being passionate about global collaboration, acting with integrity, and equipped with excellent communication and problem-solving skills are essential for success.",
    },
    {
      question: "How do I apply?",
      answer: 'Visit the "Apply Now" page.',
    },
    {
      question: "What is the selection process?",
      answer:
        "Applications are reviewed, followed by interviews. Final decisions are based on alignment with program goals.",
    },
    {
      question: "How will I be matched to an “internship?”",
      answer:
        "We’re here to connect your unique skills and passions with the right community, creating opportunities for growth, real collaboration, and lasting impact. It’s about finding the perfect fit where you can thrive and make a difference together.",
    },
    {
      question: "What will I gain from this experience?",
      answer:
        "You’ll gain hands-on experience with the communities reshaping society and experience in the language of the future, while honing cross-cultural communication skills. This is an excellent opportunity to build your professional network by connecting with peers who are shaping the future. Additionally, you'll develop leadership and problem-solving skills, enhance your adaptability in diverse environments, and gain a standout experience to strengthen your resume and career trajectory.",
    },
    {
      question: "What happens if I encounter challenges?",
      answer:
        "The program is designed to support you every step of the way. You'll have access to experienced mentors who can offer guidance and insights, coordinators who help address logistical or program-related concerns, and a supportive network of peers to brainstorm solutions and share experiences. Whether you're facing technical difficulties, cultural adjustments, or project-related hurdles, you'll be equipped with the tools, resources, and a collaborative community to navigate challenges and grow from the experience.",
    },
    {
      question: "Is the program a paid position?",
      answer:
        "While not a salaried program, all expenses are covered, and participants gain unparalleled experience and networking opportunities.",
    },
    {
      question: "Where can I go for more information?",
      answer: "Contact us at contact@bitcoinstudentsnetwork.org.",
    },
    {
      question: "Legal Disclosures",
      answer:
        "Please note that legal disclosures, including waivers, will need to be signed prior to participation. These waivers clarify that the Bitcoin Students Network and its affiliates will not be held liable for any personal, financial, or other risks encountered during your involvement in the program. Participants are responsible for their own actions and decisions throughout the experience.",
    },
  ];
  return (
    <div
      className="py-[3rem] lg:py-[4rem] bg-[#F7EEF6] flex items-center justify-center px-8"
      id="faq"
    >
      <div className="flex flex-col items-center justify-center lg:w-[50.875rem] gap-14">
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-[35.9rem]">
          <Heading2
            text="Find Answers to Frequently Asked Questions"
            className="text-center"
          />
          <p className="font-sans text-base text-center text-black leading-[1.4rem]">
            Explore our FAQ section to get quick answers to common questions
            about our services, pricing, features, and global compliance
            solutions.
          </p>
        </div>
        <div className="flex flex-col w-full">
          {FaqQuestions.map(({ question, answer }, index) => (
            <FaqList question={question} answer={answer} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
