import React from "react";
import { render } from "react-dom";

import "./index.scss";

function App(): JSX.Element {
  return (
    <div>
      <h1>It works!</h1>
    </div>
  );
}

render(<App />, document.getElementById("app"));
