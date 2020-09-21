// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string,
        bgWhite: string,
        white: string,
        gray: string,
    },
    fonts: {
        regular: string,
        medium: string,
        bold: string,
        black: string,
    },
    fontSizes: {
        font12: string,
        font14: string,
        font16: string,
        font24: string,
    }
  }
}