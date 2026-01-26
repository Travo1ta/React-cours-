import styled from 'styled-components';
import Button from '../Button/Button';

export const CounterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
`;

export const CountDisplay = styled.span`
  min-width: 40px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const CounterButton = styled(Button)`
  && {
    width: 32px;
    height: 32px;
    border: 1px solid #ddd;
    background: white;
    color: #333;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: #f5f5f5;
      border-color: #999;
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
`;