import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import bookIcon from "../../assets/Bookmark.png"
import SidebarItem from "../sidebarItem/SidebarItem";
import bellIcon from "../../assets/Bell.png"

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
        <li><SidebarItem itemName="Myjobs" icon={bookIcon} url="/user/myjobs"/></li>
        <li><SidebarItem itemName="Notifications" icon={bellIcon} url="/user/notifications"/></li>   
      </ul>
    </div>
  </div>
  )
}

export default UserSidbar
