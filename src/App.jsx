import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";
import axios from "axios";
import { useEffect } from "react";
import Menu from "./components/Menu";
const fetchData = async () => {
  try {
    const user = { username: "Ian Flores", password: "Draigon2004" };
    const req = await axios.post("http://localhost:8000/signup", user);
    const res = await req.data;
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};
function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app_container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              validation.inLocal() ? <Main /> : <Navigate to="/signup" />
            }
          />
          <Route path="/signup" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
