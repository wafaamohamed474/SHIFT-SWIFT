import {
  faBookmark,
  faClock,
  faMoneyBill1,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSavedJobs, RemoveJobFromSavedJobs } from "../../../services/api/member";
import { getUserData } from "../../../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/button/Button";
import { useAlert } from "../../../context/AlertContext";

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const { memberId } = getUserData();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const fetchSavedJobs = async () => {
    try {
      const response = await getAllSavedJobs(memberId);
      const jobs = Array.isArray(response) ? response : response?.data || [];
      setSavedJobs(jobs);
    } catch (err) {
      console.error(err.message || "Something went wrong");
      setSavedJobs([]);
    }
  };

  useEffect(() => {
    fetchSavedJobs();
  }, [memberId]);

  const handleRemove = async (jobId) => {
    try {
      await RemoveJobFromSavedJobs(jobId);
      showAlert("Job removed from saved successfully", "success");
      fetchSavedJobs();
    } catch (error) {
      showAlert("Failed to remove job from saved", "error");
    }
  };

  const handleView = (jobId) => {
    navigate(`/home?jobId=${jobId}`);
  };

  return (
    <div className="w-full mt-7">
      {savedJobs.length === 0 ? (
        <p>No saved jobs found.</p>
      ) : (
        savedJobs.map((job) => (
          <div
            key={job.jobId}
            className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color"
          >
            <div className="flex justify-between items-start mb-5">
              <div>
                <h2 className="font-semibold text-3xl">{job.jobTitle}</h2>
                <span className="text-dark-text text-sm font-semibold">
                  {job.description}
                </span>
              </div>
              <div className="w-16 h-16">
                <img src={job.companyPictureUrl} alt="Company Logo" />
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <FontAwesomeIcon icon={faLocationDot} className="text-sm text-dark-text pr-3" />
                <span className="text-sm font-semibold">{job.location}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} className="text-sm text-dark-text pr-3" />
                <span className="text-sm font-semibold">
                  {job.jobTypeTd === 1
                    ? "Full Time"
                    : job.jobTypeTd === 2
                    ? "Part Time"
                    : job.jobTypeTd === 3
                    ? "Freelancer"
                    : "Unknown"}
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faMoneyBill1} className="text-sm text-dark-text pr-3" />
                <span className="text-sm font-semibold">{job.salary}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="px-1 rounded mr-1">
                  <span className="text-sm font-semibold">
                    {job.rating.averageScore}
                  </span>
                  <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1" />
                </div>
                <span className="text-sm font-semibold text-main-color">
                  ({job.rating.ratings.length} reviews)
                </span>
              </div>
            </div>

            <div className="mt-5 flex gap-4">
              <Button
                type="button"
                label={
                  <>
                    <FontAwesomeIcon icon={faBookmark} className="mr-2" />
                    Saved
                  </>
                }
                variant="secondary"
                className="w-1/4 text-main-color border-main-color"
                onClick={() => handleRemove(job.jobId)}
              />
              <Button
                type="submit"
                label="View"
                variant="primary"
                className="w-1/4"
                onClick={() => handleView(job.jobId)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedJobs;
