import { createTheme } from "@material-ui/core/styles";

const styleDefaults = {
  topSpacing: 90,
  sectionSpacing: 50,
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
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
