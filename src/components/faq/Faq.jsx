import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import faqs from './faqData'
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-lg md:text-2xl font-bold text-center mb-6 font-['Poppins']">FAQ</h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3 md:py-4">
            <button
              className="w-full text-left flex justify-between items-center font-medium text-gray-900 text-sm md:text-base"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="cursor-pointer text-xl md:text-2xl">
                {openIndex === index ? <RiArrowDropDownLine /> : <>&gt;</>}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 text-sm md:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
