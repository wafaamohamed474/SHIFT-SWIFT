import { Outlet} from "react-router";

import Footer from "../../components/Footer/Footer";
import AuthNavbar from "../../components/authNavbar/AuthNavbar";

const PublicLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
