 
import { Link } from "react-router";
 
import Button from '../button/Button';

const AuthNavbar =()=> {
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
              <Link to="/" className="text-base font-normal mx-2 Lg:mx-5">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex  items-center">
          
          <Link to="/login" className="mx-1">
          <Button className="rounded-lg  w-40" type="submit" label="Login" variant="secondary" />
          </Link>
          <Link to="/register-user" className="mx-1">
          <Button className="rounded-lg w-40  me-3" type="submit" label="Sign Up" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthNavbar