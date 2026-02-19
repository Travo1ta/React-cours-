import styled from 'styled-components';
import { theme } from '../../theme';

export const DescriptionContainer = styled.div`
  padding: 5px 0;
`;

export const DescriptionText = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  color: ${theme.textColor};
`;

// Удаляем DescriptionButton, так как используем общий Button
// export const DescriptionButton = styled.button...