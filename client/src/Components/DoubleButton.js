import "semantic-ui-css/semantic.min.css";
import React from "react";
import "../styles/doubleButton.css";

function DoubleButton(props) {
  return (
    <div className="ui buttons">
      <button className="ui button" onClick={props.firstOnClick}>
        {props.firstText}
      </button>
      <div className="or"></div>
      <button className="ui positive button" onClick={props.secondOnClick}>
        {props.secondText}
      </button>
    </div>
  );
}

export default DoubleButton;
