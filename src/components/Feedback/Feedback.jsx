import React, { useState } from "react";
import Section from "../Section/Section";
import Statistcs from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

import { Box } from "./Feedback.styled";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const onLeaveFeedback = (option) => {
    if (option === "good") {
      setGood((prevState) => prevState + 1);
    }

    if (option === "neutral") {
      setNeutral((prevState) => prevState + 1);
    }

    if (option === "neutral") {
      setBad((prevState) => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return total ? Math.round((good / total) * 100) : "0";
  };

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistcs
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="No feedback given" />
      )}
    </Box>
  );
};

export default Feedback;
