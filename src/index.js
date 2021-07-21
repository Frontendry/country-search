// External Imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// Local Imports
import App from "./App";

// Redux Store
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
