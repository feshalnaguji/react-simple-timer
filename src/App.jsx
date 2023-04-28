import React from "react";
import Timer from "./components/Timer";

const App = () => {
  const timers = [];
  for (let i = 1; i < 2000; i++) {
    timers.push(<Timer time={i} key={i} />);
  }

  return <React.Fragment>{timers}</React.Fragment>;
};

export default App;
