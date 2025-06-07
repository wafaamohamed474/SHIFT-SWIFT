import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import SidebarItem from "../sidebarItem/SidebarItem";
import bookMarkIcon from "../../assets/Bookmark.png"
import penIcon from "../../assets/Edit_Pencil_01.png"
import settingsIcon from "../../assets/Settings.png"
import starIcon from "../../assets/Star.png"
import phoneIcon from "../../assets/Phone.png"
import warningIcon from "../../assets/Info.png"
import { getUserData } from "../../services/authService";
import LogoutButton from "../logoutButton/LogoutButton";
const UserSidbar = ({onItemClick}) => {
  const {userName , email}= getUserData()
  return (
    <div className="w-full pr-5">
    <div className="w-full h-48 rounded-md bg-main-color flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img src={employer} />
      </div>
      <h4 className="text-bg-color">{userName}</h4>
      <p className="text-border-color">{email}</p>
    </div>
    <div>
      <ul>
          <li><SidebarItem onClick={onItemClick} itemName="My Jobs" icon={bookMarkIcon} url="/home/user/myjobs"/></li>
          <li ><SidebarItem onClick={onItemClick}  itemName="Edit Profile" icon={penIcon} url="/home/user/profile"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="Settings" icon={settingsIcon} url="/home/user/settings"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="My Reviews" icon={starIcon} url="/home/user/reviews"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="Help Center" icon={phoneIcon} url="/home/user/helpcenter"/></li>
          <li><SidebarItem onClick={onItemClick} itemName="About Us" icon={warningIcon} url="/home/user/about"/></li>
          <li><LogoutButton/></li>  
      </ul>
    </div>
  </div>
  )
}

export default UserSidbar
