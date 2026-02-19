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

// Удаляем ShowMoreButton, так как используем общий Button
// export const ShowMoreButton = styled.button...