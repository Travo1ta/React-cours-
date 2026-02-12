import styled, { css } from 'styled-components';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import FullPrice from '../FullPrice/FullPrice';
import { theme } from '../../theme';

const valueStyle = css`
  display: inline-flex;
  margin-left: ${(props) => props.theme?.indent || theme.indent};
  color: ${(props) => props.theme?.textColor || theme.textColor};
`;

export const StyledProductPage = styled.article`
  margin: ${theme.indent} auto;
  padding: ${theme.indentLarge};
  max-width: 800px;
  box-shadow: ${theme.shadow};
  font-family: ${theme.font};
  font-size: ${theme.fontSize};
  color: ${theme.textColor};
  background: ${theme.cardBackground};
  border-radius: 12px;
  box-sizing: border-box; /* Добавлено */
`;

export const Header = styled.header`
  margin-bottom: ${theme.indentLarge};
`;

export const ProductWrapper = styled.section`
  display: flex;
  gap: ${theme.indentLarge};
  margin-bottom: ${theme.indentLarge};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.indent};
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  border-left: 1px solid ${theme.borderColor};
  box-sizing: border-box;
  padding-left: ${theme.indentLarge};
  min-width: 0; /* Добавлено: предотвращает переполнение */
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid ${theme.borderColor};
    padding-left: 0;
    padding-top: ${theme.indent};
  }
`;

export const ProductInfoLine = styled.div`
  color: ${theme.textColorMuted};
  font-size: 18px;
  margin-bottom: ${theme.indent};
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* ИСПРАВЛЕНО: добавлен wrap */
  gap: 8px; /* Добавлено: отступ при переносе */
`;

export const PageCounter = styled(Counter)`
  ${valueStyle}
  flex: 0 1 auto; /* Добавлено: не растягивается, может сжиматься */
  min-width: 140px; /* Добавлено: минимальная ширина для счетчика */
  max-width: 100%; /* Добавлено: не выходит за пределы */
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
  flex-wrap: wrap; /* Добавлено */
  gap: 8px; /* Добавлено */
`;

export const DeliveryValue = styled.span`
  ${valueStyle}
  color: ${theme.success};
  flex: 0 1 auto; /* Добавлено */
`;

export const BuyButton = styled(Button)`
  && {
    background: ${theme.gradients.primary};
    color: white;
    font-weight: 600;
    margin-top: 40px;
    width: 100%;
    max-width: 300px;
    display: block;
    
    &:hover {
      background: ${theme.gradients.primaryHover};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;