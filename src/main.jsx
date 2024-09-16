import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Test } from "./Test.jsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <PrimeReactProvider value={{ unstyled: false }}>
    <App />
    {/* <Test /> */}
  </PrimeReactProvider>
  //  {/* </React.StrictMode> */}
);
