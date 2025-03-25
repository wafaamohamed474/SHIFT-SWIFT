import { Outlet } from 'react-router'
import HomeNav from '../../components/homeNavbar/index'
import Footer from '../../components/footer/footer'
const Auth = () => {
  return (
    <>
      <HomeNav />
      <Outlet/>
      <Footer />
    </>
  )
}

export default Auth
