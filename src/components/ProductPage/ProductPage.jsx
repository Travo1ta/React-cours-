import styled from 'styled-components';
import Title from '../Title/Title';
import Code from '../Code/Code';
import Gallery from '../Gallery/Gallery';
import FullPrice from '../FullPrice/FullPrice';
import Counter from '../Counter/Counter';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import { Button, P } from '../../elements';

const ProductPageContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
`;

const Article = styled.article`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const ProductHeader = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ActionSection = styled.div`
  margin-top: 25px;
`;

const DeliveryInfo = styled(P)`
  color: #666;
  margin: 10px 0 20px 0;
  font-size: 0.95rem;
  
  strong {
    color: #333;
  }
`;

const BuyButton = styled(Button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  display: inline-block;
  text-align: center;
  
  &:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6b4192 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ProductPage = ({ product }) => {
  const {
    title,
    article,
    oldPrice,
    price,
    imageUrl,
    comments = [],
    description,
    delivery
  } = product;

  return (
    <ProductPageContainer>
      <Article>
        <ProductHeader>
          <Gallery imageUrl={imageUrl} />
          <ProductInfo>
            <Title>{title}</Title>
            <Code>Артикул: {article}</Code>
            <FullPrice price={price} oldPrice={oldPrice} />
            
            <ActionSection>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
                <span style={{ fontWeight: '500' }}>Количество:</span>
                <Counter />
              </div>
              
              <DeliveryInfo>
                <strong>Доставка:</strong> {delivery}
              </DeliveryInfo>
              
              <BuyButton type="button">Купить</BuyButton>
            </ActionSection>
          </ProductInfo>
        </ProductHeader>
        
        <Description text={description} />
        <Comments comments={comments} />
      </Article>
    </ProductPageContainer>
  );
};

export default ProductPage;