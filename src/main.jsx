import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ListsProvider } from "./context/lists.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListsProvider>
      <App />
    </ListsProvider>
  </StrictMode>,
);
