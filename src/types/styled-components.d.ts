import theme from '../styles/themes/light'

// inferĂȘncia de tipos
// define o defaultTheme a partir de theme
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
