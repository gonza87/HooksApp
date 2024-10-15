import React from "react";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "recolectar la piedra del alma",
    done: false,
  },
];

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

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
