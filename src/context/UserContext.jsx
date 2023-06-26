/* eslint-disable no-unused-vars */
import { createContext, useLayoutEffect, lazy, Suspense } from "react";
import App from "../App.jsx";
const Menu = lazy(() => import("../components/menu/Menu.jsx"));
import useFetchData from "../hooks/useFetchData.jsx";
import validation from "../validations/signUp.validation.js";
export const UserContext = createContext({
  data: {},
  avatar: {},
});

function UserProvider() {
  const token = document.cookie.replace("token=", "");
  const local = validation.inLocal({ key: "user" });
  const { login, userInfo } = useFetchData(token);
  return (
    <UserContext.Provider value={userInfo}>
      <Suspense fallback={<h2>LOading</h2>}>
      {login && <Menu />}
      </Suspense>
      <App />
    </UserContext.Provider>
  );
}

export default UserProvider;
