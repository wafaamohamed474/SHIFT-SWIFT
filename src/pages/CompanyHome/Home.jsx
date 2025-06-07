import  { useState, useEffect } from 'react';
import JobCard from "./helpers/JobCard";
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import VectorImage from '../../assets/Vector_tech.png'
import JobLogo from '../../assets/image 4.png'
import Team from '../../assets/team.png';
import JobDetails from './helpers/JobDetails'
import { getAllJobsForCompany } from "../../services/api/company"
import { getUserData } from '../../services/authService';
const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const userData = getUserData();
    const companyId = userData.companyId;
    const fetchJobs = async () => {
      try {
        const jobs = await getAllJobsForCompany(companyId); 
        console.log(jobs);
        setJobData(jobs);
        setLoading(false);
      } catch (err) {
        setError("Error Fitching Jops");
        setLoading(false);
      }
    };
  
    fetchJobs();
  }, []);
  const handleViewDetails = (job) => {
    if (job !== selectedJob) {
      setSelectedJob(job);
    }
  };

  const navigateToApplicants = () => {
    navigate("company/applicants");
  };

  return (
    <div className="container py-10">
      {/* heading */}
      <div className="flex flex-col items-center justify-center gap-10">
        <img className="w-96 pb-10" src={Logo} alt="Logo" />
      </div>

      {/* Jobs */}
      <div className="flex flex-col md:flex-row w-full py-10 gap-x-3">
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          {loading ? (
            <p>Loading......</p>
          ) : (
            jobData.map((job, index) => (
              <JobCard key={index} job={job} onClick={handleViewDetails} />
            ))
          )}
        </div>
        {selectedJob && (
  <JobDetails
    selectedJob={selectedJob}
    onClose={() => setSelectedJob(null)}
    navigateToApplicants={navigateToApplicants}
  />
)}
    
  </div>
</div>
);
};

export default Home;