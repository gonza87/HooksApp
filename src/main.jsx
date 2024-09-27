import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import CounterApp from "./01-usestate/CounterApp";
// import CounterWithCustomHook from "./01-usestate/CounterWithCustomHook";

// import SimpleForm from "./02-useEffect/SimpleForm";
// import Contador from "./components/Contador";

// import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";

// import FocusScreen from "./04-useRef/FocusScreen";

// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";

// import { MemoHook } from "./06-memos/MemoHook";

import CallbackHook from "./06-memos/CallbackHook";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CallbackHook />
    {/* <MemoHook /> */}
    {/* <Memorize /> */}
    {/* <Layout /> */}
    {/* <FocusScreen /> */}
    {/* <MultipleCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <Contador /> */}
    {/* <FormWithCustomHook /> */}
  </StrictMode>
);
