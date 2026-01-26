import { StyledPrice } from './styled';

const Price = ({ children }) => {
  return <StyledPrice as="b">{children}</StyledPrice>;
};

export default Price;