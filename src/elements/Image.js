import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: ${(props) => props.maxWidth}px;
`;

export default Image;