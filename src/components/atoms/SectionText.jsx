import PropTypes from "prop-types";

const SectionText = ({ text }) => {
  return (
    <p className="mx-auto mt-2 w-[95%] text-center text-base font-normal text-gray-light md:text-3xl lg:w-3/4 xl:w-1/2">
      {text}
    </p>
  );
};

SectionText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionText;
