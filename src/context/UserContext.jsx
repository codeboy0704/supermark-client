/* eslint-disable no-unused-vars */
import { createContext, useLayoutEffect, lazy, Suspense, useState } from "react";
import App from "../App.jsx";
import Menu from "../components/menu/Menu.jsx"
import useFetchData from "../hooks/useFetchData.jsx";
import validation from "../validations/signUp.validation.js";
export const UserContext = createContext({
  data: {},
  login: false,
});

function UserProvider() {
  const token = document.cookie.replace("token=", "");
  const local = validation.inLocal({ key: "user" });
  const { user } = useFetchData(token);
  let isLogin = user.login
  return (
    <UserContext.Provider value={user}>
      {isLogin && <Menu />}
      <App />
    </UserContext.Provider>
  );
}

export default UserProvider;
