import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faClock,
  faMoneyBillWave,
  faCircle,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import VectorImage from "../../../assets/Vector_tech.png";
import { GetRating } from '../../../services/api/company';
import ReviewSection from "./ReviewSection";
import Image from "../../../assets/userLogo.jpg";
import { useAlert } from '../../../context/AlertContext';
import { getUserData } from '../../../services/authService';
import { applyToJob, getAllMyJobApplications } from '../../../services/api/member';
const JobDetails = ({ selectedJob , onClick}) => {
  if (!selectedJob) return null;
  const [ratingData, setRatingData] = useState(null);
  const [applied, setApplied] = useState(false);

   const { showAlert } = useAlert();
   const userData = getUserData();
   const memberId = userData?.memberId;

  useEffect(() => {
  if (!selectedJob.companyId) return;

  GetRating(selectedJob.companyId)
    .then((data) => {
      setRatingData(data);
    })
    .catch((err) => {
      console.error("Error loading company rating:", err);
    });

    // Check if already applied
  
  getAllMyJobApplications(memberId)
    .then((applications) => {
      const hasApplied = applications.data.some(
        (app) => app.jobId === selectedJob.id
      );
      setApplied(hasApplied);
    })
    .catch(console.error)
    
}, [selectedJob.companyId, selectedJob.id, memberId]);

const handleApply = async (jobId) => {
  try {
    await applyToJob(jobId, memberId);
      setApplied(true);
    showAlert("Applied successfully!");
  } catch (error) {
   const message = error?.data?.[0] || "You have already applied to this job.";
    showAlert(message);
  }
};


  const salaryTypeReverseMap = {
    1: "Per Month",
    2: "Per Hour",
    3: "Contract",
  };

  const jobTypeReverseMap = {
    1: "Full Time",
    2: "Part Time",
    3: "Freelance",
  };

  return (
    <div className="border border-border-color rounded-xl flex flex-col gap-y-5 p-5 overflow-hidden">
    <div className="hover:bg-transparent hover:cursor-pointer ml-auto">
  <FontAwesomeIcon
    icon={faXmark}
    className="text-border-color hover:text-main-color cursor-pointer"
    onClick={() => {
      if (window.innerWidth < 768 && onClick) {
        onClick(); 
      }
    }}
  />
</div>
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center">
        <div className='flex flex-col gap-y-3'>
          <div className="flex justify-center items-center gap-x-3">
            <h1 className="text-2xl sm:text-3xl font-semibold">{selectedJob.title}</h1>
            <span className="mr-auto">
              <img src={VectorImage} alt="Vector" className="text-dark-text rounded-lg" />
            </span>
          </div>
          <p className="text-sm w-fit border-b border-border-color">{selectedJob.companyFirstName + " " + selectedJob.companyLastName}</p>
        </div>
         {/* logo */}
      <span className="bg-white h-20 w-20 rounded-xl ml-auto overflow-hidden flex items-center justify-center">
          <img
          className="object-cover w-full h-full rounded-xl"
          src={selectedJob.companyPictureUrl || Image}
          alt="Company Logo"
          />
      </span>
      </div>

      {/* Job Description */}
      <div className='flex flex-col bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
        <h4 className="font-semibold">Job Description</h4>
        <div className='p-1'>
          <div className='flex items-center gap-x-2 text-md'>
            <FontAwesomeIcon icon={faCircle} className='text-border-color w-2' />
            <p>{selectedJob.description}</p>
          </div>
        </div>

        <div className='h-[1px] bg-border-color my-5'></div>

        {/* Info Section */}
        <div className='flex flex-wrap gap-5'>
          <InfoItem icon={faLocationDot} label="Location" value={selectedJob.location} />
          <InfoItem icon={faUser} label="Gender" value="Male/Female" />
          <InfoItem icon={faClock} label="Job Type" value={jobTypeReverseMap[selectedJob.jobTypeTd]} />
          <InfoItem icon={faMoneyBillWave} label="Salary" value={`${selectedJob.salary} EGP/${salaryTypeReverseMap[selectedJob.salaryTypeId]}`} />
        </div>
      </div>

      {/* Requirements */}
      <div className='flex flex-col bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
        <h4 className="font-semibold">Requirements</h4>
        <div className='p-1'>
          <div className='flex items-center gap-x-2 text-md'>
            <FontAwesomeIcon icon={faCircle} className='text-border-color w-2' />
            <p>{selectedJob.requirements}</p>
          </div>
        </div>
      </div>

   <ReviewSection reviews={ratingData?.ratings || []} />
      {/* Footer */}
      <p className='text-sm'>
        at the side we strive to make the job search process efficient transparent and secure.
        <br />
        <span className='text-main-color text-md'>Learn More</span> Or <span className='text-main-color text-md'>Report This Job</span>
      </p>

     <button
  className={`border w-1/2 p-2 text-center rounded-lg ${applied ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-main-color text-white border-main-color'}`}
  onClick={() => !applied && handleApply(selectedJob.id)}
  disabled={applied}
>
  {applied ? "Applied" : "Apply Now"}
</button>

    </div>
    
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className='flex items-center gap-x-3 w-full sm:w-auto'>
    <FontAwesomeIcon icon={icon} className="text-main-color mr-2 mt-1" />
    <div>
      <p className="text-md">{label}</p>
      <h6 className="text-xs font-semibold">{value}</h6>
    </div>
    
  </div>
  
);

export default JobDetails;
