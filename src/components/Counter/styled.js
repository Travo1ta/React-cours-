import styled from 'styled-components';
import Button from '../Button/Button';

export const CounterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
  flex-wrap: wrap; /* Добавлено: на всякий случай */
  max-width: 100%; /* Добавлено: не выходит за пределы */
`;

export const Value = styled.input`
  width: auto;
  min-width: 50px; /* ИСПРАВЛЕНО: было 60px, уменьшили */
  max-width: 80px; /* Добавлено: максимальная ширина */
  text-align: center;
  font-size: 1rem; /* ИСПРАВЛЕНО: было 1.1rem, уменьшили */
  font-weight: 500;
  padding: 4px 6px; /* ИСПРАВЛЕНО: было 4px 8px, уменьшили */
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  box-sizing: border-box; /* Добавлено */
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  -moz-appearance: textfield;
`;

export const CounterButton = styled(Button)`
  && {
    width: 32px;
    height: 32px;
    min-width: 32px; /* Добавлено: фиксированная минимальная ширина */
    max-width: 32px; /* Добавлено: фиксированная максимальная ширина */
    border: 1px solid #ddd;
    background: white;
    color: #333;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0; /* Добавлено */
    flex-shrink: 0; /* Добавлено: не сжимается */
    
    &:hover:not(:disabled) {
      background: #f5f5f5;
      border-color: #999;
    }
    
    &:active:not(:disabled) {
      transform: scale(0.95);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f5f5f5;
      border-color: #eee;
      
      &:hover {
        background: #f5f5f5;
        border-color: #eee;
      }
    }
  }
`;