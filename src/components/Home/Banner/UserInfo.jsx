import PropTypes from "prop-types";
import { IoStar } from "react-icons/io5";

const UserInfo = ({ ICON, title, subtitle, count, cssClass, color }) => {
  return (
    <div className={`bg-white min-w-[300px] inline-block ${cssClass} p-6`}>
      <div className="flex items-center gap-3">
        <div
          className="size-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <ICON className="text-2xl text-white" />
        </div>
        <div>
          <h3 className="font-dm-sans text-title text-xl font-semibold">
            {title}
          </h3>
          <p className="text-sm font-inter font-medium text-text">{subtitle}</p>
        </div>
        <div className="flex items-center gap-1">
          <IoStar className="text-[#e1c03f] textbase" />
          <p className="text-sm font-inter font-medium text-text">{count}</p>
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  ICON: PropTypes.element,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  count: PropTypes.string,
  cssClass: PropTypes.string,
  color: PropTypes.string,
};

export default UserInfo;
