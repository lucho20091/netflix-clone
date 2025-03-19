import React, { useState } from 'react';

const AccordionItem = ({ header, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="w-full bg-[#303030] p-5 text-left flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg sm:text-2xl">{header}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="bg-[#303030] mt-px p-5 text-lg sm:text-2xl">
          {body}
        </div>
      )}
    </div>
  );
};

export default AccordionItem; 