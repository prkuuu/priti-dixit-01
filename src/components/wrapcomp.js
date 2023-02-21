import React from "react";

const wrapComp = (WrapperCom) => {
  const newComp = (props) => {
    return (
      <div
        style={{
          padding: "20px",
          color: "black",
          background: "orange",
          marginTop: "20px"
        }}
      >
        <WrapperCom name="Priti" {...props} />
      </div>
    );
  };

  return newComp;
};

export default wrapComp;
