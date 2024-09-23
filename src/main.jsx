import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HooksApp from "./HooksApp";

// import CounterApp from "./01-usestate/CounterApp";
import CounterWithCustomHook from "./01-usestate/CounterWithCustomHook";
import "./index.css";
// import Contador from "./components/Contador";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
    {/* <Contador /> */}
  </StrictMode>
);
