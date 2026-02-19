import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

// Стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import {
  GalleryContainer,
  MainSwiper,
  ThumbsSwiper,
  SlideImage,
  ThumbImage
} from './styled';

const Gallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  if (!images?.length) return null;

  return (
    <GalleryContainer>
      {/* Главный слайдер */}
      <MainSwiper
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Pagination, Thumbs]}
        loop={true}
      >
        {images.map((image, index) => (
          // ИСПРАВЛЕНО: используем уникальный ключ (url + index) вместо просто index
          <SwiperSlide key={`slide-${image}-${index}`}>
            <SlideImage src={image} alt={`Product ${index + 1}`} />
          </SwiperSlide>
        ))}
      </MainSwiper>

      {/* Слайдер с миниатюрами (превью) */}
      <ThumbsSwiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
      >
        {images.map((image, index) => (
          // ИСПРАВЛЕНО: используем уникальный ключ (url + index) вместо просто index
          <SwiperSlide key={`thumb-${image}-${index}`}>
            <ThumbImage src={image} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </ThumbsSwiper>
    </GalleryContainer>
  );
};

export default Gallery;