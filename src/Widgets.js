import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4> {heading} </h4>
        <p> {subtitle} </p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "The top career experts to follow",
        "Top News - 13,871 readers"
      )}
      {newsArticle("From job-hopping to dream job", "Top News - 640 readers")}
      {newsArticle(
        "The Padma winners from corporate world",
        "12h ago - 2,518 readers"
      )}
    </div>
  );
}

export default Widgets;
