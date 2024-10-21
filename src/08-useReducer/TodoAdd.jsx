import React from "react";
import { useForm } from "../hooks/useForm";

const TodoAdd = () => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });
  return (
    <form>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
