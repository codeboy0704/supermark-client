import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal_root");
function Modal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.className = "overlay";
  }
  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  });
  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
