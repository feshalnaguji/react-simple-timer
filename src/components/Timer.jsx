import React, { useState, useEffect } from "react";
import ButtonLabel from "./ButtonLabel";
import "./Timer.css";

const Timer = (props) => {
  const [counter, setCounter] = useState(props.time * 60);
  const [isRunning, setIsRunning] = useState(true);

  const { time } = props;

  useEffect(() => {
    if (counter === 0) {
      console.log("reached 0");
      setIsRunning(false);
    }

    const timer = setTimeout(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter, time]);

  const resetTimerHandler = () => {
    setCounter(props.time * 60);
  };

  let day = String(Math.floor((counter / (60 * 60 * 24)) % 24)).padStart(
    2,
    "0"
  );
  let hour = String(Math.floor(((counter / (60 * 60)) % 60) % 24)).padStart(
    2,
    "0"
  );
  let minute = String(Math.floor((counter / 60) % 60)).padStart(2, "0");
  let second = String(counter % 60).padStart(2, "0");

  return (
    <div className="timer">
      {isRunning && (
        <ButtonLabel
          day={day}
          hour={hour}
          minute={minute}
          second={second}
          onClick={resetTimerHandler}
        />
      )}
    </div>
  );
};

export default Timer;
