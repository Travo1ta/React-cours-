import styled from 'styled-components';
import { P } from '../../elements';
import { theme } from '../../theme';

export const PopularityBadge = styled(P).withConfig({
  shouldForwardProp: (prop) => !['$commentsCount'].includes(prop),
})`
  background-color: ${({ $commentsCount }) => 
    $commentsCount > 5 ? theme.successLight : theme.warningLight};
  color: ${({ $commentsCount }) => 
    $commentsCount > 5 ? theme.success : theme.warning};
  padding: ${theme.indentSmall} 16px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ $commentsCount }) => 
    $commentsCount > 5 ? '#c8e6c9' : '#ffe0b2'};
`;