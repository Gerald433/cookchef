import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";
import "./assets/styles/index.scss";

import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Acceuil from "./pages_Homepage/Acceuil";
import Content from "./pages_Homepage/Content";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <main>
      <Routes>
        {/* Utilisation de la prop element pour conditionner le rendu du Header */}
        <Route
          path="/"
          element={
            <div>
              <Acceuil />
              <Footer />
            </div>
          }
        />
        <Route
          path="/recipes"
          element={
            <div>
              <Header />
              <Content />
              <Footer />
            </div>
          }
        />
      </Routes>
    </main>
  </BrowserRouter>
);


reportWebVitals();
