import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faMoneyBillWave, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const JobCard = ({ job, onClick }) => {
    const navigate = useNavigate ();
const navigateToApplicants = () => {
    navigate("company/applicants");
  };
  return (
    <div className="bg-secondary-color rounded-xl p-2" onClick={() => onClick(job)}>
      <div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="sm:w-3/4">
            <div className="flex pb-1 pt-2">
              <h1 className="pr-1 text-3xl">{job.title}</h1>
              <span>
                <img src={job.VectorImage} className="text-dark-text mt-2" />
              </span>
            </div>
            <p className="text-sm pb-0">{job.company}</p>
          </div>
          <span className="ml-auto mt-3 sm:mt-0">
            <img src={job.logo} className="text-dark-text w-20 h-20 rounded-lg" />
          </span>
        </div>

        <div className="flex flex-wrap gap-4 pb-5">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-dark-text mr-2 mt-1" />
            <h6>{job.location}</h6>
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-dark-text mr-2 mt-1" />
            <h6>{job.type}</h6>
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-dark-text mr-2 mt-1" />
            <h6>{job.salary}</h6>
          </span>
          <span className="flex items-center pb-1">
            <div>{job.rating}
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
            </div>
            <h6 className="text-main-color ml-2">
              ({job.reviews} <span>Reviews</span>)
            </h6>
          </span>
        </div>

        <div className="flex w-full">
          <button
            className="border border-main-color bg-main-color text-white w-full sm:w-56 h-8 text-center rounded-lg flex items-center justify-center"
            onClick={navigateToApplicants}
          >
            View Applicants
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
