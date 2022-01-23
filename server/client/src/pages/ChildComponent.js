import React from 'react'
import "./index.scss";
function ChildComponent({message, dynamicClass}) {
  return <div className={dynamicClass}>{message}</div>
}

export default ChildComponent

{/* <Button text={} color="" bgColor="" /> */}


