
import { Outlet } from 'react-router'
import UserSidbar from '../../components/userSidebar/UserSidbar'

const UserLayout = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 h-full">
        <div className=" hidden md:block md:col-span-3 border-r border-border-color pt-14 ">
         <UserSidbar/>
        </div>
        <div className=" h-full pt-14 col-span-12  md:col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout
