import styled from 'styled-components';
import { H1 } from '../../elements';

export const Title = styled(H1)`
  margin: 0 0 10px 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme?.textColor || '#333'};
  line-height: 1.2;
`;