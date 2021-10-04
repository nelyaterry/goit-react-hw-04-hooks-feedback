import PropTypes from "prop-types";

import { StatistcsList, StatistItem } from "./Statistics.styled";

const Statistcs = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatistcsList>
      <StatistItem>Good: {good}</StatistItem>
      <StatistItem>Neutral: {neutral}</StatistItem>
      <StatistItem>Bad: {bad}</StatistItem>
      <StatistItem>Total: {total}</StatistItem>
      <StatistItem>Positive feedback: {positiveFeedback}%</StatistItem>
    </StatistcsList>
  );
};

export default Statistcs;

Statistcs.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
