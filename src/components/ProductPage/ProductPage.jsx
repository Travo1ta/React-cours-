import { useState } from 'react';
import { Title } from '../Title/styled';
import { Code } from '../Code/styled';
// Убираем старый импорт GalleryImage
import Gallery from '../Gallery/Gallery'; // Импортируем новый компонент
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import Tabs from '../Tabs/Tabs';
import Accordion from '../Accordion/Accordion';
import PopUp from '../PopUp/PopUp';
import Order from '../Order/Order';
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

const MAX_TEXT_SIZE = 200;
const COMMENTS_PER_PAGE = 3;

const ProductPage = ({ product, showInfoInAccordion = false }) => {
  const [quantity, setQuantity] = useState(1);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(COMMENTS_PER_PAGE);

  const {
    title,
    article,
    oldPrice: baseOldPrice,
    price: basePrice,
    images = [], // ИЗМЕНЕНО: теперь массив изображений
    comments = [],
    description,
    delivery
  } = product;

  const totalPrice = basePrice * quantity;
  const totalOldPrice = baseOldPrice ? baseOldPrice * quantity : null;

  const handleBuyClick = () => {
    setIsPopUpOpen(true);
    console.log('открытие окна оформления заказа с количеством:', quantity);
    console.log('сумма заказа:', totalPrice);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleInputChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log('Оформление заказа:', {
      ...formData,
      product: title,
      quantity,
      totalPrice
    });
    alert('Заказ оформлен! Проверьте консоль для деталей.');
    setIsPopUpOpen(false);
  };

  const handleShowMoreDescription = () => {
    setIsShowAllDescription(!isShowAllDescription);
  };

  const handleShowMoreComments = () => {
    setVisibleCommentsCount(prevCount => 
      Math.min(prevCount + COMMENTS_PER_PAGE, comments.length)
    );
  };

  const getDisplayDescription = () => {
    if (isShowAllDescription) {
      return description;
    }
    return description.length > MAX_TEXT_SIZE 
      ? description.slice(0, MAX_TEXT_SIZE) + '...' 
      : description;
  };

  const visibleComments = comments.slice(0, visibleCommentsCount);
  const hasMoreComments = visibleCommentsCount < comments.length;

  const contentItems = [
    {
      title: "Описание",
      content: (
        <Description 
          text={getDisplayDescription()}
          onShowMore={handleShowMoreDescription}
          isShowAllDescription={isShowAllDescription}
          hasMoreText={description.length > MAX_TEXT_SIZE}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <Comments 
          comments={visibleComments}
          onShowMore={handleShowMoreComments}
          hasMoreComments={hasMoreComments}
        />
      )
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title as="h1">{title}</Title>
        <Code>{article}</Code>
      </Header>

      <ProductWrapper>
        {/* ИЗМЕНЕНО: используем Gallery вместо ImageWrapper */}
        <Gallery images={images} />
        
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <PageFullPrice 
              oldPrice={totalOldPrice} 
              price={totalPrice} 
            />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество: 
            <PageCounter 
              value={quantity} 
              onChange={setQuantity}
              minValue={1}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large" onClick={handleBuyClick}>
            Купить
          </BuyButton>
        </ProductInfo>
      </ProductWrapper>

      {showInfoInAccordion ? (
        <Accordion items={contentItems} />
      ) : (
        <Tabs tabs={contentItems} />
      )}

      <PopUp 
        isOpen={isPopUpOpen} 
        onClose={handleClosePopUp}
        title="Оформление заказа"
      >
        <Order 
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleSubmitOrder}
        />
      </PopUp>
    </StyledProductPage>
  );
};

export default ProductPage;