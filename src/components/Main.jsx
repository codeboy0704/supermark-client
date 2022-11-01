import React from "react";
import validation from "../validations/signUp.validation";
import Form from "./Form";
function Main() {
  return (
    <div className="main_container">
      {validation.inLocal() ? <h1>Hola</h1> : <Form />}
    </div>
  );
}

export default Main;
