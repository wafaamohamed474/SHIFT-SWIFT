
import SidebarItem from "../sidebarItem/SidebarItem";
import bookMarkIcon from "../../assets/Bookmark.png"
import penIcon from "../../assets/Edit_Pencil_01.png"
import settingsIcon from "../../assets/Settings.png"
import phoneIcon from "../../assets/Phone.png"
import warningIcon from "../../assets/Info.png" 
import LogoutButton from "../logoutButton/LogoutButton";
 
import ProfileCard from "../profilePictureCard/ProfilePictureCard";
const UserSidbar = ({onItemClick}) => {
 
  return (
    <div className="w-full pr-5">
    <ProfileCard/>
    <div>
      <ul>
          <li><SidebarItem onClick={onItemClick} itemName="My Jobs" icon={bookMarkIcon} url="/home/user/myjobs"/></li>
          <li ><SidebarItem onClick={onItemClick}  itemName="Edit Profile" icon={penIcon} url="/home/user/profile"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="Settings" icon={settingsIcon} url="/home/user/settings"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="Help Center" icon={phoneIcon} url="/home/user/helpcenter"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="About Us" icon={warningIcon} url="/home/user/about"/></li>
          <li><LogoutButton/></li>  
      </ul>
    </div>
  </div>
  )
}

export default UserSidbar
