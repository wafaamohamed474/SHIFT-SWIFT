
import compnayLogo from "../../../assets/Frame 1618873105.png";
import {
  faBookmark,
  faClock,
  faMoneyBill1,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
 
import { useEffect, useState } from "react";
import { getAllSavedJobs } from "../../../services/api/member";
import { getUserData } from "../../../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/button/Button";
 

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const { memberId } = getUserData();
  useEffect(()=>{
    const fetchSavedJobs = async () => {
      try {
        const jobs = await getAllSavedJobs(memberId);
        setSavedJobs(jobs);
      } catch (err) {
        console.error(err.message || 'Something went wrong');
      } 
    };
    fetchSavedJobs();
  }, [memberId]);

  
  return (
    <div className="w-full mt-7">
      {savedJobs.length === 0 ? (   
        <p>No saved jobs found.</p>
      ) : (
        <>
          {
            savedJobs.map((job) => (
              <div key={job.id} className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
                {/* Job Details */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h2 className="font-semibold text-3xl">{job.title}</h2>
                    <span className="text-dark-text text-sm font-semibold">{job.companyName}</span>
                  </div>
                  <div className="w-16 h-16">
                    <img src={job.companyLogo} alt="Company Logo" />
                  </div>
                </div>
                {/* Location, time, salary */}
                <div className="flex justify-between items-start">
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} className="text-sm text-dark-text pr-3"/>
                    <span className="text-sm font-semibold">{job.location}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} className="text-sm text-dark-text pr-3"/>
                    <span className="text-sm font-semibold">{job.jobType}</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMoneyBill1} className="text-sm text-dark-text pr-3"/>
                    <span className="text-sm font-semibold">{job.salary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="px-1 rounded mr-1">
                      <span className="text-sm font-semibold">{job.rating}</span>
                      <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1"/>
                    </div>
                    <span className="text-sm font-semibold text-main-color">({job.reviewsCount} reviews)</span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="mt-5 flex gap-4">
                  <Button type="reset" label={<><FontAwesomeIcon icon={faBookmark} className="mr-2"/> Saved</>} variant="secondary" className="w-1/4 text-main-color border-main-color"/>
                  <Button type="submit" label="View" variant="primary" className="w-1/4"/>
                </div>
              </div>
            ))
          }
        </>
      )}
    </div>
  );
  
};

export default SavedJobs;
