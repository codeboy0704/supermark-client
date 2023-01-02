/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import redirect from "../utils/redirect";
import UserContext from "../context/UserContext";
import Manimg from "../images/avatars/man_1.svg";
import { useEffect } from "react";

function Menu({ userInfo }) {
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(true);
  return (
    <>
      <div className="logo_container">
        <i
          className="bx bx-menu-alt-left bx-lg logo"
          style={{
            color: menuState ? "#fff" : "#fff",
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
          transform: menuState ? "translate(-100%)" : "translate(0%)",
        }}
      >
        <div className="user_info">
          <picture>
            <img
              src={Manimg}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                redirect(`/user:${userInfo.data._id}`, navigate);
              }}
            />
          </picture>
          <h3>{userInfo ? userInfo.data.name : "Default One"}</h3>
          <h3>{userInfo ? userInfo.data._id : "8DDF4545343G"}</h3>
        </div>
        <nav className="menu">
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
            <li>
              <Link>{"Sign out"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
