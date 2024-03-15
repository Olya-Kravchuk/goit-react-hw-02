import React, { useEffect } from "react";

const Feedback = ({ feedbackCounter, total, positiveFeedback }) => {
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
          <p>
            Total: <b>{total}</b>
          </p>
        </li>
        <li>
          <p>Positive: {positiveFeedback} </p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
