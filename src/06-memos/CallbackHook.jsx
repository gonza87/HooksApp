import React from "react";
import { useState } from "react";

export default function CallbackHook() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <h1>usecallback Hook: {counter}</h1>
    </>
  );
}
