import React from "react";
import Title from "./title";
import Code from "./code";
import Gallery from "./gallery";
import FullPrice from "./FullPrice";
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
    description,
    delivery
  } = product;

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Title>{title}</Title>
      <Code>Артикул: {article}</Code>
      
      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <Gallery imageUrl={imageUrl} />
        <div>
          <FullPrice price={price} oldPrice={oldPrice} />
          
          <div style={{ margin: "15px 0" }}>
            Количество: <Counter />
          </div>
          
          <p style={{ margin: "15px 0" }}>
            <span>Доставка:</span> {delivery}
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