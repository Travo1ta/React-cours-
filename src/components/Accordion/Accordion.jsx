import React, { useState, useRef, useEffect } from "react";
import {
   AccordionContainer,
   AccordionItem,
   AccordionHeader,
   AccordionTitle,
   AccordionContentWrapper,
   AccordionContent
} from "./styled";

const Accordion = ({ items }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [height, setHeight] = useState(0);
   const openContentRef = useRef(null);

   useEffect(() => {
      if (openContentRef.current) {
         setHeight(openContentRef.current.offsetHeight);
      }
   }, [activeIndex]); // Зависимость только от activeIndex

   if (!items?.length) return null;

   return (
      <AccordionContainer>
         {items.map((item, index) => {
            const isOpen = index === activeIndex;

            return isOpen ? (
               // ОТКРЫТЫЙ ЭЛЕМЕНТ
               <AccordionItem key={item.title}>
                  <AccordionHeader
                     as="span" // Меняем на span, так как это не кнопка
                     $isActive={true}
                  >
                     <AccordionTitle>{item.title}</AccordionTitle>
                  </AccordionHeader>
                  <AccordionContentWrapper style={{ height: `${height}px` }}>
                     <AccordionContent ref={openContentRef}>
                        {item.content}
                     </AccordionContent>
                  </AccordionContentWrapper>
               </AccordionItem>
            ) : (
               // ЗАКРЫТЫЙ ЭЛЕМЕНТ
               <AccordionItem key={item.title}>
                  <AccordionHeader
                     onClick={() => setActiveIndex(index)}
                     $isActive={false}
                  >
                     <AccordionTitle>{item.title}</AccordionTitle>
                  </AccordionHeader>
                  <AccordionContentWrapper>
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