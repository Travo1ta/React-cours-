import Popularity from '../Popularity/Popularity';
import styled from 'styled-components';
import { Ul, Li } from '../../elements';

const CommentsContainer = styled.div`
  margin-top: 30px;
`;

const CommentsTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  color: #333;
  font-weight: 600;
`;

const CommentsList = styled(Ul)``;

const CommentItem = styled(Li)`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  margin-bottom: 10px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const CommentAuthor = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 1rem;
`;

const CommentText = styled.div`
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const Comments = ({ comments = [] }) => {
  const commentsCount = comments.length;
  
  return (
    <CommentsContainer>
      <CommentsTitle>Отзывы ({commentsCount})</CommentsTitle>
      
      <Popularity commentsCount={commentsCount} />
      
      {commentsCount > 0 && (
        <CommentsList>
          {comments.map(comment => (
            <CommentItem key={comment.id}>
              <CommentAuthor>{comment.author}</CommentAuthor>
              <CommentText>{comment.text}</CommentText>
            </CommentItem>
          ))}
        </CommentsList>
      )}
    </CommentsContainer>
  );
};

export default Comments;