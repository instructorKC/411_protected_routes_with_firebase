import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'
import SignUp from './components/SignUp'

// Write ProtectedRoute here 
// It should navigate the user back to the login page if they are not logged in.


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/car/:id" element={<Car/>} />
        </Routes>
    );
};

export default Router;