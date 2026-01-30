import styled from 'styled-components';
import { P } from '../../elements';

export const Code = styled(P).attrs((props) => ({
  children: `Артикул: ${props.children}`
}))`
  color: ${(props) => props.theme?.textColorMuted || '#666'};
  font-size: 0.875rem;
  display: block;
  margin-bottom: 5px;
`;