import PropTypes from "prop-types";

const HowItWorksStep = ({ title, description, image }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="">
        <img src={image} className="w-8" alt="" />
      </div>
      <div className="max-w-4/6">
        <h3 className="text-2xl font-normal font-dm-sans text-primary">
          {title}
        </h3>
        <p className="text-text font-inter">{description}</p>
      </div>
    </div>
  );
};

HowItWorksStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HowItWorksStep;
