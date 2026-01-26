import styled from 'styled-components';
import { Ul, Li } from '../../elements';
import Button from '../Button/Button';

export const CommentsContainer = styled.div`
  margin-top: 30px;
`;

export const CommentsTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  color: #333;
  font-weight: 600;
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

// Синяя кнопка как у "Купить"
export const ShowMoreButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-weight: 600;
    border: none;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd8 0%, #6b4192 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
    }
  }
`;