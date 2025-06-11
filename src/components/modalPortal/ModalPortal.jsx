// ModalPortal.jsx
import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  if (typeof window === "undefined") return null;

  const modalRoot = document.getElementById("modal-root");
  return modalRoot ? createPortal(children, modalRoot) : null;
}
