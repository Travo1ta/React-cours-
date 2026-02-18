import React from "react";
import { DescriptionContainer, DescriptionText, DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription, hasMoreText }) {
   return (
      <DescriptionContainer>
         <DescriptionText>{text}</DescriptionText>
         {hasMoreText && (
            <DescriptionButton onClick={onShowMore}>
               {isShowAllDescription ? "Скрыть" : "Подробнее"}
            </DescriptionButton>
         )}
      </DescriptionContainer>
   );
}

export default Description;