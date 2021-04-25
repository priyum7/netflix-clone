import React from "react";
import "./HeaderButton.css";
function HeaderButton(props) {
  return (
    <div>
      <button
        style={{
          backgroundColor:
            props.label == "Play" ? "white" : "rgba(169, 169, 169, 0.5)",
          color: props.label == "Play" ? "black" : "white",
        }}
      >
        {<props.icon></props.icon>}
        {props.label}
      </button>
    </div>
  );
}

export default HeaderButton;
