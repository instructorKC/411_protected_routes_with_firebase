import React from "react";
// Import { auth } instance here
// Import { onAuthStateChanged } function here
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Router from "./Router";

import "./App.css";

function App() {
  // console.log("Current user logged in: ", auth.currentUser)
  
  // Create a useState hook to track Firebase user authentication
  // const [user, setUser] = 
  
  // Create a useState hook to store the data we Read from Firestore
  // const [carsData, setCarsData] =
  
  // Write a useEffect hook for onAuthStateChanged and set the user state.
  
  
  // Using a useEffect hook, create a function that will query Firestore and save the results to state.

  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
