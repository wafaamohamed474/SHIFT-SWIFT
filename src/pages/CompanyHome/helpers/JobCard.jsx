import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faMoneyBillWave, faStar } from '@fortawesome/free-solid-svg-icons';
import {  getUserData } from '../../../services/authService';
import VectorImage from "../../../assets/Vector_tech.png"
import Image from "../../../assets/userLogo.jpg";
const JobCard = ({ job, onClick ,navigateToApplicants ,ratingData }) => {
  const userData = getUserData();
  const companyName = userData.firstName + " " + userData.lastName;
  const jobTypeReverseMap = {
  1: "Full Time",
  2: "Part Time",
  3: "Freelance",
};
 const salaryTypeReverseMap = {
  1: "Per Month",
  2: "Per Hour",
  3: "Contract",
};

  return (
    <div
      className="bg-fill-bg-color border border-border-color  rounded-xl p-4 hover:shadow-md transition cursor-pointer"
      onClick={() => onClick(job)}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col gap-1 sm:w-3/4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl truncate max-w-[500px] font-semibold">{job.title}</h1>
              <img src={VectorImage} alt="vector" className="w-5 h-5 mt-1" />
           
          </div>
          <p className="text-sm text-gray-600">{companyName}</p>
        </div>

       {/* logo */}
        {job.imageUrl ? (
          <img
            src={job.imageUrl || Image}
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover mt-4 sm:mt-0"
          />
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg mt-4 sm:mt-0" />
        )}
      </div>
        
        
      

      {/*job info*/}
      <div className="flex flex-wrap gap-4 py-4 text-sm text-dark-text">
        <span className="flex items-center text-sm font-semibold gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-dark-text" />
          {job.location}
        </span>
        <span className="flex items-center text-sm font-semibold gap-2">
          <FontAwesomeIcon icon={faClock} className="text-dark-text" />
          {jobTypeReverseMap[job.jobType]}
        </span>
        <span className="flex items-center text-sm font-semibold gap-2">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-dark-text" />
          {job.salary +" EGP/" +salaryTypeReverseMap[job.salaryType]}
        </span>
        {ratingData !== null ? (
  <span className="flex items-center text-sm font-semibold gap-2 text-main-color">                                                           
    <span className="flex items-center gap-1">
      {ratingData.averageScore}
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
    </span>
    ({ratingData.ratings.length} Reviews)
  </span>
) : (
  <span className="text-gray-500 italic">No rating available</span>
)}

      </div>

      {/* View Applicants */}
      <div className="w-full mt-2">
        <button
  className="border border-main-color bg-main-color text-white w-full sm:w-56 h-10 rounded-lg flex items-center justify-center hover:bg-main-color/90 transition"
  onClick={(e) => navigateToApplicants(e, job)}
>
  View Applicants
</button>

      </div>
    </div>
  );
};

export default JobCard;
