import { useState } from 'react';
import {
   AccordionContainer,
   AccordionItem,
   AccordionHeader,
   AccordionTitle,
   AccordionIcon,
   AccordionContentWrapper,
   AccordionContent
} from './styled';

const Accordion = ({ items }) => {
   const [openIndex, setOpenIndex] = useState(null);

   const handleHeaderClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   if (!items?.length) return null;

   return (
      <AccordionContainer>
         {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
               <AccordionItem key={item.title}>
                  <AccordionHeader
                     onClick={() => handleHeaderClick(index)}
                     $isOpen={isOpen}
                  >
                     <AccordionTitle>{item.title}</AccordionTitle>
                     <AccordionIcon $isOpen={isOpen}>⌄</AccordionIcon>
                  </AccordionHeader>

                  <AccordionContentWrapper $isOpen={isOpen}>
                     <AccordionContent>
                        {item.content}
                     </AccordionContent>
                  </AccordionContentWrapper>
               </AccordionItem>
            );
         })}
      </AccordionContainer>
   );
};

export default Accordion;