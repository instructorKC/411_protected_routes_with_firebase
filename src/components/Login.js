import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const auth = getAuth();

  const login = (e) => {
    e.preventDefault();
    // use the FireBase Documentation to implement login function
    // it is very similar to the signUp code.
    // https://firebase.google.com/docs/auth/web/password-auth
    // find the signInWithEmailAndPassword function
    // the documentation uses .then() promise chaining and we have been using async/await either one is valid and will work
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

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
