import React from "react";

const Feedback = (feedbackCounter) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {feedbackCounter.good}</p>
        </li>
        <li>
          <p>Bad: {feedbackCounter.bad}</p>
        </li>
        <li>
          <p>Neutral: {feedbackCounter.neutral}</p>
        </li>
        <li>
          <p>Total: </p>
        </li>
        <li>
          <p>Positive: </p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
