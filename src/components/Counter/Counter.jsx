import { useState } from 'react';
import { 
  CounterContainer, 
  CountDisplay, 
  CounterButton 
} from './styled';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <CounterContainer>
      <CounterButton 
        type="button" 
        size="small"
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
        aria-label="Уменьшить количество"
      >
        -
      </CounterButton>
      <CountDisplay>{count}</CountDisplay>
      <CounterButton 
        type="button" 
        size="small"
        onClick={() => setCount(count + 1)}
        aria-label="Увеличить количество"
      >
        +
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;