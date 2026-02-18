import React from 'react';
import { DescriptionContainer, DescriptionText, ReadMoreButton } from './styled';

const Description = ({ text, onShowMore, isShowAllDescription, hasMoreText }) => {
   return (
      <DescriptionContainer>
         <DescriptionText>{text}</DescriptionText>
         {hasMoreText && (
            <ReadMoreButton onClick={onShowMore}>
               {isShowAllDescription ? 'Скрыть' : 'Подробнее'}
            </ReadMoreButton>
         )}
      </DescriptionContainer>
   );
};

export default Description;