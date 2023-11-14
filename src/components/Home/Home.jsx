import "./home.css";
import React, { useContext, useLayoutEffect } from "react";
import validation from "../../validations/signUp.validation";
import Logo from "../../images/pre-logos/icons8-dollar-coin.svg";
import FirstTime from "./FirstTime.jsx";
import MainLogo from "../MainLogo";
import Budget from "../budget/Budget";
import Cookies from "js-cookie";

function Main() {
  const token = Cookies.get('token');
  return (
    <div className="home_container">
      {token ? (
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
