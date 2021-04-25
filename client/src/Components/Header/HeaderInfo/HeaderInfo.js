import React from "react";
import "./HeaderInfo.css";
import InfoIcon from "@material-ui/icons/Info";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HeaderButton from "../HeaderButton/HeaderButton";
function HeaderInfo(props) {
  const maxCharacters = 250;

  const sliceMovieDescription = (MovieDescription) => {
    return MovieDescription.length < maxCharacters
      ? MovieDescription
      : MovieDescription.search("\\.") < maxCharacters
      ? `${MovieDescription.slice(
          0,
          MovieDescription.slice(0, maxCharacters).lastIndexOf(".") + 1
        )} `
      : `${MovieDescription.slice(
          0,
          MovieDescription.slice(0, maxCharacters).lastIndexOf(" ") + 1
        )}...`;
  };

  return (
    <div className="HeaderInfo">
      <h1>{props.info.title}</h1>
      <p className="overview">
        {"description" in props.info
          ? sliceMovieDescription(props.info.description)
          : sliceMovieDescription(props.info.overview)}
      </p>
      <div className="HeaderButtons">
        <HeaderButton label={"Play"} icon={PlayArrowIcon} />
        <HeaderButton label={"More Info"} icon={InfoIcon} />
      </div>
    </div>
  );
}

export default HeaderInfo;
