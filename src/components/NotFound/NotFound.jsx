import React from 'react';
import { Link } from 'react-router-dom';
import {
   NotFoundContainer,
   NotFoundTitle,
   NotFoundText,
   HomeLink
} from './styled';

const NotFound = () => {
   return (
      <NotFoundContainer>
         <NotFoundTitle>404</NotFoundTitle>
         <NotFoundText>Страница не найдена</NotFoundText>
         <NotFoundText secondary>
            Товар с таким артикулом отсутствует в каталоге
         </NotFoundText>
         <HomeLink to="/">Вернуться на главную</HomeLink>
      </NotFoundContainer>
   );
};

export default NotFound;