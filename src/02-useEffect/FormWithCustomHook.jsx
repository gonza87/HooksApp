import { useState } from "react";

function FormWithCustomHook() {
  const [formstate, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formstate;

  const onInputchange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formstate,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h1>Formulario con custom hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputchange}
      />
    </div>
  );
}

export default FormWithCustomHook;
