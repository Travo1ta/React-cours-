import styled from 'styled-components';
import { P } from '../../elements';

export const OldPrice = styled(P).attrs((props) => ({
  children: `${props.value || props.children} ₽`,
  as: 'del' // Меняем тег через as проп
}))`
  color: ${(props) => props.theme?.textColorLight || '#999'};
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 400;
`;