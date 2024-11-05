import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Header from "./components/header-footer/header";
import Footer from "./components/header-footer/footer";
import Apropos from "./pages/aPropos";
import FicheLogement from "./pages/ficheLogement";
// import listeLogement from "../src/listeLogement.json";
import Erreur from "./pages/erreur";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/location:id" element={<FicheLogement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
