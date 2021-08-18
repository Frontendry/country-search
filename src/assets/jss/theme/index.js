import { createTheme } from "@material-ui/core/styles";

const styleDefaults = {
  topSpacing: 90,
  sectionSpacing: 50,
};

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
  },
  palette: {
    primary: {
      contrastText: "#ffffff",
      main: "#2196f3",
      dark: "#25262b",
    },
    grey: {
      100: "#f6f8fb",
    },
  },
});

export { styleDefaults, theme };
