import React, { useState } from 'react';
import Button from '../Button/Button';
import {
   OrderForm,
   OrderLabel,
   OrderInput,
   OrderButton
} from './styled';

const Order = ({ onSubmit }) => {
   // ШАГ 2: Заводим состояние для каждого поля
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');

   // ШАГ 4: Проверка на заполнение всех полей
   const isButtonEnable = name.trim() !== '' && phone.trim() !== '' && address.trim() !== '';

   // ШАГ 3: Универсальная функция для обработки изменений
   const handleChange = (setter) => (e) => {
      setter(e.target.value);
   };

   // ШАГ 4: Обработчик отправки формы
   const handleSubmit = (e) => {
      e.preventDefault();

      // Выводим данные в консоль согласно заданию
      console.log(`${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`);
      console.log('Детали заказа:', { name, phone, address });

      // Если есть внешний обработчик (из ProductPage), вызываем его
      if (onSubmit) {
         onSubmit({ name, phone, address });
      }

      // Очищаем форму после отправки (опционально)
      setName('');
      setPhone('');
      setAddress('');
   };

   return (
      <OrderForm onSubmit={handleSubmit}>
         {/* ШАГ 3: Поле "Имя" - управляемое */}
         <OrderLabel>
            Имя:
            <OrderInput
               type="text"
               name="name"
               value={name}
               onChange={handleChange(setName)}
               placeholder="Введите ваше имя"
               required
            />
         </OrderLabel>

         {/* ШАГ 3: Поле "Телефон" - управляемое */}
         <OrderLabel>
            Телефон:
            <OrderInput
               type="tel"
               name="phone"
               value={phone}
               onChange={handleChange(setPhone)}
               placeholder="+7 (999) 999-99-99"
               required
            />
         </OrderLabel>

         {/* ШАГ 3: Поле "Адрес доставки" - управляемое */}
         <OrderLabel>
            Адрес доставки:
            <OrderInput
               type="text"
               name="address"
               value={address}
               onChange={handleChange(setAddress)}
               placeholder="Введите адрес доставки"
               required
            />
         </OrderLabel>

         {/* ШАГ 4: Кнопка с проверкой на заполнение */}
         <OrderButton
            type="submit"
            size="large"
            disabled={!isButtonEnable} // Кнопка неактивна, пока не все поля заполнены
         >
            Оформить
         </OrderButton>
      </OrderForm>
   );
};

export default Order;