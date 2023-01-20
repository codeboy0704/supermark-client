import { createContext } from "react";
const MenuContext = createContext({
  color: "#fff",
  status: false,
  background: null,
});

export default MenuContext;
