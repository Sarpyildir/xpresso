import "semantic-ui-css/semantic.min.css";
import React from "react";
import "../styles/doubleButton.css";

function DoubleButton(props) {
  return (
    <div class="ui buttons">
      <button class="ui button">{props.firstText}</button>
      <div class="or"></div>
      <button class="ui positive button">{props.secondText}</button>
    </div>
  );
}

export default DoubleButton;
