import styled from 'styled-components';
import { P } from '../../elements';

const StyledOldPrice = styled(P)`
  color: #999;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: line-through;
`;

const OldPrice = ({ children }) => {
  return <StyledOldPrice as="del">{children}</StyledOldPrice>;
};

export default OldPrice;