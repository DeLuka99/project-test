import React from "react";
import ReactDOM from "react-dom";

import ThemeDefault from "./styles/ThemeDefault";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeDefault>
      <App />
    </ThemeDefault>
  </React.StrictMode>,
  document.getElementById("root")
);
