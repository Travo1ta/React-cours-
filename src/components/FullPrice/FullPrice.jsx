import Price from '../Price/Price';
import OldPrice from '../OldPrice/OldPrice';
import styled from 'styled-components';

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  gap: 10px;
`;

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