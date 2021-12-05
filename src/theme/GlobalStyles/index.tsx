import { createGlobalStyle } from 'styled-components';
import { ConverterTheme } from '../';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${ConverterTheme.colors.tertiary};
    font-family: ${ConverterTheme.fonts.standard};
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  span {
    font-family: ${ConverterTheme.fonts.standard};
  }

  a {
    text-decoration: none;
  }

`;
