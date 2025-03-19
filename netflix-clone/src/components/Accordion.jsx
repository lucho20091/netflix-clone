import React from 'react';
import AccordionItem from './AccordionItem';
import faqData from '../fixtures/faqs.json';

const Accordion = () => {
  

  return (
    <div className="px-4 py-16 bg-black text-white">
      <div className="max-w-[950px] mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        
        <div className="flex flex-col gap-2 mb-12">
          {faqData.map((item) => (
            <AccordionItem 
              key={item.id}
              header={item.header}
              body={item.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
