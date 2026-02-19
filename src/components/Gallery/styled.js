import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { theme } from '../../theme';

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const MainSwiper = styled(Swiper)`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.primary};
    background: rgba(255, 255, 255, 0.8);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    
    &:after {
      font-size: 18px;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${theme.primary};
  }
`;

export const ThumbsSwiper = styled(Swiper)`
  width: 100%;
  height: 80px;

  .swiper-slide {
    opacity: 0.6;
    transition: opacity 0.3s;
    cursor: pointer;

    &-thumb-active {
      opacity: 1;
    }
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;