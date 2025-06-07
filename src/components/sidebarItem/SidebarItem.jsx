import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarItem = ({ url, icon, itemName, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
    onClick?.(); // Call onClick only if it's provided (e.g. to close sidebar)
  };

  const isActive = location.pathname === url;

  return (
    <div
      onClick={handleClick}
      className={`w-full flex justify-between items-center my-3 p-2 rounded-md cursor-pointer transition hover:bg-light-hover ${
        isActive ? "bg-light-hover" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="w-5 h-5 mr-3">
          <img src={icon} alt={`${itemName} icon`} />
        </div>
        <span className="text-main-text">{itemName}</span>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className="text-main-color" />
    </div>
  );
};

export default SidebarItem;
