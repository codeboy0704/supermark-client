import axios from "axios";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import redirect from "../utils/redirect";

const useFetchData = (token) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({ user: {} });

  const getInfo = async () => {
    try {
      const req = await axios("/api", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      if (req.status === 201) {
        const res = await req.data;
        const data = res.data.user
        setUserData({ user: data })
        setLogin(true);
      }
    } catch (e) {
      redirect("/", navigate);
    }
  };

  useLayoutEffect(() => {
    getInfo();
  }, []);
  return {
    user: { ...userData, login: login }
  };
};

export default useFetchData;
