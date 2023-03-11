import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import TodoContainer from "../components/TodoContainer";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
