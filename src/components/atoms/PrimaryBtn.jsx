import PropTypes from "prop-types";

const PrimaryBtn = ({ className, text }) => {
  return (
    <button
      className={`${className} cursor-pointer  bg-blue-midDark text-white transition-colors hover:bg-blue `}
    >
      {text}
    </button>
  );
};

PrimaryBtn.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PrimaryBtn;
