import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import validation from "./validations/signUp.validation";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={validation.inLocal() ? <Main /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
