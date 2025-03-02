import PropTypes from "prop-types";

const BaseIconStats = ({ ICON, title, subtitle, color }) => {
  return (
    <div className="bg-white min-w-[290px] p-6 inline-block rounded-3xl">
      <div className="flex items-center gap-5">
        <div
          className="size-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <ICON className="text-2xl text-primary" />
        </div>
        <div>
          <h3 className="font-dm-sans text-title text-xl font-semibold">
            {title}
          </h3>
          <p className="text-sm font-inter font-medium text-text">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

BaseIconStats.propTypes = {
  ICON: PropTypes.element,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

export default BaseIconStats;
