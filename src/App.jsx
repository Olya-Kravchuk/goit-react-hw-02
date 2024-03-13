import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackCounter, setFeedbackCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    console.log("feedbackType", feedbackType);
    setFeedbackCounter({
      ...feedbackCounter,
      [feedbackType]: feedbackCounter[feedbackType] + 1,
    });
  };
  const totalFeedback =
    feedbackCounter.good + feedbackCounter.neutral + feedbackCounter.bad;

  const positiveFeedback = Math.round(
    ((feedbackCounter.good + feedbackCounter.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedbackCounter({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <div>
        <Description />
        <Options updateFeedback={updateFeedback} />
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <>
            <Feedback
              feedbackCounter={feedbackCounter}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
              resetFeedback={resetFeedback}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
