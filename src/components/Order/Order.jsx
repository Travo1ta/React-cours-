import React from 'react';
import Button from '../Button/Button';
import {
   OrderForm,
   OrderLabel,
   OrderInput,
   OrderButton
} from './styled';

const Order = ({ formData, onChange, onSubmit }) => {
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      onChange({
         ...formData,
         [name]: value
      });
   };

   return (
      <OrderForm onSubmit={onSubmit}>
         <OrderLabel>
            Имя:
            <OrderInput
               type="text"
               name="name"
               value={formData.name}
               onChange={handleInputChange}
               placeholder="Введите ваше имя"
               required
            />
         </OrderLabel>

         <OrderLabel>
            Телефон:
            <OrderInput
               type="tel"
               name="phone"
               value={formData.phone}
               onChange={handleInputChange}
               placeholder="+7 (999) 999-99-99"
               required
            />
         </OrderLabel>

         <OrderLabel>
            Адрес доставки:
            <OrderInput
               type="text"
               name="address"
               value={formData.address}
               onChange={handleInputChange}
               placeholder="Введите адрес доставки"
               required
            />
         </OrderLabel>

         <OrderButton type="submit" size="large">
            Оформить
         </OrderButton>
      </OrderForm>
   );
};

export default Order;