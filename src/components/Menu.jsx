import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [menuState, setMenuState] = useState(true);

  return (
    <>
      <div className="logo_container">
        <i
          className="bx bx-menu-alt-left bx-lg logo"
          style={{
            color: menuState ? "#413d96" : "#fff",
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
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link>Balance</Link>
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
