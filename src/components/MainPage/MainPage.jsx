import React, { useState } from 'react';
import Description from '../Description/Description';
import Line from '../Line/Line';
import Gallery from '../Gallery/Gallery';
import {
   MainContainer,
   StyledTitle,
   StyledGallery,
   DescriptionWrapper,
   MainText
} from './styled';

const MainPage = ({ data }) => {
   const [showAll, setShowAll] = useState(false);

   const getDisplayText = () => {
      if (showAll) {
         return data.text;
      }
      return data.text.length > 200
         ? data.text.slice(0, 200) + '...'
         : data.text;
   };

   return (
      <MainContainer>
         <StyledTitle as="h1">Магазин 3D принтеров</StyledTitle>

         {/* Используем $ пропсы */}
         <Line $width="670px" $thickness="4px" $rounded />

         <StyledGallery>
            <Gallery
               images={data.images}
               width={500}
               height={281}
            />
         </StyledGallery>

         <Line $width="670px" $thickness="4px" $rounded />

         <DescriptionWrapper>
            <MainText>
               <Description
                  text={getDisplayText()}
                  onShowMore={() => setShowAll(!showAll)}
                  isShowAllDescription={showAll}
                  hasMoreText={data.text.length > 200}
               />
            </MainText>
         </DescriptionWrapper>
      </MainContainer>
   );
};

export default MainPage;