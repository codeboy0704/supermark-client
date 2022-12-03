import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";
import Menu from "./components/Menu";

function App() {
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
