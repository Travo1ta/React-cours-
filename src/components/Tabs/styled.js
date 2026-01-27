import styled from 'styled-components';
import Button from '../Button/Button';

export const TabsContainer = styled.div`
  margin-top: 30px;
`;

export const TitleList = styled.div`
  display: flex;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
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
    color: ${props => props.$active ? '#2196f3' : '#666'};
    font-weight: ${props => props.$active ? '600' : '400'};
    border-bottom: 2px solid ${props => props.$active ? '#2196f3' : 'transparent'};
    margin-bottom: -2px;
    box-shadow: none;
    
    &:hover {
      background: ${props => props.$active ? 'none' : '#f5f5f5'};
      color: ${props => props.$active ? '#2196f3' : '#333'};
      transform: none;
    }
  }
`;

export const TitleText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['$small', '$active'].includes(prop),
})`
  font-size: ${props => props.$small ? '14px' : '16px'};
`;

// ДОБАВЬ ЭТОТ ЭКСПОРТ
export const Content = styled.div`
  padding: 20px 0;
`;