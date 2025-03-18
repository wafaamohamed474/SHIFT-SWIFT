import React from 'react'
import { Link } from "react-router";
import employer from "../../assets/61802b25e543f0595b8c08e4b4902fcf.png";
import Button from '../button/Button';

function index() {
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
              <Link to="/company/reviews" className="text-base font-normal mx-2 Lg:mx-5">
                Company Reviews
              </Link>
            </li>
            <li>
              <Link to="/company/about" className="text-base font-normal mx-2 Lg:mx-5">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex  items-center">
          <Link to="/Login/employer">
          <Button className="rounded-lg w-40  me-3" type="submit" label="For Employer" variant="primary" />
          </Link>
          <Link to="/Login/signIn">
          <Button className="rounded-lg  w-40" type="submit" label="Sign In" variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index