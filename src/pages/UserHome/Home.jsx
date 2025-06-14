import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getJobDetails, getRandomJobs } from "../../services/api/home";
import JobCard from './helpers/JobCard';
import JobDetails from './helpers/JobDetails';
import Logo from '../../assets/logo.png';
import SearchIcon from "../../assets/Search_Magnifying_Glass.png";
import SimilerJobCard from './helpers/similerJobsCard';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedJobDetails, setSelectedJobDetails] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [similarJobs, setSimilarJobs] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [searchParams] = useSearchParams();
  const urlJobId = searchParams.get('jobId');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);

    const fetchJobs = async () => {
      try {
        const data = await getRandomJobs();
        setJobs(data);
        setFilteredJobs(data);
        setSimilarJobs(data);

        if (urlJobId) {
          const response = await getJobDetails(urlJobId);
          setSelectedJobId(urlJobId);
          setSelectedJobDetails(response.data);
        } else if (!isMobile && data.length > 0) {
          const firstJob = data[0];
          const response = await getJobDetails(firstJob.id);
          setSelectedJobId(firstJob.id);
          setSelectedJobDetails(response.data);
        } else {
          setSelectedJobId(null);
          setSelectedJobDetails(null);
        }
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      }
    };

    fetchJobs();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, urlJobId]);

  const handleViewDetails = async (job) => {
    try {
      console.log("Fetching details for job:", job.id);
      const response = await getJobDetails(job.id);
      setSelectedJobId(job.id);
      setSelectedJobDetails(response.data);
    } catch (error) {
      console.error("Failed to load job details", error);
    }
  };

  const handleSearch = () => {
    if (searchTitle.trim() === '' && searchLocation.trim() === '') {
      setFilteredJobs(jobs);
      if (!isMobile && jobs.length > 0) {
        handleViewDetails(jobs[0]);
      } else {
        setSelectedJobId(null);
        setSelectedJobDetails(null);
      }
      return;
    }

    const filtered = jobs.filter((job) => {
      const matchesTitle = job.title.toLowerCase().includes(searchTitle.toLowerCase());
      const matchesLocation = job.location.toLowerCase().includes(searchLocation.toLowerCase());
      return matchesTitle && matchesLocation;
    });

    setFilteredJobs(filtered);
    setSelectedJobId(null);
    setSelectedJobDetails(null);
  };

  return (
    <div className="container py-10 px-4 mx-auto">
      {/* heading */}
      <div className='flex flex-col items-center justify-center gap-10 mb-10'>
        <img className="w-72 md:w-96" src={Logo} alt="Logo" />
        {/* Search Bar */}
        <div className='flex flex-col md:flex-row border bg-fill-bg-color  border-border-color h-auto md:h-14  rounded-2xl w-full md:w-[700px]'>
          <div className='flex items-center px-2'>
            <img className='w-10 h-6' src={SearchIcon} alt="Search" />
          </div>
          <input
            className='focus:outline-none text-dark-text p-2 bg-fill-bg-color  w-full border-t md:border-t-0 md:border-r border-border-color'
            type='text'
            placeholder='Job Title'
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <input
            className='focus:outline-none text-dark-text p-2 bg-fill-bg-color  w-full border-t md:border-t-0'
            type='text'
            placeholder='City'
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button
            className='bg-main-color w-full md:w-64 rounded-b-2xl md:m-1 md:rounded-2xl text-white p-2'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Left: Job List */}
        <div className="w-full lg:w-1/2 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id}>
                <JobCard job={job} onView={() => handleViewDetails(job)} />
                {isMobile && job.id === selectedJobId && selectedJobDetails && (
                  <div className="mt-2">
                    <JobDetails selectedJob={selectedJobDetails} />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-500">No jobs found.</div>
          )}
        </div>

        {/* Right: desktop display details */}
        {!isMobile && (
          <div className="hidden lg:block w-1/2">
            {selectedJobDetails && Object.keys(selectedJobDetails).length > 0 && (
              <JobDetails selectedJob={selectedJobDetails} />
            )}
          </div>
        )}
      </div>

      {/* Similar Jobs Section */}
      <div className="mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Similar Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {similarJobs.length > 0 ? (
            similarJobs.map(job => (
              <SimilerJobCard key={job.id} job={job} onView={() => handleViewDetails(job)} />
            ))
          ) : (
            <p className="text-gray-500">No similar jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
