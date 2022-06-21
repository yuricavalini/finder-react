import { MAIN_WIDTH, MAX_CONTENT_WIDTH } from '../helpers/constants'

export const theme = {
  fontSizes: {
    xs: '1.2rem',
    sm: '1.4rem',
    base: '1.6rem',
    lg: '1.8rem',
    h5: '2rem',
    h4: '2.4rem',
    h3: '2.8rem',
    h2: '3.2rem',
    h1: '4rem',
    display: '5.6rem',
  },
  lineHeights: {
    xs: '1.3rem',
    sm: '1.3rem',
    base: '1.3rem',
    lg: '1.3rem',
    h5: '1.3rem',
    h4: '1.3rem',
    h3: '1.3rem',
    h2: '1.3rem',
    h1: '1.3rem',
    display: '1.3rem',
  },
  fonts: {
    primary: '"Noto Sans", Arial, sans-serif',
  },
  borderRadius: {
    sm: '0.6rem',
    base: '0.8rem',
    lg: '1.2rem',
  },
  colors: {
    primary: '#fd5631',
    accent: '#5d3cf2',
    success: '#07c98b',
    danger: '#f23c49',
    warning: '#fdbc31',
    info: '#3c76f2',
    bg: {
      primary: '#1f1b2d',
    },
    text: {
      white: '#ffffff',
      black: '#000000',
    },
    white: {
      n000: '#ffffff',
      n040: '#ffffff0a',
      n120: '#ffffff1f',
      n150: '#ffffff26',
      n500: '#ffffff80',
      n700: '#ffffffb3',
    },
    blue: {
      n900: '#282435',
    },
    gray: {
      n900: '#1f1b2d',
      n950: '#1f1b2d50',
      n800: '#454056',
      n700: '#666276',
      n600: '#9691a4',
      n500: '#bbb7c5',
      n400: '#d5d2dc',
      n300: '#efecf3',
      n200: '#f5f4f8',
      n100: '#f9f8fa',
    },
    gradient: {
      circle: '26.21deg #fd5631 0%, #5d3cf2 108.88%',
      button: '180deg, rgba(69, 64, 86, 0.765) 0%, rgba(69, 64, 86, 0.9) 100%',
    },
    filter: {
      orange:
        'brightness(0) saturate(100%) invert(48%) sepia(51%) saturate(4780%) hue-rotate(342deg) brightness(101%) contrast(99%)',
    },
  },
  shadows: {
    small:
      '0 2px 2px -2px rgba(31, 27, 45, 0.08), 0 4px 12px rgba(31, 27, 45, 0.08)',
    default:
      '0 2px 8px -4px rgba(31, 27, 45, 0.12), 0 4px 16px rgba(31, 27, 45, 0.12)',
    large:
      '0 4px 12px -6px rgba(31, 27, 45, 0.2), 0 8px 16px rgba(31, 27, 45, 0.16)',
  },
  widths: {
    main: `${MAIN_WIDTH}px`,
    maxContent: `${MAX_CONTENT_WIDTH}px`,
  },
}
