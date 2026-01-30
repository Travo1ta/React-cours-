import styled from 'styled-components';
import Button from '../Button/Button';
import { theme } from '../../theme';

export const TabsContainer = styled.div`
  margin-top: ${theme.indentLarge};
`;

export const TitleList = styled.div`
  display: flex;
  border-bottom: 2px solid ${theme.borderColor};
  margin-bottom: ${theme.indent};
  gap: 0;
`;

export const TitleButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== '$active',
})`
  && {
    background: none;
    border: none;
    border-radius: 0;
    padding: 15px 30px;
    font-size: 16px;
    color: ${props => props.$active ? theme.primaryColor : theme.textColorMuted};
    font-weight: ${props => props.$active ? '600' : '400'};
    border-bottom: 2px solid ${props => props.$active ? theme.primaryColor : 'transparent'};
    margin-bottom: -2px;
    box-shadow: none;
    
    &:hover {
      background: ${props => props.$active ? 'none' : theme.background};
      color: ${props => props.$active ? theme.primaryColor : theme.textColor};
      transform: none;
    }
  }
`;

export const TitleText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['$small', '$active'].includes(prop),
})`
  font-size: ${props => props.$small ? '14px' : '16px'};
`;

export const Content = styled.div`
  padding: ${theme.indent} 0;
`;