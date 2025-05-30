import { Link } from "react-router";
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import { getUserData } from "../../services/authService";

const Navbar = () => {
  const Name = getUserData().userName;
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
        <Link to="/home/user/profile" className="flex justify-between items-center">
          <span className="mr-3">{Name}</span>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={employer} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
