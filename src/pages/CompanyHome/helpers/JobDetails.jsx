import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VectorImage from "../../../assets/Vector_tech.png";
import {
  faLocationDot,
  faClock,
  faMoneyBillWave,
  faCircle,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { getUserData } from "../../../services/authService";

const JobDetails = ({ selectedJob, onClose, navigateToApplicants }) => {
  const userData = getUserData();
  const companyName = userData.firstName + " " + userData.lastName;

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
    <div className="border border-border-color rounded-xl flex flex-col gap-y-5 p-5 md:w-1/2 overflow-hidden">
      <div className="hover:bg-transparent hover:cursor-pointer ml-auto">
        <FontAwesomeIcon icon={faXmark} className="text-border-color" onClick={onClose} />
      </div>

      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-center items-center gap-x-3">
            <h1 className="text-2xl sm:text-3xl font-semibold">{selectedJob.title}</h1>
            <span className="mr-auto">
              <img src={VectorImage} alt="vector" className="text-dark-text rounded-lg" />
            </span>
          </div>
          <p className="text-sm w-fit border-b border-border-color">{companyName}</p>
        </div>
        <span className="ml-auto mt-3 sm:mt-0">
          <img src={selectedJob.logo} alt="company logo" className="text-dark-text rounded-lg" />
        </span>
      </div>

      {/* Job Description */}
      <div className="flex flex-col bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300 overflow-hidden">
        <h4>Job Description</h4>
        <div className="p-1">
          <div className="flex items-center gap-x-2 text-md">
            <FontAwesomeIcon icon={faCircle} className="text-border-color w-2" />
            <p>{selectedJob.description}</p>
          </div>
        </div>

        <div className="h-[1px] bg-border-color my-5"></div>

        {/* Info Section */}
        <div className="flex flex-wrap gap-5">
          <InfoItem icon={faLocationDot} label="Location" value={selectedJob.location} />
          <InfoItem icon={faUser} label="Gender" value="Male/Female" />
          <InfoItem icon={faClock} label="Job Type" value={jobTypeReverseMap[selectedJob.jobType]} />
          <InfoItem
            icon={faMoneyBillWave}
            label="Salary"
            value={`${selectedJob.salary} EGP / ${salaryTypeReverseMap[selectedJob.salaryType]}`}
          />
        </div>
      </div>

      {/* Requirements */}
      <div className="flex flex-col bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300 overflow-hidden">
        <h4>Requirements</h4>
        <div className="p-1">
          <div className="flex items-center gap-x-2 text-md">
            <FontAwesomeIcon icon={faCircle} className="text-border-color w-2" />
            <p>{selectedJob.requirements}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-sm">
        At The Side we strive to make the job search process efficient, transparent and secure.
        Start your journey today and let us help you find your dream job.
        <br />
        <span className="text-main-color text-md">Learn More</span> or{" "}
        <span className="text-main-color text-md">Report This Job</span>
      </p>

      {/* View Applicants Button */}
      <button
        className="border border-main-color bg-main-color text-white w-full sm:w-56 h-10 rounded-lg flex items-center justify-center hover:bg-main-color/90 transition"
        onClick={(e) => navigateToApplicants(e, selectedJob)}
      >
        View Applicants
      </button>
    </div>
  );
};

// Info item component
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-x-3 w-full sm:w-auto">
    <FontAwesomeIcon icon={icon} className="text-main-color mr-2 mt-1" />
    <div>
      <p className="text-md">{label}</p>
      <h6 className="text-xs font-semibold">{value}</h6>
    </div>
  </div>
);

export default JobDetails;
