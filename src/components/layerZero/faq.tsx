import Heading2 from "../heading2";
import FaqList from "./faqItem";

export default function Faq() {
  const FaqQuestions = [
    {
      question: "What is Layer Zero?",
      answer:
        "Layer Zero connects students with global communities to build the foundational social layer supporting decentralized systems. Participants engage in promoting education, innovation, and collaboration for financial and technological empowerment.",
    },
    {
      question: "Who can apply to Layer Zero?",
      answer: "Who can apply to Layer Zero?",
    },
    {
      question: "What is the duration of the program?",
      answer: "What is the duration of the program?",
    },
    {
      question: "Is this an all-expenses-paid program?",
      answer: "Is this an all-expenses-paid program?",
    },
    {
      question: "Where will I be working?",
      answer: "Where will I be working?",
    },
    {
      question: "What kind of projects will I be working on?",
      answer: "What kind of projects will I be working on?",
    },
    {
      question: "Do I need to speak another language?",
      answer: "Do I need to speak another language?",
    },
    {
      question: "What kind of skills do I need?",
      answer: "What kind of skills do I need?",
    },
    { question: "How do I apply?", answer: "How do I apply?" },
    {
      question: "What is the selection process?",
      answer: "What is the selection process?",
    },
    {
      question: "What will I gain from this experience?",
      answer: "What will I gain from this experience?",
    },
    {
      question: "What happens if I encounter challenges?",
      answer: "What happens if I encounter challenges?",
    },
    {
      question: "Can I return early if needed?",
      answer: "Can I return early if needed?",
    },
    {
      question: "Is the program a paid position?",
      answer: "Is the program a paid position?",
    },
    {
      question: "Where can I go for more information?",
      answer: "Where can I go for more information?",
    },
  ];
  return (
    <div className="py-[4rem] bg-[#F7EEF6] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center lg:w-[50.875rem] gap-14">
        <div className="flex flex-col justify-center items-center gap-4 lg:w-[35.9rem]">
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
