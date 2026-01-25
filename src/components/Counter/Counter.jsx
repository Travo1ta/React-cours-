import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../elements';

const CounterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
`;

const CounterButton = styled(Button)`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    border-color: #999;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const CountDisplay = styled.span`
  min-width: 40px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <CounterContainer>
      <CounterButton 
        type="button" 
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
        aria-label="Уменьшить количество"
      >
        -
      </CounterButton>
      <CountDisplay>{count}</CountDisplay>
      <CounterButton 
        type="button" 
        onClick={() => setCount(count + 1)}
        aria-label="Увеличить количество"
      >
        +
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;