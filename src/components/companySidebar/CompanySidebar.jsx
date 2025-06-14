import usersIcon from "../../assets/user_group.png"
import SidebarItem from "../sidebarItem/SidebarItem";
import plusIcon from "../../assets/basil_bag-solid .png"
import penIcon from "../../assets/Edit_Pencil_01.png"
import settingsIcon from "../../assets/Settings.png"
import starIcon from "../../assets/Star.png"
import phoneIcon from "../../assets/Phone.png"
import warningIcon from "../../assets/Info.png"
import LogoutButton from "../logoutButton/LogoutButton";
import ProfileCard from "../profilePictureCard/ProfilePictureCard";

const CompanySidebar = ({onItemClick}) => {
  return (
    <div className="w-full pr-5">
       <ProfileCard/>
      <div>
        <ul>
        <li><SidebarItem onClick={onItemClick}  itemName="Post Job" icon={plusIcon} url="/home/company/postjob"/></li>
        <li><SidebarItem onClick={onItemClick}  itemName="Applicants" icon={usersIcon} url="/home/company/applicants"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="My Reviews" icon={starIcon} url="/home/company/reviews"/></li>
        <li ><SidebarItem onClick={onItemClick}  itemName="Edit Profile" icon={penIcon} url="/home/company/profile"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="Settings" icon={settingsIcon} url="/home/company/settings"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="Help Center" icon={phoneIcon} url="/home/company/helpcenter"/></li>
        <li><SidebarItem onClick={onItemClick} itemName="About Us" icon={warningIcon} url="/home/company/about"/></li>
         <li><LogoutButton/></li> 
        </ul>
      </div>
    </div>
  );
};

export default CompanySidebar;
