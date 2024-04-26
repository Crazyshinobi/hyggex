import React, { useState } from "react";
import Accordion from "../components/Accordion";

const questions = [
  {
    id: 1,
    question: "Can education flashcards be used for all age groups?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima hic repellat adipisci, enim iste magnam itaque quod. Qui ab labore eligendi alias!",
  },
  {
    id: 2,
    question: "How do education flashcards work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima hic repellat adipisci, enim iste magnam itaque quod. Qui ab labore eligendi alias!",
  },
  {
    id: 3,
    question: "Can education flashcards be used for test preparation?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima hic repellat adipisci, enim iste magnam itaque quod. Qui ab labore eligendi alias!",
  },
];

const Faq = () => {
  const [data, setData] = useState(questions);

  return (
    <div className="mt-24 mb-20">
      <h2 className="font-sans font-bold text-[48px] bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-500">
        FAQ
      </h2>
      {data.map((item) => {
        return (
          <Accordion
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        );
      })}
    </div>
  );
};

export default Faq;
