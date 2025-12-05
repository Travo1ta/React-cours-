import React from "react";
import Title from "./title";
import Code from "./code";
import Gallery from "./gallery";
import Price from "./price";
import OldPrice from "./old-price";
import Counter from "./counter";
import Description from "./description";
import Comments from "./comments";

function ProductPage({ product }) {
  const {
    title,
    article,
    oldPrice,
    price,
    imageUrl,
    comments = [],
    description
  } = product;

  // Условие для отображения старой цены
  const showOldPrice = oldPrice && oldPrice > 0 && oldPrice > price;

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Title>{title}</Title>
      <Code>Артикул: {article}</Code>
      
      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <Gallery imageUrl={imageUrl} />
        <div>
          <p style={{ fontSize: "18px" }}>
            Цена: 
            {showOldPrice && <OldPrice>{oldPrice} ₽</OldPrice>}
            <Price>{price} ₽</Price>
            {showOldPrice && (
              <span style={{ 
                color: "green", 
                marginLeft: "10px",
                fontSize: "14px"
              }}>
                Скидка {Math.round((1 - price/oldPrice) * 100)}%
              </span>
            )}
          </p>
          
          <div style={{ margin: "15px 0" }}>
            Количество: <Counter />
          </div>
          
          <p style={{ margin: "15px 0" }}>
            <span>Доставка:</span> 1 апреля
          </p>
          
          <button type="button">Купить</button>
        </div>
      </div>
      
      <Description text={description} />
      
      <Comments comments={comments} />
    </section>
  );
}

export default ProductPage;