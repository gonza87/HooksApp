import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HooksApp from "./HooksApp";

// import CounterApp from "./01-usestate/CounterApp";
import CounterWithCustomHook from "./01-usestate/CounterWithCustomHook";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterApp /> */}
    <CounterWithCustomHook/>
  </StrictMode>
);
