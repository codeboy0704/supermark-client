/* eslint-disable no-unused-vars */

import React, {
  useStat,
  useContext,
  useEffect,
  useState,
  createContext,
  lazy,
  Suspense
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";
import Manimg from "../../images/avatars/man_1.svg";
import HandleMenuState from "../../hooks/useHandleMenu.jsx";
// import MenuContext from "../../context/MenuContext"
import logOut from "../../utils/logOut";
import logOutIMG from "../../images/logout.svg";
import HomeIMG from "../../images/home.svg";
import Budget from "../../images/icons8-money-box.svg";

function Menu() {
  const data = useContext(UserContext);
  console.log(data)
  const [barTheme, setBarTheme] = useState({ color: "rgb(32 29 84)" });
  const navigate = useNavigate();
  const { menuOptions, menuState, setMenuState } = HandleMenuState();

  return (
    <>
      <div className="logo_container" style={{}}>
        <i
          className="bx bx-menu-alt-left bx-lg logo"
          style={{
            color: barTheme.color,
            transition: "all 1.5s",
          }}
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        ></i>
      </div>
      <div className={menuState ? "menu_cont expanded" : "menu_cont"}>
        <nav
          className={menuState ? "menu expanded" : "menu"}
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        >
          <ul>
            <li className="user">
              <picture className="user_icon">
                <Link to={`/user:${data.user._id}`}>
                  <img src={Manimg} alt="" style={{ cursor: "pointer" }} />
                </Link>
              </picture>
            </li>
            <li>
              <picture>
                <Link to="/">
                  <img src={HomeIMG} alt="" />
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
