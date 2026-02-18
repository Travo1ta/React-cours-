import styled from 'styled-components';
import { theme } from '../../theme';

export const CommentsContainer = styled.div`
  padding: 5px 0;
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CommentItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid ${theme.borderColor};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const CommentAuthor = styled.div`
  font-weight: 600;
  color: ${theme.textColor};
  margin-bottom: 4px;
`;

export const CommentText = styled.p`
  color: ${theme.textColorMuted};
  line-height: 1.5;
  margin: 0;
`;

export const ShowMoreButton = styled.button`
  background: none;
  border: 1px solid ${theme.borderColor};
  border-radius: 4px;
  padding: 8px 16px;
  color: ${theme.primary};
  cursor: pointer;
  font-size: 14px;
  margin-top: 15px;
  width: 100%;
  
  &:hover {
    background: ${theme.background};
    border-color: ${theme.primary};
  }
`;