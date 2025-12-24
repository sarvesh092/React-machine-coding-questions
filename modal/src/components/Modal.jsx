import React from "react";
import style from "./modal.module.css";

const Modal = ({ isOpen, isClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={style.container} onClick={isClose}>
      <div className={style.modalStyle} onClick={(e) => e.stopPropagation()}>
        <div className={style.buttonDiv}><button onClick={isClose}>close</button></div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
