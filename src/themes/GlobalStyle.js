import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

import BannerBackgroundImage from '../assets/images/banner-bg.svg'

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
    color: ${theme.colors.white.n000};
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

  .bg-image {
    background-image: url(${BannerBackgroundImage});
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

/* ACCESSIBILITY */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* SCROLLBAR STYLE */

/* https://www.digitalocean.com/community/tutorials/css-scrollbars-pt */
/* https://stackoverflow.com/questions/50817727/change-scrollbar-height */
* {
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.white.n000} ${theme.colors.white.n500};
}

*::-webkit-scrollbar {
  width: 8px;
  transition: all 0.2s ease-in;
}

*::-webkit-scrollbar-track {
  background: ${theme.colors.white.n500};
  border-radius: 20px;
}

*::-webkit-scrollbar-thumb {
  background-color: ${theme.colors.white.n000};
  border-radius: 20px;
  border: 3px solid ${theme.colors.white.n000};
}

/********** HELPER CLASSES **********/
.center-page-content {
  padding: 0 24px;
  margin: 0 auto;
  max-width: ${theme.widths.main};
  width: 100%;
}

.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.direction-column {
  flex-direction: column;
}

.flex-gap {
  display: flex;
  gap: 24px;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.margin-top-96 {
  margin-top: 96px;
}

.column {
  display: flex;
  flex-direction: column;
  min-width: auto;
}

.row {
  display: flex;
  min-width: auto;
}

.space-between {
  justify-content: space-between;
}

.text-truncate {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`
