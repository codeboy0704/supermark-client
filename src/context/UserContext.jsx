import axios from "axios";
import { createContext, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import Menu from "../components/Menu";
import redirect from "../utils/redirect";
export const UserContext = createContext({
  data: {},
  avatar: {},
});

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({ data: {}, avatar: {}, login: false });
  const [familyInfo, setFamilyInfo] = useState(null);
  const token = document.cookie.replace("token=", "");
  console.log(login);

  const getFamilyInfo = async (userData) => {
    try {
      const req = await axios.get("/api/family", {
        user: userData,
      });
      const res = await req.data;
      if (req.status == 201) {
        setFamilyInfo(res);
      }
      return res;
    } catch (e) {
      console.error(e);
    }
  };

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
        setData({ data: res.data, avatar: {}, login: login });
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

  useEffect(() => {
    console.log("Hola");
  }, [token]);

  return (
    <UserContext.Provider value={data}>
      {login ? <Menu /> : null}
      <App />
    </UserContext.Provider>
  );
}

export default UserProvider;
