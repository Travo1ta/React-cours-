import styled from 'styled-components';

const buttonOptions = {
  large: {
    height: "40px",
    padding: "40px",
    fontSize: "24px",
    radius: "10px"
  },
  medium: {
    height: "30px",
    padding: "30px",
    fontSize: "18px",
    radius: "5px"
  },
  small: {
    height: "20px",
    padding: "8px",
    fontSize: "16px",
    radius: "3px"
  }
};

export const StyledButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: ${props => props.$bgColor || 'yellow'};
  color: ${props => props.$textColor || '#000'};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${(props) => {
    const theme = buttonOptions[props.$size || "medium"];

    return `
      height: ${theme.height};
      padding-left: ${theme.padding};
      padding-right: ${theme.padding};
      font-size: ${theme.fontSize};
      border-radius: ${theme.radius};
    `;
  }}
  
  &:hover {
    background-color: ${props => props.$hoverColor || props.$bgColor || 'yellow'};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
`;