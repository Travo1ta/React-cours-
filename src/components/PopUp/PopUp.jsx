import { useEffect } from 'react';
import {
   PopUpOverlay,
   PopUpContainer,
   PopUpHeader,
   PopUpTitle,
   CloseButton,
   PopUpContent
} from './styled';

const PopUp = ({ isOpen, onClose, title, children }) => {
   useEffect(() => {
      const handleEscClose = (e) => {
         if (e.key === 'Escape') {
            onClose();
         }
      };

      if (isOpen) {
         document.addEventListener('keydown', handleEscClose);
         document.body.style.overflow = 'hidden';
      }

      return () => {
         document.removeEventListener('keydown', handleEscClose);
         document.body.style.overflow = 'unset';
      };
   }, [isOpen, onClose]);

   const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   if (!isOpen) return null;

   return (
      <PopUpOverlay onClick={handleOverlayClick}>
         <PopUpContainer>
            <PopUpHeader>
               <PopUpTitle>{title}</PopUpTitle>
               <CloseButton onClick={onClose} aria-label="Закрыть">
                  ×
               </CloseButton>
            </PopUpHeader>
            <PopUpContent>
               {children}
            </PopUpContent>
         </PopUpContainer>
      </PopUpOverlay>
   );
};

export default PopUp;