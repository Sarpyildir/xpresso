import "semantic-ui-css/semantic.min.css";
import React from "react";
import "../styles/doubleButton.css";

function DoubleButton(props) {
  return (
    <div class="ui buttons">
      <button class="ui button" onClick={props.firstOnClick}>
        {props.firstText}
      </button>
      <div class="or"></div>
      <button class="ui positive button" onClick={props.secondOnClick}>
        {props.secondText}
      </button>
    </div>
  );
}

export default DoubleButton;
