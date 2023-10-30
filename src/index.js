import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react-dom";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Acceuil from "./pages_Homepage/Acceuil";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
