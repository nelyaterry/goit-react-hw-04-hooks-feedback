import PropTypes from "prop-types";
import { Title } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
