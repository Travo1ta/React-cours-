import styled from 'styled-components';
import { Image } from '../../elements';

export const ImageWrapper = styled.div`
  width: 300px;
  height: 385px;
  flex-shrink: 0;
`;

export const GalleryImage = styled(Image).attrs((props) => ({
  src: props.src,
  alt: props.alt || "Изображение товара",
  width: "300",
  height: "385"
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;