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

/*
ACCORDION COMPONENT STRUCTURE AND STYLES:

1. Main Container (div)
   - Padding: 16px horizontal (px-4), 64px vertical (py-16)
   - Background: Black
   - Text Color: White

2. Content Wrapper (div)
   - Maximum Width: 950px
   - Margin: Auto (centered horizontally)

3. FAQ Title (h1)
   - Font Size: Responsive
     * Mobile: 1.875rem (text-3xl)
     * Tablet: 2.25rem (sm:text-4xl)
     * Desktop: 3rem (lg:text-5xl)
   - Font Weight: Bold
   - Text Alignment: Center
   - Bottom Margin: 32px (mb-8)

4. FAQ Items Container (div)
   - Display: Flex Column
   - Gap: 8px between items (gap-2)
   - Bottom Margin: 48px (mb-12)

5. Data Structure (faqData)
   - Array of FAQ items
   - Each item contains:
     * id: Unique identifier
     * header: Question text
     * body: Answer text

6. AccordionItem Component
   - Rendered for each FAQ item
   - Props:
     * key: Unique id for React list rendering
     * header: Question text
     * body: Answer text
*/
