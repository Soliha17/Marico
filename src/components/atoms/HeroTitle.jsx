import PropTypes from "prop-types";

const HeroTitle = ({ text, color }) => {
  return (
    <p
      className={`${color} text-3xl sm:text-5xl lg:text-6xl font-bold text-center xl:text-8xl xl:leading-tight`}
    >
      {text}
    </p>
  );
};

HeroTitle.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default HeroTitle;
