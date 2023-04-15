import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      data-tip={props.data_tip}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Button;
