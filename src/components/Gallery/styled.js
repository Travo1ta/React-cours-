import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { theme } from '../../theme';

export const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;

  .swiper-pagination-bullet-active {
    background: ${theme.primary};
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* ИСПРАВЛЕНО: используем транзиентные пропсы $left и $right */
  ${props => props.$left ? 'left: 10px;' : 'right: 10px;'}
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${theme.primary};
  transition: all 0.2s;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;