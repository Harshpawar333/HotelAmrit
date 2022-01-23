import React from "react"
function Button({text, dynamicClass}) {
  return <button className={dynamicClass}>{text}</button>
}

export default Button