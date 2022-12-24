/* eslint-disable no-unused-vars */
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";

import Login from "./components/Login.jsx";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import redirect from "./utils/redirect";
import Menu from "./components/Menu";
import Products from "./components/Products.jsx";
import Modal from "./components/Modal";

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);
  const navigate = useNavigate();
  const token = document.cookie.replace("token=", "");

  const verifyAuth = async () => {
    try {
      const req = await axios("/api/home", {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      console.log(req);
      if (req.status == 201) {
        setLogin(true);
      } else {
        redirect("/login", navigate);
      }
      const res = req.data;
      console.log(res);
    } catch (e) {
      console.error(e);
      redirect("/login", navigate);
    }
  };
  useEffect(() => {
    verifyAuth();
  }, []);
  return (
    <div className="app_container">
      {login ? <Menu /> : null}
      <Routes>
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
