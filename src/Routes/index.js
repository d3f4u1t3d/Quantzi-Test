import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Homepage from "../Pages/Homepage/Homepage";
import MoviePage from "../Pages/MoviePage/MoviePage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default Router;
