import axios from "axios";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import redirect from "../utils/redirect";

const useFetchData = (token) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    data: { user: {}, family: {} },
    login: false,
  });

  const getInfo = async () => {
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
      } else {
        redirect("/login", navigate);
      }
    } catch (e) {
      redirect("/login", navigate);
    }
  };

  useLayoutEffect(() => {
    getInfo();
  }, []);

  return {
    userInfo,
    login,
  };
};

export default useFetchData;
