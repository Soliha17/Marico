import PropTypes from "prop-types";

const Paragraph = ({ text }) => {
  return <p className="text-xl text-white md:text-2xl">{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
