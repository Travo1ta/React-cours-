import styled from 'styled-components';
import { Ul, Li } from '../../elements';
import Button from '../Button/Button';

export const CommentsContainer = styled.div`
  padding: 0;
`;

export const CommentsList = styled(Ul)``;

export const CommentItem = styled(Li)`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  margin-bottom: 10px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const CommentAuthor = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 1rem;
`;

export const CommentText = styled.div`
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`;

export const ShowMoreButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const ShowMoreButton = styled(Button)`
  && {
    background-color: #2196f3;
    color: white;
    font-weight: 500;
    border: none;
    box-shadow: 0 2px 4px rgba(33, 150, 243, 0.3);
    
    &:hover {
      background-color: #1976d2;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(33, 150, 243, 0.4);
    }
    
    &:active {
      transform: translateY(0);
      background-color: #1565c0;
    }
  }
`;