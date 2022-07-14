import React, { useState } from "react";
// Import { auth } instance here
// Import { createUserWithEmailAndPassword } function here
import { useNavigate } from "react-router-dom";

import { TextField, Button, Container } from "@mui/material";

// Make sure to pass in props as the parameter to access properties being passed to this component.
const SignUp = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Make function asynchronous using async/await methods
  const signUp = async(e) => {
    e.preventDefault();
    // Use the "createUserWithEmailAndPassword" function here
    // Don't forget to use a try/catch block

    navigate('/')
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={signUp}>
          <TextField
            required
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            value={registerEmail}
            name="Email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            value={registerPassword}
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default SignUp;
