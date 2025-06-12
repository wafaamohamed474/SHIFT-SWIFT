import { Outlet } from "react-router";

import AuthNavbar from "../../components/authNavbar/AuthNavbar";
import Footer from "../../components/footer/Footer"

const PublicLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
       <Footer/>
       
    </>
  );
};

export default PublicLayout;
