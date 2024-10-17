import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='px-3'>
      <div className='flex justify-between items-center'>
        <h3 className='font-red-hat font-bold text-lg h-12 w-full'>{props.accordionTitle}</h3>
        <MdKeyboardArrowDown 
          style={{ height: '2rem', width: '2rem', cursor: 'pointer' }} 
          color='#C1A058' 
          onClick={toggleAccordion}
          className={`${isOpen ? 'rotate-180' : ''}`} // Arrow rotation
        />
      </div>

      <div 
        className={`font-montserrat overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p>
          {props.content}
        </p>
      </div>
    </div>
  );
}
