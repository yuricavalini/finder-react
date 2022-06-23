import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%; /* 10px */
    color: ${theme.colors.white};
    scroll-behavior: smooth;
  }

  body {
    min-height: 100%;
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.base};
    line-height: ${theme.lineHeights.base};
    background-color: ${theme.colors.gray.n900};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  select {
    font-family: ${theme.fonts.primary};
  }

  input,
  textarea {
    caret-color: white;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button,
  select {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
