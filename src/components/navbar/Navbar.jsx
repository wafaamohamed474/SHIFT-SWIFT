import { Link } from "react-router";
import { getUserData, getUserType } from "../../services/authService";
import userLogo from "../../assets/userLogo.jpg";
import { useEffect, useState } from "react";
import { getCurrentUserData, GetProfilePicture } from "../../services/api/account";

const Navbar = () => {
  
  const [currentUser, setCurrentUser] = useState(null);
  const Name = (currentUser?.firstName ?? "") + " " + (currentUser?.lastName ?? "");
   useEffect(() => {
      (async () => {
        try {
          const user = await getCurrentUserData();
          console.log("user info in nav" , user);
          setCurrentUser(user);
        } catch (error) {
          console.error("Failed to fetch current user", error);
        } 
      })();
    }, []);
  const userType = getUserType();
  const profilePath =
    userType === "company" ? "/home/company/profile" : "/home/user/profile";
  const aboutPath =
    userType === "company" ? "/home/company/about" : "/home/user/about";
  const homePath =
    userType === "company" ? "/home/companyHome" : "/home";
    const [imageUrl, setImageUrl] = useState(null);
     const id =
    getUserType() === "user"
      ? getUserData()?.memberId
      : getUserData()?.companyId;
      const fetchProfilePicture = async () => {
        try {
          const data = await GetProfilePicture(id);
          setImageUrl(data?.data);
        } catch (err) {
          console.error("Error fetching profile picture", err);
        }
      };
      useEffect(() => {
        fetchProfilePicture();
      }, []);

  return (
    <div className="border-b border-border-color py-4">
      <div className="container flex justify-between items-center">
        <div className=" flex justify-between items-center">
          <Link to={homePath} className="text-main-color font-semibold tracking-extra-wide text-2xl lg:text-3xl">
            SHIFT SWIFT
          </Link>
          <ul className="ml-10 hidden md:flex">
            <li>
              <Link to={homePath} className="text-base font-normal mx-2 lg:mx-5">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={aboutPath}
                className="text-base font-normal mx-2 Lg:mx-5"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link to={profilePath} className="flex justify-between items-center">
          <span className="mr-3">{Name}</span>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={imageUrl ? imageUrl : userLogo} className="h-full"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
