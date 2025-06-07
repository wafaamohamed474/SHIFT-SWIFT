import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faMoneyBillWave, faCircle, faUser, faShare, faBookmark, faFlag, faXmark ,faStar} from '@fortawesome/free-solid-svg-icons';
const JobDetails = ({ selectedJob, onClose, navigateToApplicants }) => {
  return (
    <div className="border border-border-color rounded-xl flex flex-col gap-y-5 p-5 md:w-1/2 overflow-hidden">
      <div className="hover:bg-transparent hover:cursor-pointer ml-auto">
        <FontAwesomeIcon icon={faXmark} className='text-border-color' onClick={onClose} />
      </div>

      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center">
        <div className='flex flex-col gap-y-3'>
          <div className="flex justify-center items-center gap-x-3">
            <h1 className="text-3xl text-main-text">{selectedJob.title}</h1>
            <span className="mr-auto">
              <img src={selectedJob.VectorImage} className="text-dark-text rounded-lg" />
            </span>
          </div>
          <p className="text-sm w-16 border-b border-border-color">{selectedJob.company}</p>
        </div>
        <span className="ml-auto mt-3 sm:mt-0">
          <img src={selectedJob.logo} className="text-dark-text rounded-lg" />
        </span>
      </div>

      {/* Buttons */}
      <div className='flex gap-3'>
        <button className='border border-border-color text-border-color rounded-lg p-1'>3 Hours Ago</button>
        <button className='border border-green-500 text-green-500 rounded-lg p-1'>33 Applicants</button>
        <button className='border border-border-color text-main-text flex gap-x-1 items-center rounded-lg p-1'>
          <img className="w-3 h-3" src={selectedJob.VectorImage} /> Verified Employer
        </button>
      </div>

      {/* Job Description */}
      <div className='flex flex-col bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
        <h4>Job Description</h4>
        <div className='p-1'>
          {[
            "Responding to customer questions and providing the required information",
            "Assisting customers in solving any problems they encounter with products or services",
            "Logging customer complaints and working to find solutions",
            "Informing customers about offers"
          ].map((desc, i) => (
            <div className='flex items-center gap-x-2 text-md' key={i}>
              <FontAwesomeIcon icon={faCircle} className='text-border-color w-2' />
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className='h-[1px] bg-border-color my-5'></div>

        {/* Info Section */}
        <div className='flex flex-wrap gap-5'>
          <InfoItem icon={faLocationDot} label="Location" value={selectedJob.location} />
          <InfoItem icon={faUser} label="Gender" value={selectedJob.gender} />
          <InfoItem icon={faClock} label="Job Type" value={selectedJob.type} />
          <InfoItem icon={faMoneyBillWave} label="Salary" value={selectedJob.salary} />
        </div>
      </div>

      {/* Requirements */}
      <div className='flex flex-col bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
        <h4>Requirements</h4>
        <div className='p-1'>
          {[
            "Responding to customer questions and providing the required information",
            "Assisting customers in solving any problems they encounter with products or services",
            "Logging customer complaints and working to find solutions",
            "Informing customers about offers"
          ].map((req, i) => (
            <div className='flex items-center gap-x-2 text-md' key={i}>
              <FontAwesomeIcon icon={faCircle} className='text-border-color w-2' />
              <p>{req}</p>
            </div>
          ))}
        </div>
      </div>
      {/*Reviews*/}
      <div className="flex items-center">
  <h4 className=" ">Reviews</h4>
  <a href="#" className="text-main-color border-b border-main-color ml-auto"> View All</a>
</div>
      <div className=" overflow-x-clip mt-5 ">
  <div className="flex gap-4  min-w-max  ">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="bg-fill-bg-color rounded-lg p-4 border border-gray-300 shadow-md w-48  "
      >
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={`text-yellow-400 ${i < selectedJob.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500 break-words">{selectedJob.comment}</p>
      </div>
    ))}
  </div>
</div>

      {/* Footer */}
      <p className='text-sm'>
        at the side we strive to make the job search process efficient transparent and secure start your journey today and let us help you find your dream job
        <br />
        <span className='text-main-color text-md'>Learn More</span> Or <span className='text-main-color text-md'>Report This Job</span>
      </p>

      <div className='flex gap-5'>
        <button className='border border-main-color px-4 py-3 rounded-2xl'>
          <FontAwesomeIcon icon={faShare} className="text-main-color  mr-2 mt-1" />
        </button>
        <button className='border border-main-color px-4 py-3 rounded-2xl'>
          <FontAwesomeIcon icon={faBookmark} className="text-main-color  mr-2 mt-1" />
        </button>
        <button className='border border-main-color px-4 py-3 rounded-2xl'>
          <FontAwesomeIcon icon={faFlag} className="text-main-color  mr-2 mt-1" />
        </button>
        <button
          className="border border-main-color bg-main-color text-white w-full text-center rounded-lg"
          onClick={navigateToApplicants}
        >
          View Applicants
        </button>
      </div>
    </div>
  );
};

// Info item component
const InfoItem = ({ icon, label, value }) => (
  <div className='flex items-center gap-x-3 w-full sm:w-auto'>
    <FontAwesomeIcon icon={icon} className="text-main-color mr-2 mt-1" />
    <div>
      <p className="text-md">{label}</p>
      <h6 className="text-xs font-semibold">{value || "Male/Female"}</h6>
    </div>
  </div>
);

export default JobDetails;
