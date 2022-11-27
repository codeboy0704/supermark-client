import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [signState, setSignState] = useState(false);
  const [menuState, setMenuState] = useState(true);

  return (
    <>
      <div className="logo_container">
        <i
          class="bx bx-menu-alt-left bx-lg logo"
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
              <Link>Home</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Balance</Link>
            </li>
            <li>
              <Link>{signState ? "Sign out" : "Sign In"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
