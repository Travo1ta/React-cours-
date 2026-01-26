import styled from 'styled-components';
import { P } from '../../elements';

export const DescriptionContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const DescriptionTitle = styled.h2`
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
`;

export const DescriptionText = styled(P)`
  line-height: 1.6;
  white-space: pre-line;
  color: #555;
  margin: 0 0 20px 0;
`;

export const DetailsButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;