import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <input
        type={"text"}
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
        />
      <br></br>
      <input
        type={"text"}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br></br>
      <input
        type={"text"}
        placeholder="Age"
        onChange={(event) => setAge(event.target.value)}
      />
      <br></br>
      <br></br>
      <button
        onClick={() => {
          dispatch(login({ name: name, email: email, age: age }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;