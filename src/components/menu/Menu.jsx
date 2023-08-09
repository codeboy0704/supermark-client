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
import logOutIMG from "../../images/menu/logout.png";
import HomeIMG from "../../images/menu/home.png";
import UserIMG from "../../images/menu/user.png";

function Menu() {
  const data = useContext(UserContext);
  const [barTheme, setBarTheme] = useState({ color: "rgb(32 29 84)" });
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      <div className={menuState ? "menu_container expand" : "menu_container"}>
        <div className="logo_container">
          <i
            className="bx bx-menu-alt-left bx-md logo"
            style={{
              color: "#fff",
              transition: "all 1.8s",
            }}
            onClick={() => {
              setMenuState((sta) => !sta);
            }}
          ></i>
        </div>
        <nav
          className={menuState ? "menu isvisible" : "menu"}
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        >
          <ul>
            <li className="user">
              <picture className="user_icon">
                <Link to={`/user:${data.user._id}`}>
                  <img src={UserIMG} alt="" style={{ cursor: "pointer" }} />
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
