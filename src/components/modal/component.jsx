import { createPortal } from "react-dom";
import { Button } from "../button/component";

export const Modal = ({ onClose, children }) => {
  return createPortal(
    <>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "grey",
          opacity: 0.3,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          zIndex: 2,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button onClick={onClose}>Close</Button>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};
