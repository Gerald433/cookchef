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
import ChoiceOfCards from "./pages_Homepage/ChoiceOfCards";
import WishContent from "./pages_Homepage/WishContent";
import Drinks from "./pages_Homepage/Drinks";
import Desserts from "./pages_Homepage/Desserts";
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
        path="/choice"
        element={
          <>
            <Header />
            <main>
              <ChoiceOfCards />
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
        path="/drinks"
        element={
          <>
            <Header />
            <main>
              <Drinks />
            </main>

            <Footer />
          </>
        }
      />
      <Route
        path="/desserts"
        element={
          <>
            <Header />
            <main>
              <Desserts />
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
