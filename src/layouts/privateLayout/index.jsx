import { Outlet} from "react-router"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { isAuthenticated } from "../../services/authService"
import { Navigate } from "react-router"
 
const PrivateLayout = () => {
   
  if(!isAuthenticated()){
    return <Navigate to="/login" replace/> //Use replace if we want to block users from navigating back
    
  }
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default PrivateLayout
