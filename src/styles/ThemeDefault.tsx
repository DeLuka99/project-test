import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#27AE60",
    secondary: "#92E3A9",

    dark: "#1D1D1D",
    white: "#FFFDF9",
  },
};

const ThemeDefault = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeDefault;
