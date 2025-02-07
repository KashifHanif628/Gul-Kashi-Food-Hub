"use client";

import CommentSection from "@/components/commentSection";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do we serve food?",
      answer:
        "We serve high-quality food to ensure you have a wonderful experience.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "You can contact us via our website or helpline for any assistance.",
    },
    {
      question: "How is our food quality?",
      answer: "Our food quality is top-notch, and we use fresh ingredients.",
    },
    {
      question: "What will be delivered? And when?",
      answer: "Yes, delivery is timely and consistent with your order details.",
    },
    {
      question: "How do we give home delivery?",
      answer: "Our Riders will deliver your order at your door-steps.",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer: "Yes, absolutely. We are open 24/7",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-black py-16 px-4">
      <section className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-[48px] md:text-[56px] font-extrabold text-center text-white drop-shadow-lg">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-400 text-lg md:text-xl mt-4">
          Your queries, our answers. Find what you need below.
        </p>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-transform duration-300 transform ${
                openIndex === index ? "scale-105 shadow-lg" : ""
              }`}
            >
              <div
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg hover:border-gray-500 transition-all"
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-300">
                    {faq.question}
                  </h2>
                  <span
                    className={`text-3xl font-bold ${
                      openIndex === index ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CommentSection />
    </div>
  );
};

export default FAQ;
