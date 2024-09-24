import { useState } from "react";

function SimpleForm() {
  const [formstate, setFormState] = useState({
    username: "strider",
    email: "fernando@google.com",
  });

  const { username, email } = formstate;

  const onInputchange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formstate,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputchange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputchange}
      />
    </div>
  );
}

export default SimpleForm;
