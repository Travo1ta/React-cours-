import { StyledButton } from './styled';

const Button = ({ 
  children, 
  size = 'medium', 
  bgColor, 
  textColor, 
  hoverColor,
  ...props 
}) => {
  return (
    <StyledButton 
      $size={size}
      $bgColor={bgColor}
      $textColor={textColor}
      $hoverColor={hoverColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;