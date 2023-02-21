import React from "react";

const Modal = (props) => {
  return (
    <div
      style={{
        border: "1px solid green",
        backgroundColor: "yellow",
        padding: "20px",
        position: "absolute",
        left: "50%",
        top: "20%"
      }}
    >
      <h5>Dialog</h5>
      <button onClick={() => props.setIsOpen(false)}>Close</button>
    </div>
  );
};

export default Modal;
