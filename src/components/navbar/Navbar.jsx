import { Link } from "react-router";
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";

const Navbar = () => {
  return (
    <div className="border-b border-border-color py-4">
      <div className="container flex justify-between items-center">
        <div className=" flex justify-between items-center">
          <h1 className="text-main-color font-semibold tracking-extra-wide text-2xl lg:text-3xl">
            SHIFT SWIFT
          </h1>
          <ul className="ml-10 hidden md:flex">
            <li>
              <Link to="/" className="text-base font-normal mx-2 lg:mx-5">
                Home
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="text-base font-normal mx-2 Lg:mx-5">
                Company Reviews
              </Link>
            </li>
            <li>
              <Link to="/user/about" className="text-base font-normal mx-2 Lg:mx-5">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/mainHome" className="text-base font-normal mx-2 Lg:mx-5">
                Main Home
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex justify-between items-center">
          <span className="mr-3">Employers / Post Job</span>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={employer} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
