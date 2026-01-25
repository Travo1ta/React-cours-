import styled from 'styled-components';
import { P } from '../../elements';

const StyledPrice = styled(P)`
  color: #d32f2f;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Price = ({ children }) => {
  return <StyledPrice as="b">{children}</StyledPrice>;
};

export default Price;