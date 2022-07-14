import React from "react";
// Import { auth } instance here
// Import { signOut } function here
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Make sure to pass in props as the parameter to access properties being passed to this component.
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          FakeCars.com
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li
            className="nav-list-item"
            // Make the anonymous function asynchronous using async/await methods
            onClick={() => {
              // Use the "signOut" function here
              
              navigate("/login");
            }}
          >
            Logout
          </li>
          <li className="nav-list-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
