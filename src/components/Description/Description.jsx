import React from "react";
import Button from '../Button/Button'; // Импортируем общий компонент Button
import { DescriptionContainer, DescriptionText } from "./styled";

function Description({ text, onShowMore, isShowAllDescription, hasMoreText }) {
   return (
      <DescriptionContainer>
         <DescriptionText>{text}</DescriptionText>
         {hasMoreText && (
            // ИСПРАВЛЕНО: используем Button вместо обычной кнопки
            <Button
               size="small"
               onClick={onShowMore}
               style={{ background: 'none', border: 'none', padding: 0 }}
            >
               {isShowAllDescription ? "Скрыть" : "Подробнее"}
            </Button>
         )}
      </DescriptionContainer>
   );
}

export default Description;