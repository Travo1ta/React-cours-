import { StyledCode } from './styled';

const Code = ({ children }) => {
  return <StyledCode as="small">{children}</StyledCode>;
};

export default Code;