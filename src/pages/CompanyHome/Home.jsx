import { useState, useEffect } from "react";
import JobCard from "./helpers/JobCard";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import JobDetails from "./helpers/JobDetails";
import { getAllJobsForCompany, GetRating } from "../../services/api/company";
import { getUserData } from "../../services/authService";

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ratingData, setRatingData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();
  const userData = getUserData();
  const companyId = userData ? userData.companyId : undefined;

  // Detect mobile view on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get Rating
  useEffect(() => {
    if (!companyId) return;
    GetRating(companyId)
      .then(setRatingData)
      .catch(console.error);
  }, [companyId]);

  // Get jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await getAllJobsForCompany(companyId);
        setJobData(jobs);
        setLoading(false);
      } catch (err) {
        console.error("Error Fetching Jobs", err);
        setError("Error Fetching Jobs");
        setLoading(false);
      }
    };

    if (companyId) fetchJobs();
  }, [companyId]);

  // Set first job as selected on desktop only
  useEffect(() => {
    if (!isMobile && jobData.length > 0 && !selectedJob) {
      setSelectedJob(jobData[0]);
    }
  }, [jobData, isMobile]);

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setExpandedJobId(job.jobId);
  };

  const navigateToApplicants = (e, job) => {
    e.stopPropagation();
    navigate(`/home/company/applicants?jobId=${job.jobId}`);
  };

  return (
    <div className="container py-10">
      {/* heading */}
      <div className="flex flex-col items-center justify-center gap-10">
        <img className="w-60 md:w-96 pb-10" src={Logo} alt="Logo" />
      </div>

      {/* Jobs */}
      <div className="flex flex-col md:flex-row w-full py-10 gap-x-3">
        {/* Left Side: Job Cards */}
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          {loading ? (
            <p>Loading...</p>
          ) : (
            jobData.map((job) => (
              <div key={job.jobId}>
                <JobCard
                  job={job}
                  onClick={() => handleViewDetails(job)}
                  navigateToApplicants={(e) => navigateToApplicants(e, job)}
                  ratingData={ratingData}
                />

                {/* Show job details inside card (on mobile only) */}
                {isMobile && expandedJobId === job.jobId && (
                  <div className="mt-2 border border-gray-200 rounded-xl">
                    <JobDetails
                      selectedJob={job}
                      onClose={() => setExpandedJobId(null)}
                      navigateToApplicants={(e) =>
                        navigateToApplicants(e, job)
                      }
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Right Side: Job Details (Desktop only) */}
        {!isMobile && (
          <div className="hidden md:flex w-full md:w-1/2 flex-col">
            {selectedJob && (
              <JobDetails
                selectedJob={selectedJob}
                onClose={() => setSelectedJob(null)}
                navigateToApplicants={(e) =>
                  navigateToApplicants(e, selectedJob)
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
