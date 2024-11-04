import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./pages/Home/index";
// import Apropos from "./pages/a-propos";
// import Erreur from "./pages/erreur";
// import FicheLogement from "./pages/fiche-logement";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Apropos /> */}
    {/* <Erreur /> */}
    {/* <FicheLogement /> */}
  </React.StrictMode>
);
