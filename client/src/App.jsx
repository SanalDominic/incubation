import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Login from "./Login";
import { Register } from "./userpages/Register";
import { Home } from "./userpages/Home";
import { Adminhome } from "./adminpages/Adminhome";
import { Recordtrack } from "./adminpages/Recordtrack";
import { Booking } from "./adminpages/Booking";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="admin" element={<Adminhome />} />
        <Route path="record" element={<Recordtrack />} />
        <Route path="booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
