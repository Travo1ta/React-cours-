import Button from '../Button/Button';
import {
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  DetailsButtonWrapper
} from './styled';

const Description = ({ text }) => {
  return (
    <DescriptionContainer>
      <DescriptionTitle>Описание</DescriptionTitle>
      <DescriptionText>{text}</DescriptionText>
      <DetailsButtonWrapper>
        <Button 
          size="medium"
          bgColor="#2196f3"
          textColor="white"
          hoverColor="#1976d2"
        >
          Подробнее
        </Button>
      </DetailsButtonWrapper>
    </DescriptionContainer>
  );
};

export default Description;