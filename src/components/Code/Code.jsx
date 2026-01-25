import styled from 'styled-components';
import { P } from '../../elements';

const StyledCode = styled(P)`
  color: #666;
  font-size: 0.875rem;
  display: block;
  margin-bottom: 5px;
`;

const Code = ({ children }) => {
  return <StyledCode as="small">{children}</StyledCode>;
};

export default Code;