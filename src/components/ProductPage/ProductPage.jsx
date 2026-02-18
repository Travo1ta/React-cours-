import { useState } from 'react';
import { Title } from '../Title/styled';
import { Code } from '../Code/styled';
import { ImageWrapper, GalleryImage } from '../Gallery/styled';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import Tabs from '../Tabs/Tabs';
import Accordion from '../Accordion/Accordion'; // Импортируем аккордеон
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

// Добавляем пропс showInfoInAccordion
const ProductPage = ({ product, showInfoInAccordion = false }) => {
   const [quantity, setQuantity] = useState(1);
   const [isPopUpOpen, setIsPopUpOpen] = useState(false);
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      address: ''
   });

   const {
      title,
      article,
      oldPrice: baseOldPrice,
      price: basePrice,
      imageUrl,
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

   // Контент для табов/аккордеона
   const contentItems = [
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

         {/* УСЛОВНЫЙ РЕНДЕРИНГ: ТАБЫ ИЛИ АККОРДЕОН */}
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