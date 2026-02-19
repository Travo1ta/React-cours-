import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, onClick, size = 'medium', disabled = false, type = 'button', style, className }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $size={size}
      style={style}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;