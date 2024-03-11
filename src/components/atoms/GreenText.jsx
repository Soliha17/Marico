import PropTypes from "prop-types";

const GreenText = ({ text }) => {
  return (
    <p className="mb-6 text-xl font-normal text-green md:text-3xl">{text}</p>
  );
};

GreenText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GreenText;
