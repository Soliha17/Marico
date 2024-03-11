import PropTypes from "prop-types";

const OutlineBtn = ({ className, text }) => {
  return (
    <button
      className={`${className} box-content cursor-pointer border border-gray-light bg-transparent text-gray-light transition-colors hover:bg-gray-dark`}
    >
      {text}
    </button>
  );
};

OutlineBtn.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default OutlineBtn;
