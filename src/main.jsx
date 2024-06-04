import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToHashElement behavior="smooth" inline="start" block="start" />
    <App />
  </BrowserRouter>
);
