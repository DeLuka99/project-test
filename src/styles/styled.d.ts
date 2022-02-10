import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      secondary: string;
      primary: string;
      white: string;
      dark: string;
    };
  }
}
