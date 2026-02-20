import React from 'react';
import Button from '../Button/Button'; // Импортируем общий компонент Button
import {
   CommentsContainer,
   CommentsList,
   CommentItem,
   CommentAuthor,
   CommentText,
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
            // ИСПРАВЛЕНО: используем Button вместо обычной кнопки
            <Button
               size="large"
               onClick={onShowMore}
               style={{ width: '100%', marginTop: '15px' }}
            >
               Показать ещё
            </Button>
         )}
      </CommentsContainer>
   );
};

export default Comments;