import styled from 'styled-components';
import { theme } from '../../theme';

// Используем тему для buttonOptions
const buttonOptions = theme.button;

export const StyledButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${props => props.$bgColor || theme.background};
  color: ${props => props.$textColor || theme.textColor};
  box-shadow: ${theme.shadowLight};
  transition: all 0.3s ease;
  
  ${(props) => {
    const buttonTheme = buttonOptions[props.$size || "medium"];

    return `
      height: ${buttonTheme.height};
      padding-left: ${buttonTheme.padding};
      padding-right: ${buttonTheme.padding};
      font-size: ${buttonTheme.fontSize};
      border-radius: ${buttonTheme.radius};
    `;
  }}
  
  &:hover {
    background-color: ${props => props.$hoverColor || props.$bgColor || '#e0e0e0'};
    box-shadow: ${theme.shadowHover};
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;