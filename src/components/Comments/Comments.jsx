import { useState } from 'react';
import Popularity from '../Popularity/Popularity';
import {
   CommentsContainer,
   CommentsList,
   CommentItem,
   CommentAuthor,
   CommentText,
   ShowMoreButtonWrapper,
   ShowMoreButton
} from './styled';

const Comments = ({ comments = [] }) => {
   const commentsCount = comments?.length || 0;
   const [showAll, setShowAll] = useState(false);

   const initialCount = 3;
   const displayedComments = showAll
      ? comments
      : comments?.slice(0, initialCount) || [];

   const shouldShowButton = commentsCount > initialCount;

   return (
      <CommentsContainer>
         <Popularity count={commentsCount} />

         {commentsCount > 0 && (
            <>
               <CommentsList>
                  {displayedComments.map(comment => (
                     <CommentItem key={`${comment.author}-${comment.text}`}>
                        <CommentAuthor>{comment?.author}</CommentAuthor>
                        <CommentText>{comment?.text}</CommentText>
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