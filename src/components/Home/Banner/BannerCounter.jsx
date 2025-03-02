import PropTypes from "prop-types";

const BannerCounter = ({ count, title, mode = "dark" }) => {
  return (
    <div className="text-center">
      <p
        className={`text-4xl font-dm-sans font-extrabold ${
          mode === "dark" ? "text-primary" : "text-white"
        }`}
      >
        {count}
      </p>
      <h3
        className={`text-base font-inter font-semibold ${
          mode === "dark" ? "text-title" : "text-white"
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

BannerCounter.propTypes = {
  count: PropTypes.string,
  title: PropTypes.string,
  mode: PropTypes.string,
};

export default BannerCounter;
