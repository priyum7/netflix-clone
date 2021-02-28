import React from "react";
import "./HeaderInfo.css";
import InfoIcon from "@material-ui/icons/Info";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HeaderButton from "../HeaderButton/HeaderButton";
function HeaderInfo(props) {
  const maxCharacters = 250;
  return (
    <div className="HeaderInfo">
      <h1>{props.info.title}</h1>
      <p className="overview">
        {props.info.description.length < maxCharacters
          ? props.info.description
          : props.info.description.search("\\.") > 0
          ? `${props.info.description.slice(
              0,
              props.info.description.slice(0, maxCharacters).lastIndexOf(".") +
                1
            )} `
          : `${props.info.description.slice(0, maxCharacters)} ...`}
      </p>
      <div className="HeaderButtons">
        <HeaderButton label={"Play"} icon={PlayArrowIcon} />
        <HeaderButton label={"More Info"} icon={InfoIcon} />
      </div>
    </div>
  );
}

export default HeaderInfo;
