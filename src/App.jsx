/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";
import Login from "./components/Login.jsx";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import redirect from "./utils/redirect";
import Menu from "./components/Menu";
import Products from "./components/Products.jsx";
import Modal from "./components/Modal";
import { UserContext } from "./context/UserContext";
import Personal from "./components/Personal";
function App() {
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  console.log(userData);
  const [menuOptions, setmenuOptions] = useState({
    color: "#fff",
    background: null,
  });

  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/user:id"
          element={userData.data ? <Personal data={userData.data} /> : null}
        />
      </Routes>
    </div>
  );
}

export default App;
