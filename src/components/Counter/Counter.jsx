import React from 'react';
import {
   CounterContainer,
   Value,
   CounterButton
} from './styled';

const Counter = ({
   className,
   value = 1,
   onChange,
   minValue = 1
}) => {
   const isMinusDisabled = value <= minValue;

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

   const handleInputChange = (e) => {
      const inputValue = e.target.value;

      if (inputValue === '') {
         return;
      }

      const numValue = Number(inputValue);

      // ИСПРАВЛЕНО: Number.isNaN вместо isNaN
      if (!Number.isNaN(numValue) && onChange) {
         onChange(Math.max(numValue, minValue));
      }
   };

   const handleBlur = (e) => {
      const inputValue = e.target.value;

      // ИСПРАВЛЕНО: Number.isNaN вместо isNaN
      if (inputValue === '' || Number.isNaN(Number(inputValue))) {
         onChange(minValue);
      }
   };

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         e.target.blur();
      }
   };

   return (
      <CounterContainer className={className}>
         <CounterButton
            type="button"
            size="small"
            onClick={handleDecrement}
            disabled={isMinusDisabled}
            aria-label="Уменьшить количество"
         >
            -
         </CounterButton>

         <Value
            type="number"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            min={minValue}
            size={String(value).length}
            aria-label="Количество товара"
         />

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