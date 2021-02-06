import React from "react";
import "./HeaderInfo.css";
import InfoIcon from "@material-ui/icons/Info";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HeaderButton from "../HeaderButton/HeaderButton";
function HeaderInfo(props) {
  console.log(props.info);
  return (
    <div className="HeaderInfo">
      <h1>{props.info.title}</h1>
      <br />
      <p className="overview">{props.info.description}</p>
      <div className="HeaderButtons">
        <HeaderButton label={"Play"} icon={PlayArrowIcon} />
        <HeaderButton label={"More Info"} icon={InfoIcon} />
      </div>
    </div>
  );
}

export default HeaderInfo;
