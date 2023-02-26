/* eslint-disable no-unused-vars */
import "./menu.css";
import React, {
  useStat,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";
import Manimg from "../../images/avatars/man_1.svg";
import HandleMenuState from "../../hooks/useHandleMenu.jsx";
// import MenuContext from "../../context/MenuContext";
import logOut from "../../utils/logOut";
import logOutIMG from "../../images/logout.svg";
import HomeIMG from "../../images/home.svg";
import Budget from "../../images/icons8-money-box.svg";
import Profile from "../../images/profile.svg";
import ProductIcon from "../../images/icons8-box.svg";

function Menu() {
  const userData = useContext(UserContext);
  const [barTheme, setBarTheme] = useState({ color: "rgb(32 29 84)" });
  const navigate = useNavigate();
  const { menuOptions, menuState, setMenuState } = HandleMenuState();

  useEffect(() => {
    if (menuState) {
      setBarTheme({
        color: "#fff",
      });
    } else {
      setBarTheme({
        color: "rgb(32 29 84)",
      });
    }
  }, [menuState]);

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
          className="menu"
          onClick={() => {
            setMenuState((sta) => !sta);
          }}
        >
          <ul>
            <li className="user">
              <picture className="user_icon">
                <Link to={`/user:${userData.data.user._id}`}>
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
