import React, { useRef, useState } from 'react'; // УБРАЛИ useEffect
import {SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

// Стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import {
  GalleryWrapper,
  StyledSwiper,
  NavButton,
  SlideImage,
  ThumbsSwiper,
  ThumbImage
} from './styled';

const Gallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  if (!images?.length) return null;

  return (
    <GalleryWrapper>
      <NavButton 
        $left 
        ref={navigationPrevRef} 
        title="Назад"
      >
        &lt;
      </NavButton>
      
      <NavButton 
        $right 
        ref={navigationNextRef} 
        title="Вперёд"
      >
        &gt;
      </NavButton>

      <StyledSwiper
        onBeforeInit={(swiper) => {
          if (navigationPrevRef.current && navigationNextRef.current) {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`slide-${image}-${index}`}>
            <SlideImage 
              src={image} 
              alt={`Продукт ${index + 1}`} 
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <ThumbsSwiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${image}-${index}`}>
            <ThumbImage 
              src={image} 
              alt={`Миниатюра ${index + 1}`} 
            />
          </SwiperSlide>
        ))}
      </ThumbsSwiper>
    </GalleryWrapper>
  );
};

export default Gallery;