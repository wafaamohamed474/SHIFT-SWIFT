
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import bellIcon from "../../assets/Bell.png"
import bookIcon from "../../assets/Bookmark.png"
import SidebarItem from "../sidebarItem/SidebarItem";
import plusIcon from "../../assets/Add_Plus.png"

const CompanySidebar = () => {
  return (
    <div className="w-full pr-5">
      <div className="w-full h-48 rounded-md bg-main-color flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={employer} />
        </div>
        <h4 className="text-bg-color">Karim Ali</h4>
        <p className="text-border-color">Karim.Ali@example.com</p>
      </div>
      <div>
        <ul>
        <li><SidebarItem itemName="Post Job" icon={plusIcon} url="/company/postjob"/></li>
        <li><SidebarItem itemName="Myjobs" icon={bookIcon} url="/company/myjobs"/></li>
        <li><SidebarItem itemName="Notifications" icon={bellIcon} url="/company/notifications"/></li>
        </ul>

      </div>
    </div>
  );
};

export default CompanySidebar;
