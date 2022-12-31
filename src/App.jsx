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
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import redirect from "./utils/redirect";
import Menu from "./components/Menu";
import Products from "./components/Products.jsx";
import Modal from "./components/Modal";
import UserContext from "./context/UserContext";
import Personal from "./components/Personal";
import GlobalContext from "./context/GlobalContext";

function App() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  console.log(context.data);

  return (
    <GlobalContext>
      <div className="app_container">
        {context.login ? <Menu /> : null}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user:id" element={<Personal />} />
        </Routes>
      </div>
    </GlobalContext>
  );
}

export default App;
