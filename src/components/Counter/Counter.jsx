import React from 'react';
import {
   CounterContainer,
   CountDisplay,
   CounterButton
} from './styled';

const Counter = ({
   className,
   value = 1,
   onChange,
   minValue = 1  // Добавляем minValue с дефолтным значением 1
}) => {
   const isMinusDisabled = value <= minValue; // Флаг для disabled

   const handleDecrement = () => {
      if (onChange && !isMinusDisabled) {
         onChange(value - 1);
      }
   };

   const handleIncrement = () => {
      if (onChange) {
         onChange(value + 1);
      }
   };

   return (
      <CounterContainer className={className}>
         <CounterButton
            type="button"
            size="small"
            onClick={handleDecrement}
            disabled={isMinusDisabled} // Добавляем disabled
            aria-label="Уменьшить количество"
         >
            -
         </CounterButton>
         <CountDisplay>{value}</CountDisplay>
         <CounterButton
            type="button"
            size="small"
            onClick={handleIncrement}
            aria-label="Увеличить количество"
         >
            +
         </CounterButton>
      </CounterContainer>
   );
};

export default Counter;