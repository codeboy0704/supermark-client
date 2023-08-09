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
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";
import logOut from "../../utils/logOut";
import logOutIMG from "../../images/menu/logout.png";
import HomeIMG from "../../images/menu/home.png";
import UserIMG from "../../images/menu/user.png";
import CloseIMG from "../../images/menu/close.png"
function Menu() {
  const data = useContext(UserContext);
  const [menuState, setMenuState] = useState(false);
  const RenderClose = () => {
    return (
      <button style={{
        background: "transparent",
        border: "none",
        outline: "none",
        marginTop: "0.4rem",
      }} onClick={() => {
        setMenuState((sta) => !sta);
      }}>
        <img src={CloseIMG} alt="close menu" />
      </button>
    )
  }

  const RenderOpen = () => {
    return (
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
    )

  }
  return (
    <>
      <div className={menuState ? "menu_container expand" : "menu_container"}>
        <div className="logo_container">
          {!menuState ? <RenderOpen /> : <RenderClose />}
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
