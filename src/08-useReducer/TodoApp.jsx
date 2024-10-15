import React from "react";
import { useReducer } from "react";

const initialState = [
    {
        id: new Date().getTime(),
        description: "recolectar la piedra del alma",
        done: false,
    }
]

function TodoApp() {
  const [state, dispatch] = useReducer(reducer??, initialState);

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
