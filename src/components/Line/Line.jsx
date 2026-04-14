// src/components/Line/Line.jsx
import styled from "styled-components";
import { theme } from "../../theme";

const Line = styled.hr`
  /* Базовые стили */
  border: none;
  margin: 20px 0;
  
  /* Цвет по умолчанию из темы */
  background-color: ${props => props.color || theme.colors?.border || '#e0e0e0'};
  
  /* Толщина линии */
  height: ${props => props.thickness || '1px'};
  
  /* Ширина (проценты или пиксели) */
  width: ${props => props.width || '100%'};
  
  /* Скругление (для толстых линий) */
  border-radius: ${props => props.rounded ? '4px' : '0'};
  
  /* Анимация при появлении */
  transition: all 0.3s ease;
  
  /* Варианты стилей */
  ${props => props.dashed && `
    background: none;
    border-top: ${props.thickness || '1px'} dashed ${props.color || theme.colors?.border || '#e0e0e0'};
    height: 0;
  `}
  
  ${props => props.dotted && `
    background: none;
    border-top: ${props.thickness || '1px'} dotted ${props.color || theme.colors?.border || '#e0e0e0'};
    height: 0;
  `}
  
  /* Градиентная линия */
  ${props => props.gradient && `
    background: linear-gradient(90deg, transparent, ${props.color || theme.colors?.primary || '#667eea'}, transparent);
  `}
`;

export default Line;