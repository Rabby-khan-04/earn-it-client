import PropTypes from "prop-types";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-4xl font-dm-sans font-semibold text-title">
        {title}
      </h2>
      <p className="text-base text-text font-inter font-normal">{subtitle}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
