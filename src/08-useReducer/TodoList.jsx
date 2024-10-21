import React from "react";

function TodoList({ todos = [] }) {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          //todoItem
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="align-self-center">Item 1</span>
            <button className="btn btn-danger">Borrar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
