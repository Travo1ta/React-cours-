import React from 'react';
import Price from './price';
import OldPrice from './old-price';

const FullPrice = ({ oldPrice, price }) => {
  const showOldPrice = oldPrice && oldPrice > 0 && oldPrice > price;
  const discount = showOldPrice 
    ? Math.round((1 - price / oldPrice) * 100) 
    : 0;

  return (
    <div style={{ fontSize: "18px" }}>
      Цена: 
      {showOldPrice && (
        <>
          <OldPrice>{oldPrice} ₽</OldPrice>
          <Price>{price} ₽</Price>
          <span style={{ 
            color: "green", 
            marginLeft: "10px",
            fontSize: "14px"
          }}>
            Скидка {discount}%
          </span>
        </>
      )}
      {!showOldPrice && <Price>{price} ₽</Price>}
    </div>
  );
};

export default FullPrice;  // ✅ Экспорт по умолчанию