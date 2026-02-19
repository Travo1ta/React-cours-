import styled, { css } from 'styled-components';
import { theme } from '../../theme';

const sizeStyles = {
  small: css`
    padding: 6px 12px;
    font-size: 12px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 14px;
  `,
  large: css`
    padding: 14px 28px;
    font-size: 18px;
  `
};

export const StyledButton = styled.button`
  background: ${theme.gradients.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;
  
  ${props => sizeStyles[props.$size] || sizeStyles.medium}
  
  &:hover {
    background: ${theme.gradients.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;