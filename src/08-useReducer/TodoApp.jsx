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

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item">
              <span>item 1</span>
              <button className="btn btn-primary">Borrar</button>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
