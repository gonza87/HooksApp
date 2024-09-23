import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import CounterApp from "./01-usestate/CounterApp";
// import CounterWithCustomHook from "./01-usestate/CounterWithCustomHook";

import SimpleForm from "./02-useEffect/SimpleForm";
// import Contador from "./components/Contador";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleForm />
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <Contador /> */}
  </StrictMode>
);
