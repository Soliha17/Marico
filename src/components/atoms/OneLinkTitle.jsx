import PropTypes from "prop-types";

const OneLinkTitle = ({ title, whiteTitle }) => {
  return (
    <p className="whitespace-pre-line text-3xl font-semibold leading-relaxed text-gray md:text-7xl">
      {title} <br /> <span className="text-white">{whiteTitle}</span>
    </p>
  );
};

OneLinkTitle.propTypes = {
  title: PropTypes.string.isRequired,
  whiteTitle: PropTypes.string.isRequired,
};

export default OneLinkTitle;
