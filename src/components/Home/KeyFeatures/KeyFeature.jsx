import PropTypes from "prop-types";

const KeyFeature = ({ image, title, subtitle }) => {
  return (
    <div className="space-y-3 border border-text/20 p-4 rounded-2xl transition-all duration-200 transform translate-y-0 hover:-translate-y-4 hover:shadow-xl">
      <div className="">
        <img src={image} className="inline-block w-10" alt="" />
      </div>
      <div className="space-y-3">
        <h3 className="text-primary font-dm-sans font-semibold text-xl">
          {title}
        </h3>
        <p className="font-inter font-normal text-text text-base">{subtitle}</p>
      </div>
    </div>
  );
};

KeyFeature.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default KeyFeature;
