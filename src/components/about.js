import React from "react";
import wrapComp from "./wrapcomp";

const About = (props) => {
  return (
    <div>
      <h5>About {props.name}</h5>
    </div>
  );
};

export default wrapComp(About);
