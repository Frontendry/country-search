// External Imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

// Local Imports
import { theme } from "./assets/jss/theme";
import App from "./App";

// Redux Store
import store from "./store";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
