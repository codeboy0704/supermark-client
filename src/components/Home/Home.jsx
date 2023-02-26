import "./home.css";
import React from "react";
import validation from "../../validations/signUp.validation";
import Logo from "../../images/pre-logos/icons8-dollar-coin.svg";
import FirstTime from "./FirstTime";
function Main() {
  return (
    <div className="home_container">
      <div className="home_logo_container">
        <span>
          <img src={Logo} alt="logo" className="main_logo" />
        </span>
        <h1>
          <span>W</span>CHEAPER
        </h1>
      </div>

      <FirstTime />
    </div>
  );
}

export default Main;
