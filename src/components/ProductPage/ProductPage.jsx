import Title from '../Title/Title';
import Code from '../Code/Code';
import Gallery from '../Gallery/Gallery';
import FullPrice from '../FullPrice/FullPrice';
import Counter from '../Counter/Counter';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import { 
  ProductPageContainer,
  Article,
  ProductHeader,
  ProductInfo,
  ActionSection,
  DeliveryInfo,
  BuyButton
} from './styled';

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
              
              <BuyButton 
                type="button" 
                size="large"
              >
                Купить
              </BuyButton>
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