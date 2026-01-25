import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background: transparent;
  outline: none;

  &:active,
  &:hover {
    background: transparent;
    box-shadow: none;
  }
`;

export default Button;