import styled from 'styled-components';
import { Image } from '../../elements';

const ImageWrapper = styled.div`
  width: 300px;
  height: 385px;
  flex-shrink: 0;
`;

const StyledImage = styled(Image)` // Используем Image
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

const Gallery = ({ imageUrl }) => {
  return (
    <ImageWrapper>
      <StyledImage src={imageUrl} alt="3D принтер" />
    </ImageWrapper>
  );
};

export default Gallery;