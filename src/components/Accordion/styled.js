import styled from 'styled-components';
import { theme } from '../../theme';

export const AccordionContainer = styled.div`
  margin-top: ${theme.indentLarge};
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  overflow: hidden;
  background: white;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid ${theme.borderColor};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: ${props => props.$isOpen ? theme.background : 'white'};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.background};
  }
`;

export const AccordionTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.textColor};
`;

export const AccordionIcon = styled.span`
  font-size: 24px;
  line-height: 1;
  color: ${theme.primary};
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
  display: inline-block;
`;

export const AccordionContentWrapper = styled.div`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: white;
`;

export const AccordionContent = styled.div`
  padding: 20px;
  border-top: 1px solid ${theme.borderColor};
`;