import styled from 'styled-components';
import { Price } from '../Price/styled';
import { OldPrice } from '../OldPrice/styled';

export const PriceContainer = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 15px 0;
  gap: 10px;
`;

const FullPrice = ({ price, oldPrice }) => {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <PriceContainer>
      {showOldPrice && <OldPrice value={oldPrice} />}
      <Price value={price} />
    </PriceContainer>
  );
};

export default FullPrice;