import React, { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const feedbackValues = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbackCounter, setFeedbackCounter] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedbackCounter");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? feedbackValues;
    return parsedFeedback;
  });
  const updateFeedback = (feedbackType) => {
    console.log("feedbackType", feedbackType);
    setFeedbackCounter({
      ...feedbackCounter,
      [feedbackType]: feedbackCounter[feedbackType] + 1,
    });
  };
  const totalFeedback = Object.values(feedbackCounter).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const positiveFeedback =
    totalFeedback !== 0
      ? Math.round(
          ((feedbackCounter.good + feedbackCounter.neutral) / totalFeedback) *
            100
        )
      : 0;

  const resetFeedback = () => {
    setFeedbackCounter(feedbackValues);
  };

  useEffect(() => {
    localStorage.setItem("feedbackCounter", JSON.stringify(feedbackCounter));
  }, [feedbackCounter]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackCounter={feedbackCounter}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
