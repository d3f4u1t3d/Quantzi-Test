import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Homepage from "../Pages/Homepage/Homepage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default Router;
