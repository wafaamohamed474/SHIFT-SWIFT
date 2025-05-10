
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import bellIcon from "../../assets/Bell.png"
import bookIcon from "../../assets/Bookmark.png"
import SidebarItem from "../sidebarItem/SidebarItem";
import plusIcon from "../../assets/Add_Plus.png"
import penIcon from "../../assets/Edit_Pencil_01.png"
import settingsIcon from "../../assets/Settings.png"
import starIcon from "../../assets/Star.png"
import phoneIcon from "../../assets/Phone.png"
import warningIcon from "../../assets/Info.png"

const CompanySidebar = ({onItemClick}) => {
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
        <li><SidebarItem onClick={onItemClick}  itemName="Post Job" icon={plusIcon} url="/home/company/postjob"/></li>
        <li><SidebarItem onClick={onItemClick}  itemName="Myjobs" icon={bookIcon} url="/home/company/myjobs"/></li>
        <li ><SidebarItem onClick={onItemClick}  itemName="Edit Profile" icon={penIcon} url="/home/company/profile"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="Settings" icon={settingsIcon} url="/home/company/settings"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="My Reviews" icon={starIcon} url="/home/company/reviews"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="Help Center" icon={phoneIcon} url="/home/company/helpcenter"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="About Us" icon={warningIcon} url="/home/company/about"/></li>
        
        </ul>
      </div>
    </div>
  );
};

export default CompanySidebar;
