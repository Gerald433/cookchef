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
import WishContent from "./pages_Homepage/WishContent";
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <main>
              <Acceuil />
            </main>

            <Footer />
          </>
        }
      />
      <Route
        path="/recipes"
        element={
          <>
            <Header />
            <main>
              <Content />
            </main>

            <Footer />
          </>
        }
      />
      <Route
        path="/wishlist"
        element={
          <>
            <Header />
            <main>
              <WishContent />
            </main>

            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
