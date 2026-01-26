import { StyledOldPrice } from './styled';

const OldPrice = ({ children }) => {
  return <StyledOldPrice as="del">{children}</StyledOldPrice>;
};

export default OldPrice;