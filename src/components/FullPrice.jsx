import React from "react";
import Price from "./price";
import OldPrice from "./old-price";

const FullPrice = ({ price, oldPrice }) => {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <>
      {showOldPrice && (
        <>
          <OldPrice>{oldPrice} ₽</OldPrice>
          {" "}
        </>
      )}
      <Price>{price} ₽</Price>
    </>
  );
};

export default FullPrice;