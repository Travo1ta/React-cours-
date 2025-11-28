import React from "react";
import Title from "./title";
import Code from "./code";
import Gallery from "./gallery";
import Price from "./price";
import OldPrice from "./old-price";
import Counter from "./counter";
import Description from "./description";

function ProductPage() {
  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Title>3D принтер</Title>
      <Code>Артикул: 2840367</Code>
      
      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <Gallery />
        <div>
          <p style={{ fontSize: "18px" }}>
            Цена: <OldPrice>55555 ₽</OldPrice> <Price>33333 ₽</Price>
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
      
      <Description />
    </section>
  );
}

export default ProductPage;