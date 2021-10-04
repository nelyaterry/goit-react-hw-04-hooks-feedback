import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <Button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
