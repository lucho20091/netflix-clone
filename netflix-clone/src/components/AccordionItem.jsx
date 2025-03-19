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

/*
ACCORDION ITEM COMPONENT STRUCTURE AND STYLES:

1. Main Container (div)
   - Width: 100% (full width)

2. Question Button (button)
   - Width: 100% (full width)
   - Background: Netflix gray (#303030)
   - Padding: 20px (p-5)
   - Text Alignment: Left
   - Display: Flex
   - Alignment: Items center
   - Justify: Space between
   - Cursor: Pointer

3. Question Text (span)
   - Font Size: Responsive
     * Mobile: 1.125rem (text-lg)
     * Tablet/Desktop: 1.5rem (sm:text-2xl)

4. Plus/Cross Icon (svg)
   - Size: 24x24px (w-6 h-6)
   - Transform: For rotation animation
   - Transition: 300ms duration
   - Rotation: 45 degrees when open
   - Stroke: Current color
   - Stroke Width: 2px
   - Path: Plus symbol that transforms to cross

5. Answer Container (div)
   - Conditional Rendering: Shows when isOpen is true
   - Background: Netflix gray (#303030)
   - Top Margin: 1px (mt-px)
   - Padding: 20px (p-5)
   - Font Size: Responsive
     * Mobile: 1.125rem (text-lg)
     * Tablet/Desktop: 1.5rem (sm:text-2xl)

6. State Management
   - isOpen: Boolean state for accordion item
   - Toggle: onClick handler to toggle isOpen state

7. Props
   - header: Question text string
   - body: Answer text string
*/ 