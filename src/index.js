import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store"; // Import your Redux store
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
