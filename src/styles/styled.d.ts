import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      persianGreen: string;
      softDark: string;
      dark: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
