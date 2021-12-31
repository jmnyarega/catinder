import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ant design css
import "antd/dist/antd.css";

// custom styles
import "./styles/global.css";
import "./styles/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
