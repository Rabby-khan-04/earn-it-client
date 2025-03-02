import PropTypes from "prop-types";

const BannerText = ({ subtitle, title, text, badge }) => {
  return (
    <div>
      <p
        style={{ backgroundColor: `${badge}` }}
        className={`text-sm inline-block py-[10px] px-4 rounded-md font-semibold text-title uppercase mb-5`}
      >
        {subtitle}
      </p>
      <h2 className="text-5xl text-primary font-dm-sans font-bold leading-snug mb-3">
        {title}
      </h2>
      <p className="font-inter text-base text-text">{text}</p>
    </div>
  );
};

BannerText.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  badge: PropTypes.string,
};

export default BannerText;
