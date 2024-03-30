import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PageLoader from "./components/PageLoader/PageLoader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageLoader />
    <App />
  </React.StrictMode>
);
