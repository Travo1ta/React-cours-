import styled from 'styled-components';
import { H1 } from '../../elements';

const StyledTitle = styled(H1)`
  margin: 0 0 10px 0;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;