import styled from "styled-components";
import { theme } from "../../theme";

const Line = styled.hr`
  border: none;
  margin: 20px auto;
  
  /* Используем transient props с $ */
  background-color: ${props => props.$color || theme.accent || '#FFD700'};
  height: ${props => props.$thickness || '4px'};
  width: ${props => props.$width || '100px'};
  border-radius: ${props => props.$rounded ? '4px' : '0'};
  transition: all 0.3s ease;
  display: block;
  
  ${props => props.$dashed && `
    background: none;
    border-top: ${props.$thickness || '4px'} dashed ${props.$color || theme.accent || '#FFD700'};
    height: 0;
  `}
  
  ${props => props.$dotted && `
    background: none;
    border-top: ${props.$thickness || '4px'} dotted ${props.$color || theme.accent || '#FFD700'};
    height: 0;
  `}
  
  ${props => props.$gradient && `
    background: linear-gradient(90deg, transparent, ${props.$color || theme.accent || '#FFD700'}, transparent);
  `}
`;

export default Line;