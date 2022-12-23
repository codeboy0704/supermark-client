/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";

import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              validation.inLocal() ? <Main /> : <Navigate to="/signup" />
            }
          />
          <Route path="/signup" element={<Form />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
