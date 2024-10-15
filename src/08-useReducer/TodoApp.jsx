import React from "react";
import { useReducer } from "react";

function TodoApp() {
  const [state, dispatch] = useReducer(first, second, third);

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item3</li>
      </ul>
    </>
  );
}

export default TodoApp;
