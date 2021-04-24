import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      accent: string
      error: string
      contrast: string
    }
    margins: {
      bottom: string
    }
    paddings: {
      quarter: string
      half: string
      base: string
      double: string
    }
  }
}
