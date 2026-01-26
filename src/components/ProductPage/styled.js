import styled from 'styled-components';
import Button from '../Button/Button';
import { P } from '../../elements';

export const ProductPageContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const Article = styled.article`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const ProductHeader = styled.div`
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
`;

export const ActionSection = styled.div`
  margin-top: 25px;
`;

export const DeliveryInfo = styled(P)`
  color: #666;
  margin: 10px 0 20px 0;
  font-size: 0.95rem;
  
  strong {
    color: #333;
  }
`;

export const BuyButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 600;
    width: 100%;
    max-width: 300px;
    display: inline-block;
    text-align: center;
    border: none;
    
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