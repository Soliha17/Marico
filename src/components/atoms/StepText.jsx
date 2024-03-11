import PropTypes from "prop-types";

const StepText = ({ text }) => {
  return (
    <p className="text-blue-light animate-bounce text-center text-xl font-semibold uppercase md:text-2xl">
      {text}
    </p>
  );
};

StepText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StepText;
