import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const feedbackType = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const updateFeedback = (feedbackType) => {
    console.log("feedbackType", feedbackType);
  };
  const [counter, setCounter] = useState(0);
  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div>
        <Description />
        <Options updateFeedback={updateFeedback} />
        <Feedback feedbackCounter={feedbackType} />
      </div>
    </>
  );
}

export default App;
