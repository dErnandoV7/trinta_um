import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Context
import { TrintaeUmContextProvider } from "./context/trintaeum";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrintaeUmContextProvider>
      <App />
    </TrintaeUmContextProvider>
  </React.StrictMode>
);
