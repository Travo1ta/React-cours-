import { Title } from '../Title/styled';
import { Code } from '../Code/styled';
import { ImageWrapper, GalleryImage } from '../Gallery/styled';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import Tabs from '../Tabs/Tabs';
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue
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

  const handleBuyClick = () => {
    console.log('открытие окна оформления заказа');
  };

  const tabs = [
    {
      title: "Описание",
      content: <Description text={description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={comments} />
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title as="h1">{title}</Title>
        <Code>{article}</Code>
      </Header>

      <ProductWrapper>
        <ImageWrapper>
          <GalleryImage src={imageUrl} alt="3D принтер" />
        </ImageWrapper>
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <PageFullPrice oldPrice={oldPrice} price={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество: <PageCounter />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large" onClick={handleBuyClick}>Купить</BuyButton>
        </ProductInfo>
      </ProductWrapper>

      <Tabs tabs={tabs} />
    </StyledProductPage>
  );
};

export default ProductPage;