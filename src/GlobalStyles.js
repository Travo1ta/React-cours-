import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.background};
    color: ${theme.textColor};
    line-height: 1.5;
    font-size: ${theme.fontSize};
  }
  
  #root {
    min-height: 100vh;
  }
  
  /* Дополнительные сбросы для элементов, которые не в нашей библиотеке */
  a {
    text-decoration: none;
    color: inherit;
  }
  
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
  
  h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: inherit;
  }
`;

export default GlobalStyles;