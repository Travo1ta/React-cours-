import React from 'react';
import { 
  CounterContainer, 
  CountDisplay, 
  CounterButton 
} from './styled';

const Counter = ({ className, value = 1, onChange }) => {
  const handleDecrement = () => {
    if (onChange) {
      onChange(value > 1 ? value - 1 : 1);
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