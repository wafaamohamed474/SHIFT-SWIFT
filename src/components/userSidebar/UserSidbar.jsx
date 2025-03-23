import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";

import SidebarItem from "../sidebarItem/SidebarItem";
import bellIcon from "../../assets/Bell.png"

import penIcon from "../../assets/Edit_Pencil_01.png"
import settingsIcon from "../../assets/Settings.png"
import starIcon from "../../assets/Star.png"

import phoneIcon from "../../assets/Phone.png"
import warningIcon from "../../assets/Info.png"
import logOutIcon from "../../assets/Log_Out.png"

const UserSidbar = () => {
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
        <li><SidebarItem itemName="Edit Profile" icon={penIcon} url="/user/profile"/></li>
          <li><SidebarItem itemName="Settings" icon={settingsIcon} url="/user/settings"/></li>
          <li><SidebarItem itemName="My Reviews" icon={starIcon} url="/user/reviews"/></li>
          <li><SidebarItem itemName="Notifications" icon={bellIcon} url="/user/notifications"/></li>
          <li><SidebarItem itemName="Help Center" icon={phoneIcon} url="/user/helpcenter"/></li>
          <li><SidebarItem itemName="About Us" icon={warningIcon} url="/user/about"/></li>
          <li><SidebarItem itemName="Sign Out" icon={logOutIcon} url="/home"/></li>   
      </ul>
    </div>
  </div>
  )
}

export default UserSidbar
