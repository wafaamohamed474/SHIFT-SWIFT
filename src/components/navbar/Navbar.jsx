import { Link } from "react-router";
import { getUserData, getUserType } from "../../services/authService";
import userLogo from "../../assets/userLogo.jpg"

const Navbar = () => {
 // const Name = getUserData().firstName + ' ' + getUserData().lastName;
  const  userType =  getUserType()

  const profilePath = userType === "company" ? "/home/company/profile" : "/home/user/profile";

  return (
    <div className="border-b border-border-color py-4">
      <div className="container flex justify-between items-center">
        <div className=" flex justify-between items-center">
          <h1 className="text-main-color font-semibold tracking-extra-wide text-2xl lg:text-3xl">
            SHIFT SWIFT
          </h1>
          <ul className="ml-10 hidden md:flex">
            <li>
              <Link to="/home" className="text-base font-normal mx-2 lg:mx-5">
                Home
              </Link>
            </li>
            <li>
              <Link to="/home" className="text-base font-normal mx-2 Lg:mx-5">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link to= {profilePath} className="flex justify-between items-center">
          {/* <span className="mr-3">{Name}</span> */}
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={userLogo} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
