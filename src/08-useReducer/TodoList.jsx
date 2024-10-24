import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos = [] }) {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
