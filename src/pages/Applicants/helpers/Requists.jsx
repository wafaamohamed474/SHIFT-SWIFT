import {  faGraduationCap, faLeftLong, faLocationDot, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compnayLogo from "../../../assets/Frame 1618873262.png";
import { useNavigate } from "react-router-dom";

function Requists({ applicant }) {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-10">
    <div className="md:pl-10 ">
    <button
  onClick={() => navigate(-1)}
  className="mb-6 flex items-center gap-2 text-sm text-main-color border border-main-color px-3 py-1.5 rounded-md hover:bg-main-color hover:text-white transition w-fit"
>
  <span className="text-base">←</span> Back
</button>
      <h1 className="font-bold text-4xl pb-10">Requests Recieved</h1>
      <div className="flex border-b border-dark-text pb-5">
      <div className="w-24">
              <img src={applicant.applicantPhoto} />
           </div>
           <div className="md:pl-10">
              <h2 className="font-semibold text-3xl mb-1">Medical Asistant</h2>
              <span className="text-xl mb-1">Bank Of America</span>
              <p className="text-xl">February 28, 2018-present</p>
              </div>
       </div>
    {/*============================================== */}
    <div className="flex items-center gap-4 py-5">
        <FontAwesomeIcon
                icon={faLeftLong}
                className="text-2xl text-dark-text"></FontAwesomeIcon>
                <h1 className="text-3xl">Last Work</h1>
    </div>
    <h1 className="font-bold text-4xl pb-10">Requests Recieved</h1>
      <div className="flex border-b border-dark-text pb-5">
      <div className="w-24">
              <img src={compnayLogo} />
           </div>
           <div className="md:pl-10">
              <h2 className="font-semibold text-3xl mb-2">Medical Asistant</h2>
              <span className="text-xl mb-2">Bank Of America</span>
              <p className="text-xl my-2">February 28, 2018-present</p>
               <div className="px-1 rounded   mr-1">
              <span className="text-sm font-semibold">4</span>
              <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1"/>
            </div>
              </div>
       </div>
       {/*=======================Education==================== */}
    <div className="flex items-center gap-4 py-5">
        <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-2xl text-dark-text"></FontAwesomeIcon>
                <h1 className="text-3xl">Education</h1>
    </div>
           <div className="md:pl-10 border-b border-dark-text pb-5">
              <h2 className="font-semibold text-3xl mb-2">Deploma In Microsoft</h2>
              <span className="text-xl mb-2">Salam University</span>
              <p className="text-xl my-2">February 28, 2018-present</p>
               <div className="px-1 rounded mr-1">
            </div>
              </div>
      {/*======================Phone Number===================== */}
      <div className=" py-5 border-b border-dark-text pb-5">
        <div className="flex items-center gap-4 mb-2">
        <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl text-dark-text"></FontAwesomeIcon>
                <h1 className="text-3xl">Phone Number</h1>
                </div>
                <p className="text-xl">(704) 555-0127</p>
    </div>
     {/*======================Location===================== */}
     <div className=" py-5 pb-5">
        <div className="flex items-center gap-4 mb-2">
        <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl text-dark-text"></FontAwesomeIcon>
                <h1 className="text-3xl">Location</h1>
                </div>
                <p className="text-xl">Cairo, Egypt</p>
    </div>
    {/*===================Buttons================================= */}
    <div className="flex gap-5">
        <button className="bg-red-700 text-white text-sm font-semibold rounded-xl w-48 p-2">Rejected</button>
        <button className="bg-green-700 text-white text-sm font-semibold rounded-xl w-48 p-2">Accepted</button>
    </div>
      </div>
      </div>
  )
}

export default Requists