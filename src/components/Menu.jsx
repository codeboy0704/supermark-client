/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import redirect from "../utils/redirect";
import { UserContext } from "../context/UserContext.jsx";
import Manimg from "../images/avatars/man_1.svg";
import { useEffect } from "react";
import HandleMenuState from "../hooks/useHandleMenu.jsx";
import MenuContext from "../context/MenuContext";
import logOut from "../utils/logOut";
import logOutIMG from "../images/logout.svg";
import HomeIMG from "../images/home.svg";
import Budget from "../images/icons8-money-box.svg";
import Profile from "../images/profile.svg";
import ProductIcon from "../images/icons8-box.svg";

function Menu() {
  const userData = useContext(UserContext);
  const navigate = useNavigate();
  const { menuOptions, menuState, setMenuState } = HandleMenuState();

  return (
    <>
      <div className="logo_container" style={{}}>
        <i
          className="bx bx-menu-alt-left bx-lg logo"
          style={{
            color: menuOptions.color,
            transition: "all 1.5s",
          }}
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        ></i>
      </div>
      <div
        className="menu_cont"
        style={{
          transform: menuState ? "translate(0)" : "translate(-100%)",
          visibility: menuState ? "visible" : "hidden",
        }}
      >
        <nav
          className="menu"
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        >
          <ul>
            <li>
              <picture className="user_icon">
                <Link to={`/user:${userData.data.user._id}`}>
                  <img src={Manimg} alt="" style={{ cursor: "pointer" }} />
                </Link>
              </picture>
            </li>
            <li>
              <picture>
                <Link to="/home">
                  <img src={HomeIMG} alt="" />
                </Link>
              </picture>
            </li>
            <li>
              <picture>
                <Link to="/products">
                  <img src={ProductIcon} alt="" />
                </Link>
              </picture>
            </li>
            <li>
              <picture>
                <Link to="/budget">
                  <img src={Budget} alt="" />
                </Link>
              </picture>
            </li>

            <li
              onClick={() => {
                logOut();
              }}
            >
              <picture>
                <Link to="/">
                  <img src={logOutIMG} alt="" />
                </Link>
              </picture>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
