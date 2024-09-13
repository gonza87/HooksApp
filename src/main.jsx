import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HooksApp from "./HooksApp";
import "./index.css";
import CounterApp from "./01-usestate/CounterApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
