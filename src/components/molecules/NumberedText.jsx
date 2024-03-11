import PropTypes from "prop-types";
import Paragraph from "../atoms/Paragraph";

const NumberedText = ({ text, number }) => {
  return (
    <div className="mb-4 flex items-start gap-3">
      <p className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-dark text-lg font-medium text-white">
        {number}
      </p>
      <Paragraph text={text} />
    </div>
  );
};

NumberedText.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default NumberedText;
