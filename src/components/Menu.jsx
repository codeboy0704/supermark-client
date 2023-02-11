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
          transform: menuState ? "translate(0%)" : "translate(-100%)",
          visibility: menuOptions.visibility,
        }}
      >
        <div className="user_info">
          <picture
            onClick={() => {
              setMenuState((sta) => !sta);
            }}
          >
            <img
              src={Manimg}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                redirect(`/user:${userData.data.user._id}`, navigate);
              }}
            />
          </picture>
          <h3>{userData ? userData.data.user.name : "Default One"}</h3>
          <h3>{userData ? userData.data.user._id : "8DDF4545343G"}</h3>
        </div>
        <nav
          className="menu"
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/budget">Budget</Link>
            </li>
            <li
              onClick={() => {
                logOut();
              }}
            >
              <Link>{"Sign out"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
