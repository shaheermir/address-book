import { createGlobalStyle, DefaultTheme } from 'styled-components'

const colors = {
  primary: '#0eb1d2',
  accent: '#02182b',
  error: '#d7263d',
  contrast: '#dee5e5',
}

const margins = {
  bottom: '1rem',
}

const paddings = {
  quarter: '0.25rem',
  half: '0.5rem',
  base: '1rem',
  double: '2rem',
}

export const theme: DefaultTheme = {
  colors,
  margins,
  paddings,
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-weight: normal;
    font-family: sans-serif;
    background-color: ${colors.contrast};
  }
`
