import "./home.css";
import React, { useLayoutEffect } from "react";
import validation from "../../validations/signUp.validation";
import Logo from "../../images/pre-logos/icons8-dollar-coin.svg";
import FirstTime from "./FirstTime.jsx";
import MainLogo from "../MainLogo";

function Main() {
  const localStorage = window.localStorage;
  return (
    <div className="home_container">
      <MainLogo />
      <FirstTime />
    </div>
  );
}

export default Main;
