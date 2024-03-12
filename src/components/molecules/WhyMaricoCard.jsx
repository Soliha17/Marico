import PropTypes from "prop-types";

const WhyMaricoCard = ({ title, text, icon }) => {
  return (
    <div className="flex flex-col gap-2" data-aos="fade-up">
      <p className="flex items-center justify-center gap-2 text-center text-2xl font-semibold text-white lg:text-4xl">
        <img src={icon} alt={`${icon} icon`} />
        {title}
      </p>
      <p className="text-center text-xl font-normal text-gray-light">{text}</p>
    </div>
  );
};

WhyMaricoCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default WhyMaricoCard;
