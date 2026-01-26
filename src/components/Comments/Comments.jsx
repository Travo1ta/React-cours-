import { useState } from 'react';
import Popularity from '../Popularity/Popularity';
import {
  CommentsContainer,
  CommentsTitle,
  CommentsList,
  CommentItem,
  CommentAuthor,
  CommentText,
  ShowMoreButtonWrapper,
  ShowMoreButton
} from './styled';

const Comments = ({ comments = [] }) => {
  const commentsCount = comments.length;
  const [showAll, setShowAll] = useState(false);
  
  const initialCount = 3;
  const displayedComments = showAll 
    ? comments 
    : comments.slice(0, initialCount);
    
  const shouldShowButton = commentsCount > initialCount;

  return (
    <CommentsContainer>
      <CommentsTitle>Отзывы ({commentsCount})</CommentsTitle>
      
      <Popularity commentsCount={commentsCount} />
      
      {commentsCount > 0 && (
        <>
          <CommentsList>
            {displayedComments.map(comment => (
              <CommentItem key={comment.id}>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
              </CommentItem>
            ))}
          </CommentsList>
          
          {shouldShowButton && (
            <ShowMoreButtonWrapper>
              <ShowMoreButton
                size="medium"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'СВЕРНУТЬ' : 'ПОКАЗАТЬ ЕЩЁ'}
              </ShowMoreButton>
            </ShowMoreButtonWrapper>
          )}
        </>
      )}
    </CommentsContainer>
  );
};

export default Comments;