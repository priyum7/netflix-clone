import React from "react";
import "./HeaderInfo.css";
function HeaderInfo(props) {
  console.log(props.info);
  return (
    <div className="HeaderInfo">
      <h1>{props.info.title}</h1>
      <br />
      <p className="overview">{props.info.description}</p>
    </div>
  );
}

export default HeaderInfo;
