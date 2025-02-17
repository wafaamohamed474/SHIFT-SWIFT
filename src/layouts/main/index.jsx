import { Outlet } from "react-router"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/Footer/Footer"
 


 

const Main = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Main
