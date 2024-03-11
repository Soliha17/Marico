import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <p className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      {title}
    </p>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
