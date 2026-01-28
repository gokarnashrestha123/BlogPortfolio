import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const QuestionPage = () => {
  const faqs = [
    {
      question:
        "What type of companies do you work with? Who are your target customers?",
      answer:
        "Our target customers and companies mostly start-ups, small businesses, non-profits, and enterprise clients across the industries.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope, but most projects take between 4–12 weeks.",
    },
    {
      question:
        "What type of companies do you work with? Who are your target customers?",
      answer:
        "Our target customers and companies mostly start-ups, small businesses, non-profits, and enterprise clients across the industries.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope, but most projects take between 4–12 weeks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" w-full  px-5  md:px-8 lg:px-20 text-white">
      <div
        className="
          
          mx-auto
          flex flex-col desktop:flex-row
          gap-15 lg:gap-10
        "
      >
        {/* Left Title */}
        <div
          className="
            "
        >
          <p
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-[60px]
              leading-snug sm:leading-tight md:leading-[70px] lg:leading-[75px] 2xl:leading-[83px]
              tracking-[-0.02em]
            "
          >
            Frequently asked questions
          </p>
        </div>

        {/* Right FAQ Section */}
        <div className="flex-1">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-[#1dd3b0] p-6">
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left gap-4"
              >
                <h3 className="font-semibold text-2xl md:text-3xl tracking-[-0.02em]">
                  {item.question}
                </h3>

                <div className="flex items-center justify-center h-15 w-15 rounded-full bg-[#008576] shrink-0">
                  {openIndex === index ? (
                    <FiX className="text-white text-xl" />
                  ) : (
                    <FiPlus className="text-white text-xl" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className=" text-white font-medium text-lg tracking-[-0.02em]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;
