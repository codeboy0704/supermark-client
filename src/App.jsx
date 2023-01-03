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
import UserProvider, { UserContext } from "./context/UserContext";
import Personal from "./components/Personal";

function App() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const context = useContext(UserContext);
  // const getFamilyDetails = async () => {
  //   try {
  //     const req = await axios.post(`/api/family`, {
  //       user: context.name,
  //       id: context.family,
  //     });
  //     const res = res.data;
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  useEffect(() => {
    if (document.cookie.length) {
      console.log("Ahi ta");
      setLogin(true);
    }
    // getFamilyDetails();
  }, []);

  return (
    <div className="app_container">
      {/* {context ? !context.login ? <Menu /> : null : null} */}
      {context ? login ? <Menu userInfo={context} /> : null : null}
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user:id" element={<Personal data={context} />} />
      </Routes>
    </div>
  );
}

export default App;
