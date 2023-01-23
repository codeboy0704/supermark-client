import { useEffect, useState } from "react";

function HandleMenuState() {
  console.log("Handle menu");
  const [menuState, setMenuState] = useState(false);
  const [menuOptions, setMenuOptions] = useState({
    color: "#423e96",
    background: null,
  });
  useEffect(() => {
    if (menuState) {
      setMenuOptions({
        color: "#fff",
        visibility: "visible",
      });
    } else {
      setMenuOptions({
        color: "#423e96",
        visibility: "hidden",
      });
    }
  }, [menuState]);

  return {
    menuOptions,
    setMenuOptions,
    menuState,
    setMenuState,
  };
}

export default HandleMenuState;
