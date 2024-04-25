import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Signin from "../pages/signin";
import AddFilm from "../pages/addfilm";


const router = <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/addfilm" element={<AddFilm/>}/>
</Routes>

export default router;