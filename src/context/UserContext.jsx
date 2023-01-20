import axios from "axios";
import { createContext, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import Menu from "../components/Menu";
import redirect from "../utils/redirect";
import MenuContext from "./MenuContext";
export const UserContext = createContext({
  data: {},
  avatar: {},
});

function UserProvider() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [menuOptions, setmenuOptions] = useState({
    color: "#fff",
    background: null,
  });
  const [userInfo, setUserInfo] = useState({
    data: { user: {}, family: {} },
    avatar: {},
    login: false,
  });
  const token = document.cookie.replace("token=", "");

  const verifyAuthAndGetInfo = async () => {
    try {
      const req = await axios("/api", {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      if (req.status === 201) {
        const res = await req.data;
        setLogin(true);
        setUserInfo({ data: res.data, avatar: {} });
        return true;
      } else {
        redirect("/login", navigate);
      }
    } catch (e) {
      redirect("/login", navigate);
      console.error(e);
    }
  };

  useLayoutEffect(() => {
    verifyAuthAndGetInfo();
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
      <MenuContext.Provider value={menuOptions}>
        {login ? <Menu /> : null}
        {userInfo.data ? <App /> : null}
      </MenuContext.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;
