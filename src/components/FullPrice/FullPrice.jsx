import Price from '../Price/Price';
import OldPrice from '../OldPrice/OldPrice';
import { PriceContainer } from './styled';

const FullPrice = ({ price, oldPrice }) => {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <PriceContainer>
      {showOldPrice && <OldPrice>{oldPrice} ₽</OldPrice>}
      <Price>{price} ₽</Price>
    </PriceContainer>
  );
};

export default FullPrice;