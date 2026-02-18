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

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${theme.primary};
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;