import styled from 'styled-components';
import { theme } from '../../theme';

export const DescriptionContainer = styled.div`
  padding: 5px 0;
`;

export const DescriptionText = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  color: ${theme.textColor};
`;

export const DescriptionButton = styled.button`
  background: ${theme.buttonPrimaryBg || '#667eea'};
  border: none;
  color: ${theme.buttonTextColor || '#ffffff'};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.2s ease;
  display: inline-block;
  
  &:hover {
    background: ${theme.buttonPrimaryHoverBg || '#5a6fd8'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
`;