import PropTypes from "prop-types";

const TopIconStats = ({ ICON, count, title, color }) => {
  return (
    <div className="min-w-[210px] inline-block p-6 bg-white rounded-xl relative">
      <div
        style={{ backgroundColor: `${color}` }}
        className="size-10 flex items-center justify-center rounded-full absolute -top-5 -left-5"
      >
        <ICON className="text-2xl text-white" />
      </div>
      <p className="font-dm-sans font-bold text-title text-lg">{count}</p>
      <h4 className="font-inter font-normal text-text text-sm">{title}</h4>
    </div>
  );
};

TopIconStats.propTypes = {
  ICON: PropTypes.element,
  count: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default TopIconStats;
