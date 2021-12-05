import mixins from './mixins'

const dimensions = {
  navHeight: '7.5rem',
  navHeightMobile: '4rem',
  maxWidth: '1200px',
  landingPageMaxWidth: '1400px',
  mobileTopPadding: '6.5rem',
  desktopTopPadding: '6rem',
  footerHeight: '3.5rem',
}

const colors = {
  danger: '#E93C3C',
  green: '#1AB759',
}

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const theme = () => ({
  primary: '#3772FF',
  tertiary: '#0133AB',
  bgColor: '#FBFCFE',
  colors,
  dimensions,
  mixins,
  fontFamily: 'Avenir Next',
  secondary: '#BA390C',
})

export default theme
