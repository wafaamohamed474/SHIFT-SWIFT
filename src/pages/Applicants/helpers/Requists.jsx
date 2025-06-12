import {
  faGraduationCap,
  faLeftLong,
  faLocationDot,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compnayLogo from "../../../assets/Frame 1618873262.png";
import { useNavigate, useLocation } from "react-router-dom";

function Requists() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const applicant = state?.applicant;

  if (!applicant) {
    return <div className="p-10 text-xl text-red-600">No applicant data available.</div>;
  }

  return (
    <div className="w-full mt-10">
      <div className="md:pl-10">
        <button
          
          className="mb-6 flex items-center gap-2 text-sm text-main-color border border-main-color px-3 py-1.5 rounded-md hover:bg-main-color hover:text-white transition w-fit"
        >
          
        </button>

        <h1 className="font-bold text-4xl pb-10">Requests Received</h1>

        <div className="flex border-b border-dark-text pb-5">
          <div className="w-24">
            <img src={applicant.applicantPhoto} alt="applicant" />
          </div>
          <div className="md:pl-10">
            <h2 className="font-semibold text-3xl mb-1">{applicant.jobName}</h2>
            <span className="text-xl mb-1">{applicant.companyName}</span>
            <p className="text-xl">{applicant.experience}</p>
          </div>
        </div>

        {/* Last Work */}
        <div className="flex items-center gap-4 py-5">
          <FontAwesomeIcon icon={faLeftLong} className="text-2xl text-dark-text" />
          <h1 className="text-3xl">Last Work</h1>
        </div>

        <div className="flex border-b border-dark-text pb-5">
          <div className="w-24">
            <img src={compnayLogo} alt="company" />
          </div>
          <div className="md:pl-10">
            <h2 className="font-semibold text-3xl mb-2">{applicant.lastJobTitle}</h2>
            <span className="text-xl mb-2">{applicant.lastCompany}</span>
            <p className="text-xl my-2">{applicant.lastJobPeriod}</p>
            <div className="px-1 rounded mr-1">
              <span className="text-sm font-semibold">{applicant.rating}</span>
              <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1" />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-center gap-4 py-5">
          <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-dark-text" />
          <h1 className="text-3xl">Education</h1>
        </div>
        <div className="md:pl-10 border-b border-dark-text pb-5">
          <h2 className="font-semibold text-3xl mb-2">{applicant.educationTitle}</h2>
          <span className="text-xl mb-2">{applicant.university}</span>
          <p className="text-xl my-2">{applicant.educationPeriod}</p>
        </div>

        {/* Phone Number */}
        <div className="py-5 border-b border-dark-text pb-5">
          <div className="flex items-center gap-4 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-dark-text" />
            <h1 className="text-3xl">Phone Number</h1>
          </div>
          <p className="text-xl">{applicant.phone}</p>
        </div>

        {/* Location */}
        <div className="py-5 pb-5">
          <div className="flex items-center gap-4 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-dark-text" />
            <h1 className="text-3xl">Location</h1>
          </div>
          <p className="text-xl">{applicant.location}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-5">
          <button className="bg-red-700 text-white text-sm font-semibold rounded-xl w-48 p-2" onClick={()=>navigate(-1)}>Rejected</button>
          <button className="bg-green-700 text-white text-sm font-semibold rounded-xl w-48 p-2"onClick={()=>navigate(-1)}>Accepted</button>
        </div>
      </div>
    </div>
  );
}

export default Requists;
