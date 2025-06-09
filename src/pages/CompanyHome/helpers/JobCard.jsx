import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faMoneyBillWave, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import {  getUserData } from '../../../services/authService';
import { getCompanyRating } from '../../../services/api/company';
import VectorImage from "../../../assets/Vector_tech.png"
const JobCard = ({ job, onClick }) => {
  const navigate = useNavigate();
  const userData = getUserData();
  const companyName = userData.userName;
  const companyId = userData.companyId;
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState(0);
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const data = await getCompanyRating(companyId);
        if (data) {
          setRating(data.ratings);
          setReviews(data.averageScore);
        }
      } catch (error) {
        console.error("Error loading company rating", error);
      }
    };

    fetchRating();
  }, [companyId]);

  const navigateToApplicants = (e) => {
    e.stopPropagation();
    navigate("company/applicants");
  };

  return (
    <div
      className="bg-secondary-color rounded-xl p-4 hover:shadow-md transition cursor-pointer"
      onClick={() => onClick(job)}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col gap-1 sm:w-3/4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-semibold">{job.title}</h1>
              <img src={VectorImage} alt="vector" className="w-5 h-5 mt-1" />
           
          </div>
          <p className="text-sm text-gray-600">{companyName}</p>
        </div>

       {/* logo */}
        {job.companyLogo ? (
          <img
            src={job.companyLogo}
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover mt-4 sm:mt-0"
          />
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg mt-4 sm:mt-0" />
        )}
      </div>
        
        
      

      {/*job info*/}
      <div className="flex flex-wrap gap-4 py-4 text-sm text-dark-text">
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-dark-text" />
          {job.location}
        </span>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-dark-text" />
          {job.jobType}
        </span>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-dark-text" />
          {job.salary}
        </span>
        {rating !== null ? (
  <span className="flex items-center gap-2 text-main-color">
    <span className="flex items-center gap-1">
      {rating}
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
    </span>
    ({reviews} Reviews)
  </span>
) : (
  <span className="text-gray-500 italic">No rating available</span>
)}

      </div>

      {/* View Applicants */}
      <div className="w-full mt-2">
        <button
          className="border border-main-color bg-main-color text-white w-full sm:w-56 h-10 rounded-lg flex items-center justify-center hover:bg-main-color/90 transition"
          onClick={navigateToApplicants}
        >
          View Applicants
        </button>
      </div>
    </div>
  );
};

export default JobCard;
