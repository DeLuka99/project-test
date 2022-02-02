import { ThemeProvider } from "styled-components";

interface Theme {
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

const theme = {
  colors: {
    dark: "#000",
    softDark: "#36313D",

    white: "#FFFDF9",

    persianGreen: "#06B49A",
  },
  // fonts: ["sans-serif", "Roboto"],
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
