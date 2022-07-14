import React, { useState } from "react";
// Import { auth } instance here
// Import { signInWithEmailAndPassword } function here
import { useNavigate } from "react-router-dom";

import { TextField, Button, Container } from "@mui/material";

// Make sure to pass in props as the parameter to access properties being passed to this component.
const Login = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Make function asynchronous using async/await methods
  const login = (e) => {
    e.preventDefault();
    // Use the "signInWithEmailAndPassword" function here
    // Don't forget to use a try/catch block

    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            value={loginEmail}
            name="Email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            value={loginPassword}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
