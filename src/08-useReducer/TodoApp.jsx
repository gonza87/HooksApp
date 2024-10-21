import React from "react";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";

const initialState = [
  {
    id: new Date().getTime(),
    description: "recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "recolectar la piedra del tiempo",
    done: false,
  },
];

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        Todo App: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
        </div>
      </div>
    </>
  );
}

export default TodoApp;
