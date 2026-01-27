import styled from 'styled-components';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import FullPrice from '../FullPrice/FullPrice';

const valueStyle = `
  display: inline-flex;
  margin-left: 20px;
  color: #333;
`;

export const StyledProductPage = styled.article`
  margin: 20px auto;
  padding: 30px;
  max-width: 800px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Arial, "Helvetica", sans-serif';
  font-size: 16px;
  color: #333;
  background: white;
  border-radius: 12px;
`;

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const ProductWrapper = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  border-left: 1px solid #eee;
  box-sizing: border-box;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #eee;
    padding-left: 0;
    padding-top: 20px;
  }
`;

// Изменяем с styled(P) на styled.div
export const ProductInfoLine = styled.div`
  color: #666;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const PageCounter = styled(Counter)`
  ${valueStyle}
`;

export const PageFullPrice = styled(FullPrice)`
  ${valueStyle}
`;

export const DeliveryValue = styled.span`
  ${valueStyle}
  color: #2e7d32;
`;

export const BuyButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 600;
    margin-top: 40px;
    width: 100%;
    max-width: 300px;
    display: block;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6b4192 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;