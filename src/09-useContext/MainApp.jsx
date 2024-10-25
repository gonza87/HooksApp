import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Link } from "react-router-dom";
export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Link to="/">Inicio</Link>
      <Link to="/login">Login</Link>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
