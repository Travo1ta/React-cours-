// Price/styled.js
import styled from 'styled-components';
import { P } from '../../elements';

export const Price = styled(P).attrs((props) => ({
  children: `${props.value || props.children} ₽`,
  as: 'b'
}))`
  color: ${(props) => props.theme?.error || '#d32f2f'};
  font-size: 1.5rem;
  font-weight: 700;
`;