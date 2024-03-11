import PropTypes from "prop-types";

import greenDot from "/src/assets/green-dot.svg";

const MarkedText = ({ numberSize, textSize }) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-[9px]">
      <div
        className={`green-circle flex h-[28.6px] w-[28.6px] animate-pulse items-center justify-center rounded-full bg-no-repeat`}
      >
        <img src={greenDot} alt="green dot" width={17.1} />
      </div>
      <p className={`text-center font-extrabold text-white ${numberSize}`}>
        1000+
      </p>
      <p className={`text-center font-normal text-gray-light ${textSize}`}>
        creators have already started
      </p>
    </div>
  );
};

MarkedText.propTypes = {
  numberSize: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
};

export default MarkedText;
