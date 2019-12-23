import React from "react";
import { createGlobalStyle } from "styled-components";

import { theme } from "./";

const GlobalStyleWithoutProps = createGlobalStyle`
  @font-face {
    font-family: ${theme.globals.fontFamilySans};
    src: url(${props => props.serif.book || `/static/fonts/MaisonNeue-Book.woff2`});
    font-weight: 300;
  }
  @font-face {
    font-family: ${theme.globals.fontFamilySans};
    src: url(${props => props.serif.demi || `/static/fonts/MaisonNeue-Demi.woff2}`});
    font-weight:600;
  }

  html {
    font-family: ${theme.globals.fontFamilySans}, Arial, Helvetica, sans-serif;
    color: ${theme.neutral5};
    font-size: ${theme.globals.fontSize};

    line-height: 1.15; /* Correct the line height in all browsers. */
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */
  }
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  button,input :focus { outline: none; }
  input, select, textarea {font-family: inherit;}

  .grecaptcha-badge{
	visibility: collapse !important;  
}
`;

export const GlobalStyle = ({ serif = {} }) => <GlobalStyleWithoutProps serif={serif} />;
