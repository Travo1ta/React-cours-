import React from 'react';
import {
   CommentsContainer,
   CommentsList,
   CommentItem,
   CommentAuthor,
   CommentText,
   ShowMoreButton
} from './styled';

const Comments = ({ comments, onShowMore, hasMoreComments }) => {
   if (!comments?.length) {
      return <CommentsContainer>Нет комментариев</CommentsContainer>;
   }

   return (
      <CommentsContainer>
         <CommentsList>
            {comments.map((comment) => (
               <CommentItem key={comment.id}>
                  <CommentAuthor>{comment.author}</CommentAuthor>
                  <CommentText>{comment.text}</CommentText>
               </CommentItem>
            ))}
         </CommentsList>

         {hasMoreComments && (
            <ShowMoreButton onClick={onShowMore}>
               Показать ещё
            </ShowMoreButton>
         )}
      </CommentsContainer>
   );
};

export default Comments;