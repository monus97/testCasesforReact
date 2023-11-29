import React, { useState } from "react";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [form, setForm] = useState(initialState);

  const handleLogin = (e) => {
    e.preventDefault();

    // if (form.email === "user" && form.password === "password") {
      alert("Welcome");
    // } else {
    //   alert("Invalid username or password");
    // }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const { email, password } = form;

  const resetInput = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            name="email"
            type="text"
            value={email}
            placeholder="enter your email"
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            name="password"
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        <button type="submit" data-testid="submit">Login</button>
      </form>
        <button onClick={resetInput} data-testid="reset">
          reset
        </button>
    </div>
  );
};

export default Login;
