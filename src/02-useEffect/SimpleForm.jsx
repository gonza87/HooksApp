import { useState } from "react";

function SimpleForm() {
  const [formstate, setFormState] = useState({
    username: "strider",
    email: "fernando@google.com",
  });

  return (
    <div className="container">
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
      />
    </div>
  );
}

export default SimpleForm;
