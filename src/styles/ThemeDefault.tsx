import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#000000",
    softDark: "#36313D",

    white: "#FFFDF9",

    persianGreen: "#06B49A",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const ThemeDefault = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeDefault;
