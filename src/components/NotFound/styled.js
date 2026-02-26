import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.indentLarge};
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: ${theme.primary};
  margin: 0;
  line-height: 1;
  text-shadow: 4px 4px 0 rgba(102, 126, 234, 0.2);
`;

export const NotFoundText = styled.p`
  font-size: ${props => props.secondary ? '18px' : '24px'};
  color: ${props => props.secondary ? theme.textColorMuted : theme.textColor};
  margin: ${props => props.secondary ? theme.indent : '0'} 0 ${theme.indent};
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background: ${theme.gradients.primary};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;