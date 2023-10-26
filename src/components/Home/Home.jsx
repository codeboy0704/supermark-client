import "./home.css";
import React, { useContext, useLayoutEffect } from "react";
import validation from "../../validations/signUp.validation";
import Logo from "../../images/pre-logos/icons8-dollar-coin.svg";
import FirstTime from "./FirstTime.jsx";
import MainLogo from "../MainLogo";
import { UserContext } from "../../context/UserContext";
import Budget from "../budget/Budget";

function Main() {
  const localStorage = window.localStorage;
  const { user, login } = useContext(UserContext)
  return (
    <div className="home_container">
      {login ? (
        <>
          <Budget />
        </>
      ) : (
        <>
          <FirstTime />
        </>

      )}
    </div>
  );
}

export default Main;
