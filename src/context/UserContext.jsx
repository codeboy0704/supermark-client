import axios from "axios";
import { createContext, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import redirect from "../utils/redirect";
export const UserContext = createContext({
  data: null,
  avatar: null,
});

function UserProvider({ children }) {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const token = document.cookie.replace("token=", "");
  const verifyAuth = async () => {
    try {
      const req = await axios("/api", {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      if (req.status == 201) {
        const res = await req.data;
        setData({ data: res.data, avatar: {} });
        return data;
      } else {
        redirect("/login", navigate);
      }
    } catch (e) {
      console.error(e);
      redirect("/login", navigate);
    }
  };
  useLayoutEffect(() => {
    verifyAuth();
  }, []);
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserProvider;
