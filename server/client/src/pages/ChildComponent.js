import React from "react";
import "./index.scss";
function ChildComponent({ message, dynamicClass }) {
  /* <Button text={} color="" bgColor="" /> */
  return <div className={dynamicClass}>{message}</div>;
}

export default ChildComponent;
