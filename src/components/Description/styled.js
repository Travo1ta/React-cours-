import styled from 'styled-components';
import { P } from '../../elements';
import { theme } from '../../theme';

export const DescriptionContainer = styled.div`
  padding: 0;
`;

export const DescriptionText = styled(P)`
  line-height: 1.6;
  white-space: pre-line;
  color: ${theme.textColorMuted};
  margin: 0 0 ${theme.indent} 0;
`;

export const DetailsButtonWrapper = styled.div`
  margin-top: ${theme.indent};
  text-align: center;
`;