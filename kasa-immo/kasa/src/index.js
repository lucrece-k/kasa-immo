import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./pages/Home/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
