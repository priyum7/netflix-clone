import React from "react";
import "./HeaderInfo.css";
function HeaderInfo(props) {
  console.log(props.info);
  return (
    <div className="HeaderInfo">
      {/* <h1>{props.info.original_title || props.info.original_name}</h1>
      <p>{props.info}</p> */}
    </div>
  );
}

export default HeaderInfo;
