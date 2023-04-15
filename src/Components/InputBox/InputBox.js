import React from "react";

import "./InputBox.css";

function InputBox(props) {
  return (
    <div className="InputBox">
      <input
        type={props.type}
        className={props.className}
        id={props.htmlFor}
        onChange={props.onChange}
        name={props.name}
        // value={props.value}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}

export default InputBox;
