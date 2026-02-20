import { useState } from 'react';
import { Title } from '../Title/styled';
import { Code } from '../Code/styled';
import Gallery from '../Gallery/Gallery';
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
   const [isShowAllDescription, setIsShowAllDescription] = useState(false);
   const [visibleCommentsCount, setVisibleCommentsCount] = useState(COMMENTS_PER_PAGE);

   const {
      title,
      article,
      oldPrice: baseOldPrice,
      price: basePrice,
      images = [],
      comments = [],
      description,
      delivery
   } = product;

   const totalPrice = basePrice * quantity;
   const totalOldPrice = baseOldPrice ? baseOldPrice * quantity : null;

   // Обработчики
   const handleBuyClick = () => {
      setIsPopUpOpen(true);
      console.log('Открытие окна оформления заказа');
      console.log('Товар:', title);
      console.log('Количество:', quantity);
      console.log('Сумма заказа:', totalPrice);
   };

   const handleClosePopUp = () => {
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

   const handleOrderSubmit = (orderData) => {
      console.log('=================================');
      console.log('ЗАКАЗ ОФОРМЛЕН:');
      console.log('=================================');
      console.log('Покупатель:', orderData.name);
      console.log('Телефон:', orderData.phone);
      console.log('Адрес доставки:', orderData.address);
      console.log('---------------------------------');
      console.log('Товар:', title);
      console.log('Количество:', quantity);
      console.log('Цена за единицу:', basePrice);
      console.log('Общая сумма:', totalPrice);
      console.log('=================================');

      alert(`Спасибо за заказ, ${orderData.name}! Мы доставим его по адресу: ${orderData.address}`);
      setIsPopUpOpen(false);
   };

   // Логика для описания
   const getDisplayDescription = () => {
      if (isShowAllDescription) {
         return description;
      }
      return description.length > MAX_TEXT_SIZE
         ? description.slice(0, MAX_TEXT_SIZE) + '...'
         : description;
   };

   // Логика для комментариев
   const visibleComments = comments.slice(0, visibleCommentsCount);
   const hasMoreComments = visibleCommentsCount < comments.length;

   // Контент для табов/аккордеона
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

         {/* PopUp с формой заказа */}
         <PopUp
            isOpen={isPopUpOpen}
            onClose={handleClosePopUp}
            title="Оформление заказа"
         >
            <Order onSubmit={handleOrderSubmit} />
         </PopUp>
      </StyledProductPage>
   );
};

export default ProductPage;