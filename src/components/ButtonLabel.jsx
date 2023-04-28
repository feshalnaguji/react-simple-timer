import React from "react";
import "./Timer.css";

const ButtonLabel = (props) => {
  return (
    <React.Fragment>
      <label htmlFor="timer" className="timer-label">
        {props.day} : {props.hour} : {props.minute} : {props.second}
      </label>
      <button type="button" className="timer-button" onClick={props.onClick}>
        Reset Timer
      </button>
    </React.Fragment>
  );
};

export default ButtonLabel;
