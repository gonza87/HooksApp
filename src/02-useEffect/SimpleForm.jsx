import React from "react";

function SimpleForm() {
  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
      />
      <button className="btn btn-primary">a</button>
    </>
  );
}

export default SimpleForm;
