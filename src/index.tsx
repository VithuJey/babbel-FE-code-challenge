import React from "react";
import { render } from "react-dom";
import App from "./App";

import "./styles/main.scss";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
