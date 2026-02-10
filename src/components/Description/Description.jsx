import Button from '../Button/Button';
import {
  DescriptionContainer,
  DescriptionText,
  DetailsButtonWrapper
} from './styled';

const Description = ({ text }) => {
  return (
    <DescriptionContainer>
      <DescriptionText>{text}</DescriptionText>
      <DetailsButtonWrapper>
        <Button 
          size="medium"
          bgColor="#2196f3"
          textColor="white"
          hoverColor="#1976d2"
          onClick={() => console.log("скрытие/открытие всего текста")}
        >
          Подробнее
        </Button>
      </DetailsButtonWrapper>
    </DescriptionContainer>
  );
};

export default Description;