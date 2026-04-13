import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { theme } from '../../theme';

// Обёртка для всего компонента
export const GalleryWrapper = styled.div`
  position: relative;
  width: ${props => props.width ? `${props.width}px` : '400px'};
  margin: 0 auto;
`;

// Главный слайдер
export const StyledSwiper = styled(Swiper)`
  width: ${props => props.width ? `${props.width}px` : '400px'};
  height: ${props => props.height ? `${props.height}px` : '300px'};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;

  .swiper-pagination-bullet-active {
    background: ${theme.primary};
  }
`;

// Кастомные кнопки навигации
export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$left ? 'left: -15px;' : 'right: -15px;'}
  z-index: 10;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid ${theme.borderColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.primary};
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

// Изображение в слайдере
export const SlideImage = styled.img`
  width: 100%;
  height: ${props => props.$height ? `${props.$height}px` : '300px'};
  object-fit: cover;
`;

// Слайдер миниатюр
export const ThumbsSwiper = styled(Swiper)`
  width: 100%;
  height: 80px;

  .swiper-slide {
    opacity: 0.6;
    transition: opacity 0.3s;
    cursor: pointer;

    &-thumb-active {
      opacity: 1;
      border: 2px solid ${theme.primary};
      border-radius: 4px;
    }
  }
`;

// Изображение миниатюры
export const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;